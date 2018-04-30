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
    Cookies.remove('username')
  }

  render(){
      return(
        this.state.session === false? <Auth beginSession={this.beginSession} /> :
        <div>
          <Navigation session={this.state.session} logout={this.endSession}/ >
          <Posts />
          <Footer />
        </div>
      )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('main')
)
