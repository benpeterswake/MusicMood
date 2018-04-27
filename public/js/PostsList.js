class PostsList extends React.Component{
    render(){
        return(
          <section id="PostList">
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
                              <button type="button" className="btn btn-default btn-sm"
                              onClick = {() => this.props.toggleState(index, post)}>Edit</button>

                              {
                                  this.props.editPost === index ?
                                  <EditForm handleUpdateSubmit={this.props.handleUpdateSubmit} post={this.props.post} />  : ''
                              }
                              <button type="button" className="btn btn-default btn-sm"
                              onClick = {() => this.props.deletePost(post, index)}>Delete</button>
                            </div>

                            <div className="card-body">
                              <blockquote className="blockquote mb-0">
                                <footer className="blockquote-footer">{post.username}</footer>
                                <p>{post.post}</p>
                              </blockquote>
                            </div>
                            </div>
                            : ''
                        }


                      </div>
                      )
                  })
              }
          </div>
          </div>
          </section>
        )
    }
}
