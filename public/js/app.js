class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            avatar: '',
            post: '',
            mood: '',
            song: ''
        }
    }
    render(){
        return(
            <div>
                <h2>PostForm</h2>
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="inputUsername">Username</label>
                      <input type="text" className="form-control" id="username" placeholder="username" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="inputAvatar">Link to Avatar image</label>
                    <input type="text" className="form-control" id="inputAvatarURL" placeholder="Avatar URL" />
                  </div>
                  <div className="form-group">
                    <label for="postText">Post text</label>
                    <input type="text" className="form-control" id="postText" placeholder="Post" />
                  </div>


                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="moods" />
                      <label className="form-check-label" for="gridCheck">
                        Happy
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="moods" />
                      <label className="form-check-label" for="gridCheck">
                        Sad
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="moods" />
                      <label className="form-check-label" for="gridCheck">
                        Angry
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">Submit Post to PostsList</button>
                </form>
            </div>
        )
    }
}


class ViewPost extends React.Component{
    render(){
        return(
            <div>
                <h2>Individual Post Component Working, not fully styled</h2>
                    <div>
                        <img src='https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c7.0.720.720/21479626_480279855683354_7294317085360914432_n.jpg?ig_cache_key=MTU5OTY4NzI4NzIzODUwOTgyOA%3D%3D.2.com'/>
                        <p> olena </p>
                        <p> PostText </p>
                        <p> MoodText </p>
                        <p> Song </p>
                    </div>

                <button type="submit" className="btn btn-primary"> Return to all Posts </button>
                <button type="submit" className="btn btn-primary"> Edit this Post onClick show PostForm </button>
                    <h2>PostForm under here until toggle time</h2>
                        <PostForm />
                            <button type="submit" className="btn btn-primary"> Show PostsList </button>

                            <button type="submit" className="btn btn-primary"> Submit Edits onClick hide PostForm </button>

                            <button type="submit" className="btn btn-primary">Delete Post onClick delete</button>
                <h3> ===end of individual post component===</h3>
            </div>

        )
    }
}

class PostsList extends React.Component{
    render(){
        return(
            <div>
            <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th scope="col">User</th>
                    <th scope="col">Post onClick ViewPost</th>
                    <th scope="col">Mood </th>
                    <th scope="col">Song</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">avatar and username</th>
                        <td>Post text</td>
                        <td>Mood text</td>
                        <td>Song link or player?</td>
                </tr>
                <tr>
                    <th scope="row">avatar and username</th>
                        <td>Post text</td>
                        <td>Mood text</td>
                        <td>Song link or player?</td>
                </tr>
                <tr>
                    <th scope="row">avatar and username</th>
                        <td>Post text</td>
                        <td>Mood text</td>
                        <td>Song link or player?</td>
                </tr>
                </tbody>
                </table>
                <h3>===end of postlist component===</h3>
                </div>
        )
    }
}

class Posts extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            postsList: true,
            addPost: false,
            showPost: false,
            editPost: false,
            posts: [],
            post: {}
        }
    }
    render(){
        return (
            <div>
                <h2>Posts Component working</h2>
            </div>
        )
    }
}

class Navigation extends React.Component {
  render () {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src="" width="30" height="30" className="d-inline-block align-top" alt=""/>
                    Logo
            </a>

            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    </div>
    )
  }
}

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Hai frendz</h1>
                <Navigation />
                <PostForm />
                <Posts />
                <PostsList />
                <ViewPost />
            </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
