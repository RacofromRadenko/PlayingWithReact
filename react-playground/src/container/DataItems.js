import React, { Component } from 'react';
import axiosGetInstance from '../axios';
import Item from '../components/Item';
import './DataItems.less';
import axios from 'axios';

class DataItems extends Component {
	state = {
		data: [],
		currentPageNumber: 1,
		totalPages: 4,
		displayData: [],
		itemDetails: false,
		currency: 'EUR'
	};

	componentDidMount() {
		axiosGetInstance
			.get()
			.then((res) => {
				console.log(res.data.docs);
				const dataResult = res.data.docs;
				const extractData = dataResult.slice(0, 20);
				const getForPageOne = extractData.slice(0, 6);
				this.setState({
					data: extractData,
					displayData: getForPageOne
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	displayOnPage() {
		console.log('usao');
		const dataPerPage = [ ...this.state.data ];
		switch (this.state.currentPageNumber) {
			case 1:
				return { ...this.state.displayData };
			case 2:
				console.log(this.state.currentPageNumber);
				const nextSix = dataPerPage.slice(6, 12);
				console.log(nextSix);
				console.log('usao122');
				this.setState({ displayData: nextSix });
				return this.state.displayData;

			case 3:
				console.log(this.state.currentPageNumber);
				const updatedArrayOfAjaxData = dataPerPage;
				const lastSix = updatedArrayOfAjaxData.slice(13, 19);
				console.log(lastSix);
				console.log('usao33');
				this.setState({ displayData: lastSix });
				return this.state.displayData;

			case 4:
				console.log(this.state.currentPageNumber);
				const spreadUpdatedData = dataPerPage;
				const lastTwo = spreadUpdatedData.slice(18, 20);
				console.log(lastTwo);
				console.log('usao44');

				this.setState({ displayData: lastTwo });
				return this.state.displayData;

			default:
				break;
		}
	}

	addToAccount = (e, data) => {
		console.log(e.target.value, data);

		e.preventDefault();
		console.log(data.id);
		const config = {
			crossDomain: true,
			url: 'https://sandboxapi.g2a.com/v1/order',
			method: 'POST',
			headers: {
				Authorization: 'qdaiciDiyMaTjxMt, 74026b3dc2c6db6a30a73e71cdb138b1e1b5eb7a97ced46689e2d28db1050875',
				'Content-Type': 'application/json'
			},
			processData: false,
			data: { product_id: data.id }
		};

		axios(config)
			.then((res) => {
				// console.log(res);
				if (res.status === 200) {
					console.log('DATA RESPONSE', res.data);
					// return <Redirect to="/item-details/" />;
					return this.props.history.push({
						pathname: '/item-details',
						state: {
							data: data,
							transactionResponseData: res.data
						}
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	handleClick = (type) => {
		var counter = 0;

		this.displayOnPage();
		if (
			this.state.currentPageNumber <= this.state.totalPages &&
			this.state.currentPageNumber > 1 &&
			type === 'dec'
		) {
			document.getElementsByClassName('Previous')[0].innerHTML = counter;
			counter--;
			this.setState(
				{
					currentPageNumber: this.state.currentPageNumber - 1
				},
				() => console.log(this.state.currentPageNumber)
			);
			console.log(this.state.currentPageNumber);
		} else if (
			this.state.currentPageNumber >= 1 &&
			this.state.currentPageNumber < this.state.totalPages &&
			type === 'inc'
		) {
			document.getElementsByClassName('Next')[0].innerHTML = counter;
			counter++;
			this.setState(
				(prevState) => ({
					currentPageNumber: prevState.currentPageNumber + 1
				}),
				() => {
					console.log(this.state.currentPageNumber);
				}
			);
		}
		console.log(this.state.currentPageNumber);
	};

	render() {
		const item = this.state.displayData.map((item) => {
			return (
				<Item
					name={item.name}
					key={item.id}
					thumbnail={item.thumbnail}
					image={item.smallImage}
					moreInfo={this.moreInformation}
					add={this.addToAccount}
					data={item}
					price={item.minPrice}
					currency={this.state.currency}
				/>
			);
		});

		return (
			<div className="DataItems">
				{item}
				<div className="bottom-area">
					<button className="btn btn-info Previous" onClick={() => this.handleClick('dec')}>
						Previous
					</button>
					<button className="btn btn-info Next" onClick={() => this.handleClick('inc')}>
						Next
					</button>
				</div>
			</div>
		);
	}
}

export default DataItems;
