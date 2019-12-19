import React, {Component} from 'react';
import StaticModels from '../Models/StaticModels'

const initalState = {
	firstName: "",
	lastName: "",
	dob: ""
}

class Form extends Component {

	handleChange = (event) => {
	const isCheckbox = event.target.type === "checkbox";
	this.setState({
		[event.target.name]: isCheckbox
		? event.target.checked
		: event.target.value
	});
};

	handleSubmit = (event) => {
		event.preventDefault();

			fetch('http://localhost:3000/api/people', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				//{this.state} is NULL
				body: JSON.stringify(this.state)
			})
		};

		createName = (name) => {
			let newName = {
				firstName: name
			}

		StaticModels.create(newName).then((res) => {
			let names = this.state.names
			names.push(res)
			this.setState({names: names})
		})
	}

	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				<br />
				<input type="text" placeholder="First Name"></input>
				<br />
				<input type="text" placeholder="Last Name"></input>
				<br />
				<input type="text" placeholder="Date of Birth"></input>
				<br />
				<br />
				<button type="submit">Create</button>
			</form>
		)
	}
}

export default Form;