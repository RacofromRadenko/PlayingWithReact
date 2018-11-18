import React, { Component } from 'react';
import './ItemDetails.less';
import AuxHolder from '../../container/hoc/AuxHolder';
import Modal from '../UI/Modal/Modal';

class ItemDetails extends Component {
	state = {
		orderID: this.props.location.state.transactionResponseData.order_id,
		postResponseData: this.props.location.state.transactionResponseData,
		itemData: this.props.location.state.data,
		showModal: false
	};

	componentWillMount() { }

	componentDidMount() {
		console.log(this.state);
	}



	handlerShowModal = () => {
		this.setState({
			showModal: true
		});
	};

	handleCancelModal = () => {
		this.setState({
			showModal: false
		});
		console.log('MoDAL CLICKED');
	};

	render() {
		return (
			<AuxHolder>
				<div className="card mb-3 ItemDetails">
					<img
						className="card-img-top"
						src={this.props.location.state.data.smallImage}
						alt={this.props.location.state.data.name}
						style={{ maxWidth: '45%', maxHeight: '45%', margin: '2% 25%' }}
					/>
					<div className="card-body" style={{ textAlign: 'center' }}>
						<h2 className="card-title">{this.props.location.state.data.name}</h2>
						<p className="card-text">
							<span style={{ marginRight: '5px', fontWeight: '500', fontSize: '16pt' }}>Price:</span>
							<span style={{ marginRight: '5px', fontWeight: '800', fontSize: '16pt', color: 'green' }}>
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
									<span style={{ marginRight: '5px', fontWeight: '500' }}>
										Required grapich card:
									</span>
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
							// onClick={(e) => this.buySelectedItem(e, this.state.orderID)}
							onClick={this.handlerShowModal}
						>
							Buy
						</button>
					</div>
					<Modal
						dontShowModal={this.handlerShowModal}
						show={this.state.showModal}
						itemData={this.state.postResponseData}
						name={this.state.itemData.name}
						cancelModal={this.handleCancelModal}
					/>
				</div>
			</AuxHolder>
		);
	}
}

export default ItemDetails;
