class User extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: Cookies.get('username')
    }
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
              <h4>Welcome, {this.state.username}</h4>
              <button className="btn btn-outline-secondary">Edit Profile</button>
           </div>
         </div>
       </div>
     </div>
   )
  }
}