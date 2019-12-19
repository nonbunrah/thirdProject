import React, {Component} from 'react';

class Info extends Component {
	state = {
		personInfo: {}
	}

	handleDelete = () => {
		fetch(`http://localhost:3000/api/people/${this.state.personInfo.rowid}`, {
				method: 'DELETE'
			})
		.then(res=> {
			if(res.status == 200)
				this.props.history.push('/Names')
			else
				console.log("delete unsuccessful")
		})
		.catch(error=> console.log(error))
	}


componentDidMount = () => {
	let {id} = this.props.match.params
	let url = `http://localhost:3000/api/people/${id}`
	fetch(url)
		.then(res=>res.json())
		//.then(res=> console.log(res))
		.then(res=>this.setState({personInfo: res}))
		
	}


	render () {
		console.log(this.state.personInfo)
		return (
			<div>
				<p><b>First Name:</b> {this.state.personInfo.length ? 'Loading...' : this.state.personInfo.firstName}</p>
				<p><b>Last Name:</b> {this.state.personInfo.length ? 'Loading...' : this.state.personInfo.lastName}</p>
				<p><b>Date of birth:</b> {this.state.personInfo.length ? 'Loading...' : this.state.personInfo.date_of_birth}</p>
				<button 
					value="edit" 
					onClick={()=>this.props.history.push('/EditForm', {...this.state.personInfo})}>Edit</button>
				<button class="deleteButton"
					onClick={this.handleDelete}
					>Delete</button>
			</div>
		)
	}
}

export default Info;