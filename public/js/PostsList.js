class PostsList extends React.Component{
  render(){
    return(
      <section id="PostList">
        <div className="container">
          <div className="col-lg-6 mx-auto">
            {
              this.props.posts.map((post, index) => {
                let parsedURL= null

                if(post.song.includes("youtube")){

                  let youtubeURL = post.song.split('=')
                  parsedURL= 'https://www.youtube.com/embed/' + youtubeURL[1];

                  console.log(post);

              } else if(post.song.includes("spotify")){
                  let spotifyURL = post.song.split('track')
                  parsedURL = 'https://www.spotify.com/us/embed/track/' + spotifyURL[1];

                  console.log(parsedURL);

              } else {
                  return ("Please insert a youtube or spotify player link")
              }

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

                                <div className="video">Song Title: {post.song}</div>
                                    <iframe className="video" src={parsedURL} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

                                <div className="footer"><blockquote className="blockquote mb-0">
                                  <footer className="username">@{post.username}Benpeterscode</footer>
                                </blockquote></div>

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
