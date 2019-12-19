import React, {Component} from 'react';

class Names extends Component {
	render () {
		return (
			<li>{this.props.name}</li>
		)
	}
}

export default Names;