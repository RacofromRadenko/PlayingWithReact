import React, { Component } from 'react';
import './ItemDetails.less';
import axios from 'axios';

class ItemDetails extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		orderID: props.location.state.transactionResponseData.order_id
	// 	};
	// }
	state = {
		orderID: this.props.location.state.transactionResponseData.order_id,
		postResponseData: this.props.location.state.transactionResponseData,
		itemData: this.props.location.state.data
	};

	componentWillMount() {}

	componentDidMount() {
		console.log(this.state);
	}

	buySelectedItem = (e, orderID) => {
		e.preventDefault();
		const config = {
			crossDomain: true,
			url: 'https://sandboxapi.g2a.com/v1/order/pay/' + orderID,
			method: 'PUT',
			headers: {
				Authorization: 'qdaiciDiyMaTjxMt, 74026b3dc2c6db6a30a73e71cdb138b1e1b5eb7a97ced46689e2d28db1050875',
				'Content-Type': 'application/json'
			},
			processData: false
		};
		axios(config)
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					console.log('[TRANSACTION-ID]', res.data.transaction_id);
				}
			})
			.catch((err) => {
				console.log(err);
			});

		console.log(orderID);
		console.log(config.data);
	};

	render() {
		return (
			<div className="card mb-3 ItemDetails">
				<img
					className="card-img-top"
					src={this.props.location.state.data.smallImage}
					alt="Card image cap"
					style={{ width: '85%', height: '85%', margin: '2% 7.5%' }}
				/>
				<div className="card-body" style={{ textAlign: 'center' }}>
					<h2 className="card-title">{this.props.location.state.data.name}</h2>
					<p className="card-text">
						<span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16pt' }}>Price:</span>
						<span style={{ marginRight: '5px', fontWeight: '800', fontSize: '16pt' }}>
							{this.props.location.state.transactionResponseData.price}
							{this.props.location.state.transactionResponseData.currency}
						</span>
					</p>
				</div>

				<div className="row" style={{ margin: '20px' }}>
					<div className="col-md-6">
						<div className="card-text">
							<h3 className="card-title">Minimal Requirements</h3>
							<p className="card-text">
								<span style={{ marginRight: '5px', fontWeight: '500' }}>Required disk space:</span>
								{this.props.location.state.data.requirements.minimal.reqdiskspace}
							</p>
							<p className="card-text">
								<span style={{ marginRight: '5px', fontWeight: '500' }}>Required grapich card:</span>
								{this.props.location.state.data.requirements.minimal.reqgraphics}
							</p>
							<p className="card-text">
								<span style={{ marginRight: '5px', fontWeight: '500' }}>Required RAM Memory:</span>
								{this.props.location.state.data.requirements.minimal.reqmemory}
							</p>
							<p className="card-text">
								<span style={{ marginRight: '5px', fontWeight: '500' }}>Required Processor:</span>
								{this.props.location.state.data.requirements.minimal.reqprocessor}
							</p>
							<p className="card-text">
								<span style={{ marginRight: '5px', fontWeight: '500' }}>
									Required Operating System:
								</span>
								{this.props.location.state.data.requirements.minimal.reqsystem}
							</p>
						</div>
					</div>
					<div className="col-md-6">
						<h3 className="card-title">Recommended Requirements</h3>
						<p className="card-text" />
					</div>
				</div>
				<div className="buttonArea">
					<button className="goBack btn btn-outline-primary" onClick={() => this.props.history.goBack()}>
						Go Back
					</button>
					<button
						className="goFurther btn btn-outline-success"
						onClick={(e) => this.buySelectedItem(e, this.state.orderID)}
					>
						Go Buy
					</button>
				</div>
			</div>
		);
	}
}

export default ItemDetails;
