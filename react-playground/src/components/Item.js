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
						alt="Card image cap"
						style={{ maxWidth: '35%', maxHeight: '90%', margin: '5% 2.5%', flexDirection: 'row' }}
					/>
					<div className="card-body" style={{ textAlign: 'center', margin: '50px auto' }}>
						<h2 className="card-title" style={{ textAlign: 'center' }}>
							{this.props.name}
						</h2>

						<span style={{ fontWeight: '600', display: 'inline-block' }}>
							Price:
							<p style={{ display: 'inline', paddingLeft: '5px', color: 'green', fontWeight: '600' }}>
								{this.props.price} {this.props.currency}
							</p>
						</span>

						{/* <NavLink to="/item-details" className="btn btn-primary">Go somewhere</NavLink> */}
					</div>
				</div>
			</div>
		);
	}
}

export default Item;
