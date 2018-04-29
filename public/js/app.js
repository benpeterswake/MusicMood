class User extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
   return(
     <div className="container">
       <div className="col-lg-2 user">
         <div className="card" id="user-card">
           <div className="card-header">
            <img src="https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-hacker-3830b32ad9e0802c-512x512.png"
            className="user-icon" />
           </div>
           <div className="card-body">
              <h4>Welcome, Benjamin</h4>
           </div>
         </div>
       </div>
     </div>
   )
  }
}


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      session: false,
      username: null
    }
    this.getSession = this.getSession.bind(this)
    this.beginSession = this.beginSession.bind(this)
  }

<<<<<<< HEAD
  componentDidMount() {
    this.getSession()
  }
=======
              <Navigation />
              <User />
              <Posts />

>>>>>>> 1a392682e6f613138f8ad0beebf396df578932bc

  getSession(){
    fetch('/sessions')
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      if(data.status === 400){
        this.setState({
          session: false,
          username: null
        })
      }else{
        this.setState({
          session: true,
          username: data.username
        })
      }
    }).catch(error => console.log(error))
  }

  beginSession(){
    this.componentDidMount()
  }

  render(){
      return(
        this.state.session === false? <Auth beginSession={this.beginSession} /> :
        <div>
          <Navigation/ >
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
