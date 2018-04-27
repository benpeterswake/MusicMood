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
            <section id="EditForm">
             <div className="container">
              <div className="col-lg-12 mx-auto">
                <div className="card">
                 <form onSubmit={this.submitEdit}>
                  <div className="card-header">
                   <input type="text" className="form-control" id="mood" value={this.state.mood} onChange={this.handleChange} placeholder="Mood" />
                  </div>

                  <div className="card-body">
                   <div className="form-group">
                    <input type="text" className="form-control card-text" id="song" value={this.state.song} onChange={this.handleChange} placeholder="Song" />
                   </div>
                    <button type="submit" className="btn btn-primary">Submit Edits</button>
                </div>
               </form>
              </div>
             </div>
            </div>
        </section>
        )
    }

}
