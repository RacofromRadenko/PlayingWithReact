import React, { Component } from 'react';
import './Item.less'
import { NavLink } from 'react-router-dom'

class Item extends Component {

    render() {
        return (
            <div className="Item">
                <div className="card" style={{ width: "25rem" }}>
                    <img className="card-img-top" src={this.props.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">...</p>
                        {/* <NavLink to="/item-details" className="btn btn-primary">Go somewhere</NavLink> */}

                        <button onClick={this.props.add}>Click me</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default Item;