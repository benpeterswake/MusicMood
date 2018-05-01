class User extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: Cookies.get('username'),
      avatar: 'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-512.png',
      match: null,
      showProfile: true,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleProfile = this.toggleProfile.bind(this)
  }

  toggleProfile(){
    this.setState({
        showProfile: !this.state.showProfile,
        user: Cookies.get('username')
    })
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

  handleSubmit(event){
    if(this.state.match){
      console.log('username already exists');
    }else{
      event.preventDefault()
      this.props.handleUserUpdate(this.state)
      this.setState({
        showProfile:true
      });
    }

  }

  render(){
   return(
     <div className="container user">
       <div className="col-lg-12">
         <div className="card" id="user-card">
           <div className="card-header user-card-top">
            <img src={this.state.avatar}
            className="user-icon" />
           </div>
           {
             this.state.showProfile === true?
             <div className="card-body">
                 <h4 className="small">Welcome</h4>
                 <h4>{this.state.user}</h4>
                 <button onClick={this.toggleProfile} className="btn btn-outline-secondary">Edit Profile</button>
              </div>
               :
             <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <label>Username</label>
                  {this.state.match === true?<div class="error"><i class="fas fa-times-circle"></i> Username already exists</div>: null}
                  {this.state.match === false?<div class="available"><i class="fas fa-check-circle"></i> Username is available</div>: null}
                  <input type="text" id="user" onChange={this.handleChange} value={this.state.user} required/>
                  {this.state.match === false?<button type="submit" className="cancel btn btn-primary">Submit</button>: null}
                  <button onClick={this.toggleProfile} className="cancel left btn btn-outline-secondary">Cancel</button>
                </form>
             </div>
           }
         </div>
       </div>
           <div className="col-lg-12 info">
             <div className="card">
               <div className="card-header user-card-top">
                <h1>{this.props.total}</h1>
               </div>
               <div className="card-body">
                  <h4>Posts</h4>
               </div>
             </div>
           </div>
     </div>
   )
  }
}
