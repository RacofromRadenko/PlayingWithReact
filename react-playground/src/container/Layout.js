import React, { Component } from 'react';
import Header from '../components/Header/Header';
import DataItems from '../container/DataItems';
import './Layout.less';

class Layout extends Component {
	// state = {
	// 	showMoreDetails: false
	// };

	render() {
		return (
			<div className="Layout">
				<Header />
				<DataItems />
			</div>
		);
	}
}

export default Layout;
