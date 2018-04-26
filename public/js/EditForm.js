class EditForm extends React.Component{
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
        this.submitEdit = this.submitEdit.bind(this)
    }

    componentDidMount(){
        this.setState({
              username: this.props.post.username,
              avatar: this.props.post.avatar,
              post_body: this.props.post.post,
              mood: this.props.post.mood,
              song: this.props.post.song,
              id: this.props.post.id
        })
    }

    handleChange(event){
      this.setState({
        [event.target.id]: event.target.value
      })
      console.log(this.state);
    }

    submitEdit(event){
      event.preventDefault()
      console.log(this.state);
      this.props.handleUpdateSubmit(this.state)
    }

    render(){
        return(
            <div className="col-lg-12 mx-auto">
                <h2>{this.state.song}</h2>
                <form onSubmit={this.submitEdit}>
                  <div className="row">
                    <div className="col">
                      <input type="text" className="form-control" id="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" id="song" value={this.state.song} onChange={this.handleChange} placeholder="Song" />
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea type="text" className="form-control" id="post_body" value={this.state.post_body} onChange={this.handleChange} placeholder="Your post"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit Post Edits</button>
                </form>
            </div>
        )
    }

}
