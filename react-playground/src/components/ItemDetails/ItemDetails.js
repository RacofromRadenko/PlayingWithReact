import React, { Component } from 'react';

class ItemDetails extends Component {
	componentDidMount() {
		console.log(this.props);
	}

	render() {
		return (
			<div className="card mb-3">
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
				</div>

				<button className="btn btn-primary" onClick={() => this.props.history.goBack('/tournaments')}>
					Go Back
				</button>
			</div>
		);
	}
}

export default ItemDetails;
