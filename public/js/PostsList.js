class PostsList extends React.Component{
  render(){
    return(
      <section id="PostList">
        <div className="container">
          <div className="col-lg-6 mx-auto">
          <button onClick={this.props.refresh} className="btn"><i class="fas fa-redo"></i> Refresh Feed</button> {this.props.showSpinner?<span><img src="https://lul.org/wp-content/uploads/2016/12/cm_loader_300x300.gif" width="50px"/></span>: null}
            {
              this.props.posts.map((post, index) => {
                let parsedURL = null
                let parsedPost = null
                if(post.song!= null && post.song.includes("youtube")){
                  let youtubeURL = post.song.split('v=')
                  parsedPost = youtubeURL[0].split('http')
                  parsedURL= 'https://www.youtube.com/embed/' + youtubeURL[1];
                } else {
                  console.log("no link");
                }
                return (
                  <div className="card" id="newsfeed">
                    {
                      this.props.editPost !== index ?
                      <div>
                        <div className="card-block">
                          { post.user_id === Cookies.get("user_id")?

                          <div className="card-subtitle">
                            <button type="button" className="badge float-right"
                              onClick = {() => this.props.deletePost(post, index)}><i class="fa fa-trash"></i></button>

                              <span className="pencil float-right"
                                onClick = {() => this.props.toggleState(index, post)} ><i class="far fa-edit"></i></span>
                              </div>: null }

                              <div className="card-header" id="post-header">
                                <blockquote className="blockquote mb-0">
                                  <footer className="username">@{post.username} is feeling
                                    {
                                      post.mood === "happy" ? <i className="em em-smiley"></i> : null
                                    }
                                    {
                                      post.mood === "sad" ? <i className="em em-white_frowning_face"></i> : null
                                    }
                                    {
                                      post.mood === "mad" ? <i className="em em-angry"></i> : null
                                    }
                                    {
                                      post.mood === "chill" ? <i className="em em-beer"></i> : null
                                    }
                                    {
                                      post.mood === "cute" ? <i className="em em-blush"></i> : null
                                    }
                                    {
                                      post.mood === "cold sweat" ? <i className="em em-cold_sweat"></i> : null
                                    }
                                  </footer>
                                </blockquote>
                              </div>
                            </div>
                            <div className="card-body">
                              {
                                parsedURL?
                                <div>
                                <div className="videoTitle">{parsedPost[0]}</div>
                                <iframe className="video" src={parsedURL} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                </div>
                                :<div className="songTitle">{post.song}</div>
                              }
                            </div>
                          </div>
                          : ''
                        }

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
