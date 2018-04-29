class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      username: '',
      password: '',
      avatar: ''
  }
    this.getProfile = this.getProfile.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  getProfile(event){
      event.preventDefault()
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

  handleChange(event){
    this.setState({
    [event.target.id]: event.target.value
    })
    console.log(event.target.value);
  }

  signup(){
    fetch('/signup')
    .then(res => res.json())
    .then(data => {
      this.setState({
        users: data
      })
    })
    console.log('signup');

  }

  render() {
    return (
      <section id="LoginForm">
        <div className="container login-form">
          <div className="col-lg-6 mx-auto">
            <div className="card">

              <form onSubmit={this.getProfile}>
                <div className="card-body">
                    <div className="form-group font-weight-bold login-head">
                        Log In
                        </div>
                    <div className="form-group">
                    <input type="text" id="login-username" className="form-control"      placeholder="username" onChange={this.handleChange}
                     />
                     </div>

                     <div className="form-group">
                    <input type="password" id="login-password" className="form-control" placeholder="password" onChange={this.handleChange}
                     />
                     </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <a href="#" className="btn btn-info" onClick={this.signup}> Create an account </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
