//
//
// class ViewPost extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h2>Individual Post Component Working, not fully styled</h2>
//                     <div>
//                         <img className= "post-image" src='https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c7.0.720.720/21479626_480279855683354_7294317085360914432_n.jpg?ig_cache_key=MTU5OTY4NzI4NzIzODUwOTgyOA%3D%3D.2.com'/>
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

class EditForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            avatar: '',
            post_body: '',
            mood: '',
            song: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitEdit = this.submitEdit.bind(this)
    }

    componentDidMount(){
        this.setState({
              username: this.props.post.username,
              avatar: this.props.post.avatar,
              post_body: this.props.post.post,
              mood: this.props.post.mood,
              song: this.props.post.song,
              id: this.props.post.id
        })
    }

    handleChange(event){
      this.setState({
        [event.target.id]: event.target.value
      })
      console.log(this.state);
    }

    submitEdit(event){
      event.preventDefault()
      console.log(this.state);
      this.props.handleUpdateSubmit(this.state)
    }

    render(){
        return(
            <div className="col-lg-12 mx-auto">
                <h2>{this.state.song}</h2>
                <form onSubmit={this.submitEdit}>
                  <div className="row">
                    <div className="col">
                      <input type="text" className="form-control" id="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" id="song" value={this.state.song} onChange={this.handleChange} placeholder="Song" />
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea type="text" className="form-control" id="post_body" value={this.state.post_body} onChange={this.handleChange} placeholder="Your post"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit Post Edits</button>
                </form>
            </div>
        )
    }

}

class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            avatar: '',
            post_body: '',
            mood: '',
            song: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
      this.setState({
        [event.target.id]: event.target.value
      })
      console.log(this.state);
    }

    handleSubmit(event){
      event.preventDefault()
      this.props.handleSubmit(this.state)
    }

    render(){
        return(
            <div className="col-lg-6 mx-auto">
                <h2>Post a song</h2>
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col">
                      <input type="text" className="form-control" id="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" id="song" value={this.state.song} onChange={this.handleChange} placeholder="Song" />
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea type="text" className="form-control" id="post_body" value={this.state.post_body} onChange={this.handleChange} placeholder="Your post"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit Post to PostsList</button>
                </form>
            </div>
        )
    }
}

class PostsList extends React.Component{
    render(){
        return(
          <div className="col-lg-6 mx-auto">
            <h2>Posts</h2>
              {
                  this.props.posts.map((post, index) => {
                    return (
                      <div className="card">
                        {
                            this.props.editPost !== index ?
                            <div>
                            <div className="card-header">
                              {post.mood}
                            </div>
                            <div className="card-body">
                              <blockquote className="blockquote mb-0">
                                <p>{post.post}</p>
                                <footer className="blockquote-footer">{post.username}</footer>
                              </blockquote>
                            </div>
                            </div>
                            : ''
                        }
                        <button type="button" className="btn btn-primary"
                        onClick = {() => this.props.toggleState(index, post)}>Edit</button>

                        {
                            this.props.editPost === index ?
                            <EditForm handleUpdateSubmit={this.props.handleUpdateSubmit} post={this.props.post} />  : ''
                        }
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
            editPost: null,
            posts: [],
            post: {}
        }

        this.toggleState = this.toggleState.bind(this)
        this.getPosts = this.getPosts.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
        this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
    }

    componentDidMount(){
        this.getPosts()
    }

    toggleState(index, post){
        this.setState({
            editPost: index,
            post: post
        })
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

    handleCreate(post){
      const updatePost = this.state.posts
      updatePost.unshift(post)
      this.setState({
        posts: updatePost
      })
      console.log(posts);
    }

    handleCreateSubmit(post){
      fetch('/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      }).then(res => {
        return res.json()
      }).then(newPost => {
        this.handleCreate(newPost)
        console.log(newPost)
      }).catch(error => console.log(error))
    }

    handleUpdateSubmit (post, index){
        fetch('/posts/' + post.id, {
            body: JSON.stringify(post),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updatedPost => {
            return updatedPost.json()
        }).then(jsonedPost => {
            this.setState({editPost: null})
            this.getPosts()
        }).catch(error => console.log(error))
    }

    render(){
        return (
            <div>
                <PostForm handleCreate={this.handleCreate} handleSubmit={this.handleCreateSubmit}/>
                <PostsList handleUpdateSubmit={this.handleUpdateSubmit} post={this.state.post} editPost={this.state.editPost} toggleState={this.toggleState} posts={this.state.posts}/>
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
