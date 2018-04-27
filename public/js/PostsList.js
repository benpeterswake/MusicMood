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

                        <div class="card-block">

                          <div className="card-subtitle">
                            <button type="button" className="badge badge-danger float-right"
                              onClick = {() => this.props.deletePost(post, index)}>X</button>

                              <span className="pencil float-right"
                                onClick = {() => this.props.toggleState(index, post)} >&#9998;</span>
                              </div>

                          <div className="card-header"> Mood: {post.mood}
                              </div>
                            </div>

                            <div className="card-body">
                                <div className="card-title">
                              <div className="song">{post.song}</div>


                              <div className="footer"><blockquote className="blockquote mb-0">
                                <footer className="username">@{post.username}</footer>
                              </blockquote></div>

                              </div>
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
