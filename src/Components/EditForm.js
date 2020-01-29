import React, {Component} from 'react';
import StaticModels from '../Models/StaticModels'

class EditForm extends Component {

 state = {
	firstName: "",
	lastName: "",
	dob: "",
	firstNameError: "",
	lastNameError: "",
	dobError: "",
	oid: ""
}

	componentDidMount = () => {
		console.log(this.props.location.state)
		if(this.props.location.state !== undefined) {
			document.getElementById('first').value=this.props.location.state.firstName
			document.getElementById('last').value=this.props.location.state.lastName
			document.getElementById('birthdate').defaultValue=this.props.location.state.date_of_birth

		this.setState({
			firstName: this.props.location.state.firstName,
			lastName: this.props.location.state.lastName,
			date_of_birth: this.props.location.state.date_of_birth,
			oid: this.props.location.state.rowid
		})
		}
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

			fetch(`http://localhost:3000/api/people/${this.state.oid}`, {
				method: 'PUT',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					firstName: this.state.firstName,
					lastName: this.state.lastName,
					date_of_birth: this.state.dob
				})
				})
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
			<form className="editForm" onSubmit={this.handleSubmit}>
			<h2>PUT Names</h2>
				<div>
					<p className="inputText"> First Name </p> 
					<input 
						onChange={this.handleChange} 
						id="first"
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
						id='last'
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
						id='birthdate'
						type="date" 
						/>
					<div style={{fontSize: 12, color: "red"}}>
					{this.state.dobError}</div>
				</div>
				<br />
				<br />
				<button type="submit">Update</button>
			</form>
		)
	}
}

export default EditForm;