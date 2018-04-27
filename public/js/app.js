class User extends React.Component{
  render(){
   return(
     <div> className="container">
       <div className="col-lg-2 user">
         <div className="card">
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
    render(){
        return(
            <div>
                <Navigation />
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
