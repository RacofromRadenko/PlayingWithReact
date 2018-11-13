import React, { Component } from 'react';

class ItemDetails extends Component {

    state = {
        showDetails: !this.props.itemDetailsFlag
    }

    componentDidMount() {
        console.log(!this.props.itemDetailsFlag)
    }


    render() {
        return (
            <div className="card mb-3" style={{ display: !this.state.itemDetailsFlag ? "flex" : "none" }}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>

                <button className="btn btn-primary" onClick={() => this.props.history.goBack("/data-items")}>Go Back</button>
            </div>
        )
    }

}

export default ItemDetails;