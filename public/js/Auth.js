class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      showSignup: true,
      showLogin: false,
      afterSignup: false
    }
    this.toggleState = this.toggleState.bind(this)
    this.signUp = this.signUp.bind(this)
    this.logIn = this.logIn.bind(this)
  }

  toggleState(st1, st2){
    this.setState({
      [st1]: !this.state[st1],
      [st2]: !this.state[st2]
    })
  }

  signUp(user){
   fetch('/signup', {
     method: 'POST',
     body: JSON.stringify(user),
     headers: {
       'Accept': 'application/json, text/plain, */*',
       'Content-Type': 'application/json'
     }
   }).then(res => res.json())
     .then(data => {
      if(data.status === 200){
        this.setState({
          showSignup: false,
          showLogin: true,
          afterSignup: true
        })
      }
   }).catch(error => console.log(error))
  }

  logIn(user){
   fetch('/login', {
     method: 'POST',
     body: JSON.stringify(user),
     headers: {
       'Accept': 'application/json, text/plain, */*',
       'Content-Type': 'application/json'
     }
   }).then(res => res.json())
     .then(data => {
       console.log(data);
      if(data.status === 200){
        Cookies.set('user_id', data.session_id);
        Cookies.set('username', data.user.username);
        this.props.beginSession();
      }else{
        console.log('wrong pass');
      }

   }).catch(error => console.log(error))
  }

  render() {
    return (
      <section id="Auth">
        {this.state.showLogin == true? <Navigation />: null}
        {this.state.showSignup == true? <Signup signUp={this.signUp} toggleState={this.toggleState} />: null}
        {this.state.showLogin == true? <Login logIn={this.logIn} message={this.state.afterSignup}  />: null}
      </section>
    )
  }
}
