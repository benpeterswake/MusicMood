class PostsList extends React.Component{
  render(){
    return(
      <section id="PostList">
        <div className="container">
          <div className="col-lg-6 mx-auto">
            {
              this.props.posts.map((post, index) => {
                let parsedURL= null
                if(post.song!= null && post.song.includes("youtube")){
                  let youtubeURL = post.song.split('v=')
                  parsedURL= 'https://www.youtube.com/embed/' + youtubeURL[1];
                } else {
                  console.log("Please insert a youtube or spotify player link");
                }
                return (
                  <div className="card" id="newsfeed">
                    {/* Show list template*/}
                    {
                    this.props.editPost !== index ?
                      <div>
                        <div className="card-block">
                          { post.user_id === Cookies.get("user_id")? <div className="card-subtitle">
                            <button type="button" className="badge float-right"
                              onClick = {() => this.props.deletePost(post, index)}><i class="fa fa-trash"></i></button>

                              <span className="pencil float-right"
                                onClick = {() => this.props.toggleState(index, post)} ><i class="far fa-edit"></i></span>
                              </div>: null }
                              <div className="card-header" id="post-header"> Mood: {post.mood}
                              </div>
                            </div>

                            <div className="card-body">
                              {/*<div className="songTitle">Song Link: {post.song}</div>*/}
                                <iframe className="video" src={parsedURL} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                <div className="footer">
                                  <blockquote className="blockquote mb-0">
                                    <footer className="username">@{post.username}</footer>
                                  </blockquote>
                                </div>
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
