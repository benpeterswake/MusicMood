class PostsList extends React.Component{
  render(){
    return(
      <section id="PostList">
        <div className="container">
          <div className="col-lg-6 mx-auto">
            {
              this.props.posts.map((post, index) => {

                  let url = post.song.split('=')
                  let parsedUrl = 'https://www.youtube.com/embed/' + url[1];
                  console.log(parsedUrl);

                return (
                  <div className="card" id="newsfeed">
                    {/* Show list template*/}
                    {
                      this.props.editPost !== index ?
                      <div>
                        <div className="card-block">
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
<<<<<<< HEAD
                                <div className="songTitle">Song Title: {post.song}</div>
                                <iframe className="video" src={parsedUrl} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
=======

                                <div className="songTitle">Song Title: {post.song}</div>

                                <div className="song">{post.song} <iframe className="player" src="https://open.spotify.com/embed/track/7yotKA30dwTKNEGomV9ZsI" width="485" height="125" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>




>>>>>>> af2de38c65a3ce3b707f605410186afe3f027391
                                <div className="footer"><blockquote className="blockquote mb-0">
                                  <footer className="username">@{post.username}Benpeterscode</footer>
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
