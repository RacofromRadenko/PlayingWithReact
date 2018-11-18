import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Payconfirmation.less';
import axios from 'axios';

class Payconfirmation extends Component {
	state = {
		showCodenTransactionID: false,
		transactionID: null,
		transactionCode: null
	};

	componentDidMount() {
		console.log(this.props);
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

		const getKey = {
			crossDomain: true,
			url: 'https://sandboxapi.g2a.com/v1/order/key/' + orderID,
			method: 'GET',
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

					this.setTransactionID(res.data.transaction_id);
					axios(getKey).then((res) => {
						console.log('[KEY]', res.data.key);
						this.setTransactionCODE(res.data.key);
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});

		console.log(orderID);
		console.log(config.data);
	};

	setTransactionID = (transactionID) => {
		this.setState({
			transactionID: transactionID
		});
	};

	setTransactionCODE = (transactionCode) => {
		this.setState({
			transactionCode: transactionCode,
			showCodenTransactionID: true
		});
	};

	confirmComplete = () => {
		return this.props.history.push('/');
	};

	render() {
		const displayResults = this.state.showCodenTransactionID ? (
			<div className="Payconfirmation">
				<div style={{ padding: '10px' }}>
					<h3>Order details completed:</h3>
					<hr />
					<h5>
						Transaction ID:{' '}
						<p>
							<code>{this.state.transactionID}</code>
						</p>
					</h5>
					<h5>
						Transaction Code:{' '}
						<p>
							<code>{this.state.transactionCode}</code>
						</p>
					</h5>
				</div>
				<button
					className="btn btn-outline-success"
					style={{
						display: 'block',
						width: '90%',
						margin: 'auto 5%'
					}}
					onClick={this.confirmComplete}
				>
					Confirm
				</button>
			</div>
		) : (
				<div className="Payconfirmation">
					<div style={{ padding: '10px', display: "inline-block" }}>
						<h3>Order details:</h3>
						<hr />
						<span
							style={{
								display: 'block',
								fontSize: '12.5pt',
								fontWeight: '600'
							}}
						>
							Order ID:
						<p
								style={{
									display: 'inline',
									paddingLeft: '5px',
									fontSize: '12.5pt',
									fontWeight: '500',
									color: 'green'
								}}
							>
								{this.props.itemData.order_id}
							</p>
						</span>
						<span
							style={{
								display: 'block',
								fontSize: '12.5pt',
								fontWeight: '600'
							}}
						>
							Name:
						<p
								style={{
									display: 'inline',
									paddingLeft: '5px',
									fontSize: '12pt',
									fontWeight: '500',
									color: 'green'
								}}
							>
								{this.props.name}
							</p>
						</span>
						<span
							style={{
								display: 'block',
								fontSize: '12.5pt',
								fontWeight: '500'
							}}
						>
							Price:
						<p
								style={{
									display: 'inline',
									paddingLeft: '5px',
									fontSize: '12.5pt',
									fontWeight: '500',
									color: 'green'
								}}
							>
								{this.props.itemData.price}
								{this.props.itemData.currency}
							</p>
						</span>
						<hr />
					</div>
					<button
						className="btn btn-outline-primary"
						style={{
							float: 'left',
							display: 'block',
							width: '40%',
							margin: 'auto 5%'
						}}
						onClick={this.props.cancelModal}
					>
						Cancel
				</button>
					<button
						className="btn btn-outline-success"
						style={{
							float: 'right',
							display: 'block',
							width: '40%',
							margin: 'auto 5%'
						}}
						onClick={(e) => this.buySelectedItem(e, this.props.itemData.order_id)}
					>
						Buy
				</button>
				</div>
			);

		return <div className="Payconfirmation">{displayResults}</div>;
	}
}

export default withRouter(Payconfirmation);
