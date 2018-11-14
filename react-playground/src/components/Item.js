import React, { Component } from 'react';
import './Item.less';

class Item extends Component {
	render() {
		return (
			<div className="Item">
				<div className="card" style={{ width: '100%', flexDirection: 'row' }}>
					<img
						className="card-img-top"
						src={this.props.image}
						alt="Card image cap"
						style={{ maxWidth: '35%', maxHeight: '90%', margin: '2.5%', flexDirection: 'row' }}
					/>
					<div className="card-body" style={{ textAlign: 'center', margin: '50px auto' }}>
						<h5 className="card-title" style={{ textAlign: 'center' }}>
							{this.props.name}
						</h5>

						<p style={{ fontWeight: '600' }}>
							Price:
							{this.props.price}
						</p>

						{/* <NavLink to="/item-details" className="btn btn-primary">Go somewhere</NavLink> */}

						<button
							className="btn btn-primary text-center"
							onClick={(e) => this.props.add(e, this.props.data)}
						>
							Buy me
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Item;
