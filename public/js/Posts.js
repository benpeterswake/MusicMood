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
        this.deletePost = this.deletePost.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
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

    toggleButtons(){
      this.setState({

      })
    }

    closeEdit(x){
      this.setState({
        editPost: x
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
        this.getPosts()
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

    deletePost (post, index) {
      console.log('clicked');
      fetch('/posts/' + post.id, {
        method: 'DELETE'
      }). then(data => {
        this.setState({
          posts: [
            ...this.state.posts.slice(0, index),
            ...this.state.posts.slice(index + 1)
          ]
        })
      })
    }

    render(){
        return (
            <div>
                <PostForm handleCreate={this.handleCreate} handleSubmit={this.handleCreateSubmit}/>
                <PostsList
                closeEdit = {this.closeEdit}
                handleUpdateSubmit={this.handleUpdateSubmit}
                post={this.state.post}
                editPost={this.state.editPost}
                toggleState={this.toggleState}
                posts={this.state.posts}
                deletePost={this.deletePost}/>
            </div>
        )
    }
}
