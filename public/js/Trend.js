class Trend extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
   return(
     <div className="container trend">
       <div className="col-lg-12">
         <div className="card" id="user-card">
           <div className="card-header user-card-top">
            <h1>Trending</h1>
           </div>
           <div className="card-body">
              <h4>Top Moods</h4>
              <ol>
              <li>Happy</li>
              <li>Fun</li>
              <li>Chill</li>
              <li>Mad</li>
              <li>Sad</li>
              </ol>
           </div>
        </div>
      </div>
    </div>
   )
  }
}
