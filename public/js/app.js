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
        <h2>Header</h2>
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
