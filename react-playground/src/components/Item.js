import React, { Component } from 'react';
import './Item.less';

class Item extends Component {
	render() {
		return (
			<div className="Item">
				<div
					className="card"
					style={{ width: '100%', maxHeight: '300px', flexDirection: 'row' }}
					onClick={(e) => this.props.add(e, this.props.data)}
				>
					<img
						className="card-img-left"
						src={this.props.image}
						alt={this.props.name}
						style={{ maxWidth: '35%', maxHeight: '90%', margin: '5% 2.5%', flexDirection: 'row' }}
					/>
					<div className="card-body" style={{ textAlign: 'center', margin: '50px auto' }}>
						<h5 className="card-title" style={{ textAlign: 'center' }}>
							{this.props.name}
						</h5>

						<span style={{ fontWeight: '450', display: 'inline-block' }}>
							Price:
							<p style={{ display: 'inline', paddingLeft: '5px', color: 'green', fontWeight: '450' }}>
								{this.props.price} {this.props.currency}
							</p>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Item;
