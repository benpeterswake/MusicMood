class App extends React.Component{
    render(){
        return(
            <div>
                <Navigation />
                <Posts />

            </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.querySelector('main')
)
