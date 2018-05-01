class PostForm extends React.Component{
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
        this.props.handleSubmit(this.state)
        this.setState({
          mood: '',
          song: ''
        });
      }
    }

    render(){
        return(
          <section id="PostForm">
            <div className="container postForm">
              <div className="col-lg-6 mx-auto">
                <div className="card">
                  <form onSubmit={this.handleSubmit}>
                  <div className="card-header">
                    {this.state.error === true?<p className="white text-center">Please select a mood</p>: null}
                    <div className="row">
                      <div className="col-lg-2">
                      {this.state.mood === "happy"?<span id="active" onClick={()=> this.handleClick('')}><i class="em em-smiley"></i></span>
                      :<span onClick={()=> this.handleClick("happy")}><i class="em em-smiley"></i></span>}
                      </div>
                      <div className="col-lg-2">
                      {this.state.mood === "sad" ? <span id="active" onClick={()=> this.handleClick('')}><i class="em em-white_frowning_face"></i></span>
                      : <span onClick={()=> this.handleClick("sad")}><i class="em em-white_frowning_face"></i></span>}
                      </div>
                      <div className="col-lg-2">
                      {this.state.mood === "mad" ? <span id="active" onClick={()=> this.handleClick('')}><i class="em em-angry"></i></span>
                      :<span onClick={()=> this.handleClick("mad")}><i class="em em-angry"></i></span>}
                      </div>
                      <div className="col-lg-2">
                      {this.state.mood === "chill" ? <span id="active" onClick={()=> this.handleClick('')}><i class="em em-beer"></i></span>
                      : <span onClick={()=> this.handleClick("chill")}><i class="em em-beer"></i></span>}
                      </div>
                      <div className="col-lg-2">
                      {this.state.mood === "cute" ? <span id="active" onClick={()=> this.handleClick('')}><i class="em em-blush"></i></span>
                      : <span onClick={()=> this.handleClick("cute")}><i class="em em-blush"></i></span>}
                      </div>
                      <div className="col-lg-2">
                      {this.state.mood === "cold sweat" ? <span id="active" onClick={()=> this.handleClick('')}><i class="em em-cold_sweat"></i></span>
                      : <span onClick={()=> this.handleClick("cold sweat")}><i class="em em-cold_sweat"></i></span>}
                      </div>

                    </div>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <input type="text" className="form-control" id="song" value={this.state.song} onChange={this.handleChange} placeholder="Post a YouTube link, or tell us how you're feeling..." required/>
                    </div>
                      <hr/>
                      {this.state.song != '' ? <button type="submit" className="btn btn-primary">Post</button> :null }
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )
    }
}
