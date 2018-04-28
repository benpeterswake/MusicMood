class Signup extends React.Component {
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

  render() {
    return (
      <section id="signup-form">
        <div className="container signup-form">
          <div className="col-lg-6 mx-auto">
            <div className="card">
              <form onSubmit={this.handleSubmit}>
                <div className="card-header">
                  <div className="row">
                    <div className="card-body" id='sign-up-text'>Sign Up
                      <div className="form-group" id="Signup">
                        <input type="text" id="username" className="form-control" placeholder="username" onChange={this.handleChange} value={this.state.username} />
                        <input type="password" id="password" className="form-control" placeholder="password"  onChange={this.handleChange} value={this.state.password} />
                        <button>Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
