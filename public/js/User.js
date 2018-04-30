class User extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: Cookies.get('username'),
      avatar: 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-hacker-3830b32ad9e0802c-512x512.png',
      match: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.id]: event.target.value
    })
    fetch('/users')
    .then(res => res.json())
    .then(data => {
      for(let i=0; i<data.length; i++){
        if(this.state.user === ''){
          this.setState({
            match: null
          })
        }else if(data[i].username === this.state.user){
          this.setState({
            match: true
          })
          return true
        }else{
          this.setState({
            match: false
          })
        }
      }
    })
  }

  render(){
   return(
     <div className="container">
       <div className="col-lg-2 user">
         <div className="card" id="user-card">
           <div className="card-header user-card-top">
            <img src={this.state.avatar}
            className="user-icon" />
           </div>
           {
             this.props.showProfile === true?
             <div className="card-body">
                 <h4>Welcome, {this.state.user}</h4>
                 <button onClick={this.props.toggleProfile} className="btn btn-outline-secondary">Edit Profile</button>
              </div>
               :
             <div className="card-body">
                <form>
                  <label>Username</label>
                  {this.state.match === true?<div class="error"><i class="fas fa-times-circle"></i> Username already exists</div>: null}
                  {this.state.match === false?<div class="available"><i class="fas fa-check-circle"></i> Username is available</div>: null}
                  <input type="text" id="user" onChange={this.handleChange} value={this.state.user} required/>
                  <button onClick={this.props.toggleProfile} className="cancel btn btn-outline-secondary">Cancel</button>
                </form>
             </div>
           }
         </div>
       </div>
           {
             this.props.showProfile === true?
           <div className="col-lg-2 info">
             <div className="card">
               <div className="card-header user-card-top">
                <h1>{this.props.total}</h1>
               </div>
               <div className="card-body">
                  <h4>Posts</h4>
               </div>
             </div>
           </div>
           :
           <div className="col-lg-2 info top">
             <div className="card">
               <div className="card-header user-card-top">
                <h1>{this.props.total}</h1>
               </div>
               <div className="card-body">
                  <h4>Total Posts</h4>
               </div>
             </div>
           </div>
          }
     </div>
   )
  }
}
