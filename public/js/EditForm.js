class EditForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user_id: Cookies.get('user_id'),
            mood: '',
            song: '',
            error: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    componentDidMount(){
        this.setState({
              user_id: this.props.post.user_id,
              mood: this.props.post.mood,
              song: this.props.post.song,
              id: this.props.post.id
        })
    }

    handleChange(event){
      this.setState({
        [event.target.id]: event.target.value
      })
    }

    handleClick(mood){
      this.setState({
        mood: mood
      })
    }

    handleSubmit(event){
      if(this.state.mood === ''){
        this.setState({
          error: true
        })
      }else{
        event.preventDefault()
        this.props.handleUpdateSubmit(this.state)
        this.setState({
          mood: '',
          song: ''
        });
    }
}

render(){
    return(
        <section id="edit-section">
         <div className="container">
          <div className="col-lg-12 mx-auto">
            <div className="card">
             <form id="EditForm" onSubmit={this.handleSubmit}>
              <div className="card-header" id="edit-header">
              {this.state.error === true?<p className="error">Please select a mood</p>: null}
                <div className="row">
                  <div className="col-lg-2">
                  {this.state.mood === "happy"?<span id="active" onClick={()=> this.handleClick('')}><i className="em em-smiley"></i></span>
                  :<span onClick={()=> this.handleClick("happy")}><i className="em em-smiley"></i></span>}
                  </div>
                  <div className="col-lg-2">
                  {this.state.mood === "sad" ? <span id="active" onClick={()=> this.handleClick('')}><i className="em em-white_frowning_face"></i></span>
                  : <span onClick={()=> this.handleClick("sad")}><i className="em em-white_frowning_face"></i></span>}
                  </div>
                  <div className="col-lg-2">
                  {this.state.mood === "mad" ? <span id="active" onClick={()=> this.handleClick('')}><i className="em em-angry"></i></span>
                  :<span onClick={()=> this.handleClick("mad")}><i className="em em-angry"></i></span>}
                  </div>
                  <div className="col-lg-2">
                  {this.state.mood === "chill" ? <span id="active" onClick={()=> this.handleClick('')}><i className="em em-beer"></i></span>
                  : <span onClick={()=> this.handleClick("chill")}><i className="em em-beer"></i></span>}
                  </div>
                  <div className="col-lg-2">
                  {this.state.mood === "cute" ? <span id="active" onClick={()=> this.handleClick('')}><i className="em em-blush"></i></span>
                  : <span onClick={()=> this.handleClick("cute")}><i className="em em-blush"></i></span>}
                  </div>
                  <div className="col-lg-2">
                  {this.state.mood === "cold sweat" ? <span id="active" onClick={()=> this.handleClick('')}><i className="em em-cold_sweat"></i></span>
                  : <span onClick={()=> this.handleClick("cold sweat")}><i className="em em-cold_sweat"></i></span>}
                  </div>
               </div>
              </div>
              <div className="card-body" id="edit-card">
               <div className="form-group">
                <input type="text" className="form-control" id="song" value={this.state.song} onChange={this.handleChange} placeholder="What's your song..." required />
               </div>
               <hr/>
                    {
                        this.state.song != '' && this.state.mood != '' ? <button type="submit" className="btn btn-primary">Submit Edits</button> :null
                    }

                   <button onClick={()=> this.props.closeEdit(null)} className="btn btn-default">Cancel</button>
            </div>
           </form>
          </div>
         </div>
        </div>
    </section>
    )
    }

}
