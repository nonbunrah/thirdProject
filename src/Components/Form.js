import React, {Component} from 'react';
import StaticModels from '../Models/StaticModels'

 const initialState = {
	firstName: "",
	lastName: "",
	dob: "",
	firstNameError: "",
	lastNameError: "",
	dobError: ""
}

class Form extends Component {

 state = {
	firstName: "",
	lastName: "",
	dob: "",
	firstNameError: "",
	lastNameError: "",
	dobError: ""
}

	handleChange = (event) => {
		let target = event.target
		let name = target.name
		let value = target.value
		console.log('name: ' + name)
		console.log('value: ' + value)
		this.setState({[name]:value})
	}

	handleSubmit = (event) => {
		event.preventDefault();

		const isValid = this.validate()
		if (isValid) {
			console.log(JSON.stringify(this.state));

			fetch('http://localhost:3000/api/people', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				//{this.state} is NULL
				body: JSON.stringify(this.state)
				})
				//clear form
				.then(response => this.setState(initialState))
			}
		};

		validate = () => {
			let firstNameError = "";
			let lastNameError = "";
			let dobError = "";

			if (!this.state.firstName) {
				firstNameError = "First name cannot be blank."
			}

			if (!this.state.lastName) {
				lastNameError = "Last name cannot be blank."
			}

			if (!this.state.dob) {
				dobError = "Date of birth cannot be blank"
			}

			if(dobError || firstNameError || lastNameError) {
				this.setState({dobError, firstNameError, lastNameError});
				return false;
			}

			return true
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
			<form className="form" onSubmit={this.handleSubmit}>
			<h2>POST Names</h2>
				<div>
					<p className="inputText"> First Name </p> 
					<input 
						onChange={this.handleChange} 
						name='firstName' 
						type="text" 
						placeholder="First Name"
						value={this.state.firstName} 
						/>
					<div style={{fontSize: 12, color: "red"}}>
					{this.state.firstNameError}</div>
				</div>
				<div>
					<p className="inputText"> Last Name </p> 
					<input 
						onChange={this.handleChange} 
						name='lastName' 
						type="text" 
						value={this.state.lastName}
						placeholder="Last Name"
						/>
					<div style={{fontSize: 12, color: "red"}}>
					{this.state.lastNameError}</div>
				</div>
				<div>
					<p className="inputText"> Date of Birth </p> 
					<input 
						onChange={this.handleChange} 
						name='dob' 
						type="date" 
						placeholder="mm/dd/yyyy"
						value={this.state.dob}
						/>
					<div style={{fontSize: 12, color: "red"}}>
					{this.state.dobError}</div>
				</div>
				<br />
				<br />
				<button type="submit">Create</button>
			</form>
		)
	}
}

export default Form;