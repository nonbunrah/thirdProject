import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
	render () {
		return (
			<header>
				<nav>
					<Link to={'/'}>HomePage </Link>
					<Link to={'/Names'}>Names </Link>
					<Link to={'/Form'}>Create</Link>
				</nav>
			</header>
		)
	}
}

export default Header;