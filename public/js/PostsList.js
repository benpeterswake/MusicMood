class PostsList extends React.Component{
    render(){
        return(
          <div className="container">
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

                        <button type="button" className="btn btn-primary"
                        onClick = {() => this.props.deletePost(post, index)}>Delete</button>
                      </div>
                      )
                  })
              }
          </div>
          </div>
        )
    }
}
