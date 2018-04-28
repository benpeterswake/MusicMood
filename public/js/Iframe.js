class Iframe extends React.Component{
    render(){
        constructor(props){
            super(props)
        }
        return(
            <div>
                <iframe src={this.props.song}
                height={this.props.height}
                width={this.props.width}/>
            </div>
        )

    }
}
