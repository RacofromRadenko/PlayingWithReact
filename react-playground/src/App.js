import React, { Component } from 'react';
import './App.less';
import DataItems from './container/DataItems';
import { Route, Switch } from 'react-router-dom';
import ItemDetails from './components/ItemDetails/ItemDetails';
import Layout from './container/Layout';
import Tournaments from './components/Tournaments/Tournaments';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<Switch>
						<Route path="/tournaments" component={Tournaments} />
						<Route path="/item-details" component={ItemDetails} />
						<Route path="/" component={DataItems} />
						{/* <Route path="/order" component={MainPage} /> */}
					</Switch>
				</Layout>
			</div>
		);
	}
}

export default App;
