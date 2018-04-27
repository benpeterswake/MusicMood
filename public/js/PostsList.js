class PostsList extends React.Component{
    render(){
        return(
          <section id="PostList">
          <div className="container">
          <div className="col-lg-6 mx-auto">
              {
                  this.props.posts.map((post, index) => {
                    return (
                      <div className="card">
                        {/* Show list template*/}
                        {
                            this.props.editPost !== index ?
                            <div>
                            <div className="card-header">
                              {post.mood}
                              <button type="button" className="btn btn-default btn-sm"
                              onClick = {() => this.props.toggleState(index, post)}>Edit</button>
                              <button type="button" className="btn btn-default btn-sm"
                              onClick = {() => this.props.deletePost(post, index)}>Delete</button>
                            </div>

                            <div className="card-body">
                              <p>{post.song}</p>
                              <blockquote className="blockquote mb-0">
                                <footer className="blockquote-footer">{post.username}</footer>
                              </blockquote>
                            </div>
                            </div>
                            : ''
                        }
                        {/* Show edit form template*/}
                        {
                            this.props.editPost === index ?
                            <EditForm closeEdit={this.props.closeEdit} handleUpdateSubmit={this.props.handleUpdateSubmit} post={this.props.post} />  : ''
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
