class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      username: '',
      password_digest: '',
      match:null,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.id]: event.target.value
    })
    fetch('/users')
    .then(res => res.json())
    .then(data => {
      for(let i=0; i<data.length; i++){
        console.log(data[i].username);
        if(this.state.username === ''){
          this.setState({
            match: null
          })
        }else if(data[i].username === this.state.username){
          this.setState({
            match: true
          })
          return true
          console.log(this.state.match);
        }else{
          this.setState({
            match: false
          })
          console.log(this.state.match);
        }
      }
    })
  }

  handleSubmit(event){
    this.props.clearMessages()
    event.preventDefault();
    if(this.state.match === true){
      console.log('user already exists');
    }else{
      this.props.signUp(this.state)
      this.setState({
        username: '',
        password_digest: ''
      })
    }
  }

  render() {
    return (
      <div id="home">
        <div className="row" id="home">
          <div className="col" id="left-home">
            <div id="intro">
              <p><img src="musiclogo.png" className="d-inline-block align-top logo" width="250px" alt=""/></p>
              <p><img src="search.png" alt="search" height="35px" width="35px"/> &nbsp;Use your mood to discover music</p>
              <p><img src="people.png" alt="search" height="35px" width="35px"/> &nbsp; See what other people are listening too</p>
              <p><img src="conversation.png" alt="search" height="35px" width="35px"/> &nbsp; Enjoy new music with friends</p>
            </div>
          </div>
          <div className="col" id="right-home">
            <section id="signup-form">
              <div className="container">
                <div className="col-lg-6 mx-auto">
                  <div className="card" id="signup-card">
                    <div id="welcome">
                      <p>See what music is being listened to around the world right now</p>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                      <div className="card-header" id="signup-header">
                        <div className="row">
                          <div className="card-body" id="login-text">Join Music Mood today.
                            <div className="form-group" id="Signup">
                              {this.state.match === true?<p class="error"><i class="fas fa-times-circle"></i>

 Username already exists</p>: null}
                              {this.state.match === false?<p class="available"><i class="fas fa-check-circle"></i>

 Username is available</p>: null}
                              <input type="text" id="username" className="form-control" placeholder="Username" onChange={this.handleChange} value={this.state.username} required/>
                              <input type="password" id="password_digest" className="form-control" placeholder="Password"  onChange={this.handleChange} value={this.state.password_digest} required/>
                              <button type="submit" className="btn btn-outline-secondary btn-lg btn-block" id="submit-btn">Sign Up</button>
                              <div id="login-link">Have an account? <a href="#" className="btn btn-sm btn-outline-secondary" onClick={() => this.props.toggleState('showSignup','showLogin')}>Login</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}
