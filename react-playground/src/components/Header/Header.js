import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.less';

const header = (props) => {
	return (
		<div className="container">
			<div className="header">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/tournaments">Tournaments</NavLink>
				<NavLink to="/gn-projects">GN Projects</NavLink>
				<NavLink to="/gs-share">GS Share</NavLink>
			</div>
		</div>
	);
};

export default header;
