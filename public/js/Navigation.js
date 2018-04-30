class Navigation extends React.Component {
  render () {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark fixed-top">
        {Cookies.get("user_id")?<div className="col-lg-3"></div>:null}
        <div className="col-lg-6 mx-auto text-center">
            <a className="navbar-brand" href="#">
                <img src="musiclogo.png" className="d-inline-block align-top" alt=""/>
            </a>
          </div>
          {Cookies.get("user_id")?<div className="col-lg-3 mx-auto text-center">
            <div className="row">
              <button onClick={this.props.logout} className="btn btn-primary">Logout</button>
            </div>
          </div>: null}
        </nav>
      </div>
    )
  }
}
