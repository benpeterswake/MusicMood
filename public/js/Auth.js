class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      showSignup: true,
      showLogin: false
    }
    this.toggleState = this.toggleState.bind(this)
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
       console.log(data);
     }).catch(error => console.log(error))
   }


  render() {
    return (
      <section id="Auth">
        {this.state.showLogin == true? <Navigation />: null}
        {this.state.showSignup == true? <Signup signUp={this.signUp} toggleState={this.toggleState} />: null}
        {this.state.showLogin == true? <Login />: null}
      </section>
    )
  }
}
