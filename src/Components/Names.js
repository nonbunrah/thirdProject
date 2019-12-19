import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Names extends Component {
	state = {
		data:[]
	}

	componentDidMount(){
		this.search()
	}
	search = ()=>{
		let url = `http://localhost:3000/api/people/${this.props.id}	`
		fetch(url)
			.then((response)=>response.json())
			.then(data=>this.setState({
				data: data
			}))
			//.then(data=>console.log(data))
			.catch(error=>console.log(error))
	}
	render () {

		return (
			<div>
			<p>{this.state.data.name}</p>
			<li>
				{this.props.name.firstName} {this.props.name.lastName} {this.props.id}
					<div>
					<Link to={`/${this.props.id}`}>
						<button>Info</button>
					</Link>
					</div>
			</li>
			</div>
		)
	}
}

export default Names;