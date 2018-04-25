
class PostForm extends React.Component{
    render(){
        return(
            <div>
                <h2>PostForm</h2>
            </div>
        )
    }
}

class Post extends React.Component{
    render(){
        return(
            <div>
                <h2>Individual Post</h2>
            </div>
        )
    }
}

class PostsList extends React.Component{
    render(){
        return(
            <div>
                <h2>Posts List</h2>
            </div>
        )
    }
}

class Posts extends React.Component{
    render(){
        return (
            <div>
                <h2>Posts</h2>
            </div>
        )
    }
}

class Header extends React.Component {
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

class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <h1>Hai frendz</h1>
                <Posts />
                <PostsList />
                <Post />
                <PostForm />

            </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
