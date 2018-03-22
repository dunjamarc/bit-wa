import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
	return (
		<nav>
			<div className="nav-wrapper">
				<Link to="/" className="brand-logo center">Bit Persons</Link>
				{<ul className="right hide-on-med-and-down">
					<li><Link to="/about">About</Link></li>
					<li><a onClick={props.handleClick}><i className="material-icons">{props.showCard ? 'view_list' : 'view_module'}</i></a></li>
					<li><a onClick={props.handleRefresh}><i className="material-icons" >refresh</i></a></li>
				</ul>}
			</div>
		</nav>
	)
}

export default Header;