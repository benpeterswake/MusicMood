class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      session: false,
      user_id: null
    }
    // this.getSession = this.getSession.bind(this)
    this.beginSession = this.beginSession.bind(this)
    this.endSession = this.endSession.bind(this)
  }

  componentDidMount() {
    if(Cookies.get('user_id')){
      this.setState({
        session: true,
        user_id: Cookies.get('user_id')
      })
    }
  }
  //   this.getSession()
  // }

  // getSession(){
  //   fetch('/sessions')
  //   .then(res => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     if(data.status === 400){
  //       this.setState({
  //         session: false,
  //       })
  //     }else{
  //       this.setState({
  //         session: true,
  //         username: Cookie.get('username')
  //         use_id: Cookie.get('user_id')
  //       })
  //     }
  //   }).catch(error => console.log(error))
  // }

  beginSession(){
    this.setState({
      session: true,
      user_id: Cookies.get('user_id')
    })
  }

  endSession(){
    this.setState({
      session: false,
      user_id: null
    })
    Cookies.remove('user_id')
  }

  render(){
      return(
        this.state.session === false? <Auth beginSession={this.beginSession} /> :
        <div>
          <Navigation session={this.state.session} logout={this.endSession}/ >
          <User />
          <Posts />
        </div>
      )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('main')
)
