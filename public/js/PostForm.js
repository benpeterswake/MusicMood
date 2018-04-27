class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            avatar: '',
            post_body: '',
            mood: '',
            song: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
      this.setState({
        [event.target.id]: event.target.value
      })
      console.log(this.state);
    }

    handleSubmit(event){
      event.preventDefault()
      this.props.handleSubmit(this.state)
    }

    render(){
        return(
          <section id="PostForm">
            <div className="container postForm">
              <div className="col-lg-6 mx-auto">
                <div className="card">
                  <form onSubmit={this.handleSubmit}>
                  <div className="card-header">
                    <div className="row">
                      <div className="col">
                        <input type="text" className="form-control" id="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
                      </div>
                      <div className="col">
                        <input type="text" className="form-control" id="mood" value={this.state.mood} onChange={this.handleChange} placeholder="Current Mood" />
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div className="form-group">
                      <input type="text" className="form-control" id="song" value={this.state.song} onChange={this.handleChange} placeholder="What's your song..." />
                    </div>
                    <hr/>
                  {this.state.song != ''?<button type="submit" className="btn btn-default">Post</button>:null}  
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )
    }
}
