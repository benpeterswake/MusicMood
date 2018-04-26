// class PostForm extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             username: '',
//             avatar: '',
//             post: '',
//             mood: '',
//             song: ''
//         }
//     }
//     render(){
//         return(
//             <div className="mx-auto">
//                 <h2>PostForm</h2>
//                 <form>
//                   <div className="form-row">
//                     <div className="form-group col-md-6">
//                       <label for="inputUsername">Username</label>
//                       <input type="text" className="form-control" id="username" placeholder="username" />
//                     </div>
//                   </div>
//                   <div className="form-row">
//                     <div className="form-group col-md-6">
//                       <label for="inputAvatar">Link to Avatar image</label>
//                       <input type="text" className="form-control" id="inputAvatarURL" placeholder="Avatar URL" />
//                     </div>
//                   </div>
//                   <div className="form-row">
//                   <div className="form-group col-md-6">
//                     <label for="postText">Post text</label>
//                     <input type="text" className="form-control" id="postText" placeholder="Post" />
//                   </div>
//                   </div>
//                   <div className="form-row">
//                     <div className="form-group col-md-4">
//                       <div className="form-check">
//                         <input className="form-check-input" type="checkbox" id="moods" />
//                         <label className="form-check-label" for="gridCheck">
//                           Happy
//                         </label>
//                       </div>
//                     </div>
//                     <div className="form-group col-md-4">
//                       <div className="form-check">
//                         <input className="form-check-input" type="checkbox" id="moods" />
//                         <label className="form-check-label" for="gridCheck">
//                           Sad
//                         </label>
//                       </div>
//                     </div>
//                    <div className="form-group col-md-4">
//                     <div className="form-check">
//                       <input className="form-check-input" type="checkbox" id="moods" />
//                       <label className="form-check-label" for="gridCheck">
//                         Angry
//                       </label>
//                     </div>
//                   </div>
//                   </div>
//
//                   <button type="submit" className="btn btn-primary">Submit Post to PostsList</button>
//                 </form>
//             </div>
//         )
//     }
// }
//
//
// class ViewPost extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h2>Individual Post Component Working, not fully styled</h2>
//                     <div>
//                         <img class= "post-image" src='https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c7.0.720.720/21479626_480279855683354_7294317085360914432_n.jpg?ig_cache_key=MTU5OTY4NzI4NzIzODUwOTgyOA%3D%3D.2.com'/>
//                         <p> Vic </p>
//                         <p> PostText </p>
//                         <p> MoodText </p>
//                         <p> Song </p>
//                     </div>
//
//                 <button type="submit" className="btn btn-primary"> Return to all Posts </button>
//                 <button type="submit" className="btn btn-primary"> Edit this Post onClick show PostForm </button>
//                     <h2>PostForm under here until toggle time</h2>
//                         <PostForm />
//                             <button type="submit" className="btn btn-primary"> Show PostsList </button>
//
//                             <button type="submit" className="btn btn-primary"> Submit Edits onClick hide PostForm </button>
//
//                             <button type="submit" className="btn btn-primary">Delete Post onClick delete</button>
//                 <h3> ===end of individual post component===</h3>
//             </div>
//
//         )
//     }
// }
//
class PostsList extends React.Component{
    render(){
        return(
          <div className="col-lg-6 mx-auto">
              {
                  this.props.posts.map((post, index) => {
                    return (
                      <div class="card">
                        <div class="card-header">
                          {post.mood}
                        </div>
                        <div class="card-body">
                          <blockquote class="blockquote mb-0">
                            <p>{post.post}</p>
                            <footer class="blockquote-footer">{post.username}</footer>
                          </blockquote>
                        </div>
                      </div>
                      )
                  })
              }
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

    componentDidMount(){
        this.getPosts()
    }

    getPosts(){
      fetch('/posts')
      .then(res => res.json())
      .then(data => {
        this.setState({
          posts: data
        })
      })
    }

    render(){
        return (
            <div>
                <h2 className="text-center">Posts</h2>
                <PostsList posts={this.state.posts}/>
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
                <img src="musiclogo.png" className="d-inline-block align-top" alt=""/>
            </a>

        </nav>
    </div>
    )
  }
}

class App extends React.Component{
    render(){
        return(
            <div>
                <Navigation />
                <Posts />
            </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
