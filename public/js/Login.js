class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      username: '',
      password: '',
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
    this.props.logIn(this.state);
    this.setState({
      username: '',
      password: ''
    })
    this.props.clearMessages()
  }

  render() {
    return (
      <section id="LoginForm">
        <div className="container login-form">
          <div className="col-lg-6 mx-auto">
            <div className="card">
              <form onSubmit={this.handleSubmit}>
                <div className="card-body">
                  {this.props.message === true?<div className="text-center success">Account successfully created!</div>: null }
                  {this.props.error === true?<div className="text-center error">Invalid username or password!</div>: null }
                    <div className="form-group font-weight-bold login-head">Log In</div>
                    <div className="form-group">
                        <input type="text" id="username" className="form-control" placeholder="username" required onChange={this.handleChange} value={this.state.username}/>
                    </div>
                    <div className="form-group">
                        <input type="password" id="password" className="form-control" placeholder="password" required onChange={this.handleChange} value={this.state.password}/>
                     </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center" id="signup-link">New to MusicMood? Create an account!
          <a href="#" className="btn btn-sm btn-outline-secondary" id="login-new-account" onClick={() => this.props.toggleState('showLogin', 'showSignup')}>Sign up!</a></div>
        </div>
      </section>
    )
  }
}
