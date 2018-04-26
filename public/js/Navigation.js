class Navigation extends React.Component {
  render () {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src="" width="30" height="30" className="d-inline-block align-top" alt=""/>
                    Logo
            </a>

            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    </div>
    )
  }
}
