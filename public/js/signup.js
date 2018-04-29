class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      username: '',
      password_digest: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.signUp(this.state)
    this.setState({
      username: '',
      password_digest: ''
    })
  }

  render() {
    return (
      <div id="home">
        <div className="row" id="home">
          <div className="col" id="left-home">
            <div id="intro">
              <p><img src="search.png" alt="search" height="30px" width="35px"/> &nbsp;Use your mood to discover music</p>
              <p><img src="people.png" alt="search" height="25px" width="35px"/> &nbsp; See what other people are listening too</p>
              <p><img src="conversation.png" alt="search" height="25px" width="35px"/> &nbsp; Enjoy new music with friends</p>
            </div>
          </div>
          <div className="col" id="right-home">
            <section id="signup-form">
              <div className="container signup-form">
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
                              <input type="text" id="username" className="form-control" placeholder="Username" onChange={this.handleChange} value={this.state.username} required/>
                              <input type="password" id="password_digest" className="form-control" placeholder="Password"  onChange={this.handleChange} value={this.state.password_digest} required/>
                              <button type="submit" className="btn btn-outline-secondary btn-lg btn-block" id="submit-btn">Sign Up</button>
                              <div>Have an account? <a href="#" className="btn btn-sm" id="login-link" onClick={() => this.props.toggleState('showSignup','showLogin')}>Login</a></div>
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
