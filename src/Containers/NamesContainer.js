import React, {Component} from 'react';
import StaticModels from '../Models/StaticModels'
import Names from '../Components/Names'

class NamesContainer extends Component {
	state = {
		names: []
	};

	fetchData = () => {
		StaticModels.all().then((res) => {
			console.log(res)
			this.setState({
				names: res
			})
		})
	}

	componentDidMount() {
		this.fetchData();
	};

	render () {
		let namesList = this.state.names.map(nameItem => {
			return <Names name={nameItem} id={nameItem.rowid}/>
		})

		return (
			<div className="namesContainer">
				<h2>GET Names</h2>
					<ul>
						{ namesList }
					</ul>
			</div>
		)
	}
}

export default NamesContainer;