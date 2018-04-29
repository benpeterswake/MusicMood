class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      username: '',
      password: '',
      avatar: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.id]: event.target.value
    })
    console.log(event.target.value);
  }

  submitLogin(){
      fetch('/profile')
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data,
          posts:data
        })
      })
      console.log('getting profile and all posts');
  }

  render() {
    return (
      <section id="login-form">
        <div className="loginForm">
          <div className="col-lg-6 mx-auto">
            <div className="card">
              <form onSubmit={this.submitLogin}>
                <div className="card-header">
                    <div className="card-body" id='login-text'>Log In</div>

                      <div className="form-group">
                        <input type="text" id="login-username" className="form-control" placeholder="username" onChange={this.handleChange}
                        value={this.state.username} />
                      </div>

                      <div className="form-group">
                        <input type="password" id="login-password" className="form-control" placeholder="password" onChange={this.handleChange}
                        value={this.state.password} />
                      </div>

                        <button type="submit" className="btn btn-primary">Login</button>

                      </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
