class Posts extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editPost: null,
            showSpinner: false,
            posts: [],
            post: {},
            total:0
        }
        this.toggleState = this.toggleState.bind(this)
        this.getPosts = this.getPosts.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
        this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
        this.handleUserUpdate = this.handleUserUpdate.bind(this)
        this.deletePost = this.deletePost.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.refresh = this.refresh.bind(this)
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
        let total = 0
        for(let i=0; i<data.length; i++){
          if(data[i].user_id == Cookies.get('user_id')){
            total++
          }else{
            console.log('no posts');
          }
        }
        this.setState({
          total: total
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

    handleUserUpdate(post){
      let data = {
        id: Cookies.get('user_id'),
        username: post.user
      }
      fetch('/users', {
          body: JSON.stringify(data),
          method: 'PUT',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          }
      }).then(updatedUser  => {
          return updatedUser.json()
      }).then(jsonedUser => {
          Cookies.remove("username")
          Cookies.set("username", jsonedUser.user.username)
      }).catch(error => console.log(error))
    }

    refresh(){
      this.setState({
        showSpinner: true
      })
      setTimeout(() => {
          location.reload()
      }, 1000)
    }

    deletePost (post, index) {
      console.log('clicked');
      fetch('/posts/' + post.id, {
        method: 'DELETE'
      }). then(data => {
        this.setState({
          total: this.state.total-1,
          posts: [
            ...this.state.posts.slice(0, index),
            ...this.state.posts.slice(index + 1)
          ],
        })
      })
    }

    render(){
        return (
            <div>
                <User handleUserUpdate={this.handleUserUpdate} toggleProfile={this.toggleProfile} showProfile={this.state.showProfile} total={this.state.total} />
                <Trend />
                <PostForm handleCreate={this.handleCreate} handleSubmit={this.handleCreateSubmit}/>
                <PostsList
                showSpinner={this.state.showSpinner}
                refresh={this.refresh}
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
