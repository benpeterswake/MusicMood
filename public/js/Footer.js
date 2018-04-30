class Footer extends React.Component {
  render () {
    return (
      <div>
      <nav className="footer navbar-dark bg-dark absolute-bottom">

        <div className="col-lg-8 mx-auto text-center">
            <a className="navbar-brand" href="#">
                <img src="musiclogo.png" className="d-inline-block align-top" id="footer-logo" alt="musicmood-logo"/>
            </a>

            <p className="bg-dark">
            <span><img src="github-logo-32.png" id="github" alt="github-logo"/></span>

            <span><a href="https://github.com/benpeterswake">@benpeterswake</a> | <a href="https://github.com/victorjaquez">@victorjaquez</a> | <a href="https://github.com/op9674a">@op9674a</a></span></p>

            <p className="copyright">
                Copyright @MusicMood 2018</p>
          </div>

        </nav>
      </div>
    )
  }
}
