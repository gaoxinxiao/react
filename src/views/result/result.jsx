import React,{Component} from 'react'

class Result extends Component{
	render(){
		return <h1>Result</h1>
	}
	componentDidMount(){
		let {location} = this.props
		console.log(location.state.key_wrods)
	}
}
export default Result