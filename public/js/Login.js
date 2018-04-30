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
  }

  render() {
    return (
      <section id="LoginForm">
        <div className="container login-form">
          <div className="col-lg-6 mx-auto">
          {this.props.message === true?<div className="text-center success">User successfully created!</div>: null }
            <div className="card">
              <form onSubmit={this.handleSubmit}>
                <div className="card-body">
                    <div className="form-group font-weight-bold login-head">Log In</div>
                    <div className="form-group">
                        <input type="text" id="username" className="form-control" placeholder="username" required onChange={this.handleChange} value={this.state.username}/>
                    </div>
                    <div className="form-group">
                        <input type="password" id="password" className="form-control" placeholder="password" required onChange={this.handleChange} value={this.state.password}/>
                     </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <a href="#" className="btn btn-info" > Create an account</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
