import React, { Component } from 'react';
import axiosGetInstance from '../axios';
import Item from '../components/Item'
import './DataItems.less';
import ItemDetails from '../components/ItemDetails/ItemDetails'
import Header from '../components/Header/Header'

class DataItems extends Component {

    state = {
        data: [],
        currentPageNumber: 1,
        totalPages: 4,
        displayData: [],
        itemDetails: false
    }


    componentDidMount() {
        axiosGetInstance.get().then(
            res => {
                console.log(res.data.docs)
                const dataResult = res.data.docs;
                const extractData = dataResult.slice(0, 20);
                const getForPageOne = extractData.slice(0, 6);
                this.setState({
                    data: extractData,
                    displayData: getForPageOne
                })
            }
        ).catch(error => {
            console.log(error)
        });

    }


    displayOnPage() {
        console.log("usao");
        const dataPerPage = [...this.state.data];
        switch (this.state.currentPageNumber) {
            case 1:
                return { ...this.state.displayData };
            case 2:
                console.log(this.state.currentPageNumber)
                const nextSix = dataPerPage.slice(6, 12);
                console.log(nextSix);
                console.log("usao122")
                this.setState({ displayData: nextSix });
                return this.state.displayData;

            case 3:
                console.log(this.state.currentPageNumber)
                const updatedArrayOfAjaxData = dataPerPage;
                const lastSix = updatedArrayOfAjaxData.slice(13, 19);
                console.log(lastSix);
                console.log("usao33")
                this.setState({ displayData: lastSix })
                return this.state.displayData

            case 4:
                console.log(this.state.currentPageNumber)
                const spreadUpdatedData = dataPerPage;
                const lastTwo = spreadUpdatedData.slice(18, 20);
                console.log(lastTwo);
                console.log("usao44")

                this.setState({ displayData: lastTwo })
                return this.state.displayData

            default:
                break;
        }
    }

    moreInformation = (evt) => {
        console.log(evt)
    }


    addToItemStoreList = (selectedItem) => {
        const itemData = this.state.displayData[selectedItem];
        console.log(itemData);

    }

    handleClick = (type) => {
        var counter = 0;


        this.displayOnPage();
        if (this.state.currentPageNumber <= this.state.totalPages && this.state.currentPageNumber > 1 && type === "dec") {
            document.getElementsByClassName('Previous')[0].innerHTML = counter;
            counter--;
            this.setState(({
                currentPageNumber: this.state.currentPageNumber - 1
            }), () => (console.log(this.state.currentPageNumber)))
            console.log(this.state.currentPageNumber)
        } else if (this.state.currentPageNumber >= 1 && this.state.currentPageNumber < this.state.totalPages && type === "inc") {
            document.getElementsByClassName('Next')[0].innerHTML = counter;
            counter++;
            this.setState(prevState => ({
                currentPageNumber: prevState.currentPageNumber + 1
            }), () => { console.log(this.state.currentPageNumber) })
        }
        console.log(this.state.currentPageNumber)

    }

    render() {
        const item = this.state.displayData.map(
            item => {
                return (
                    <Item name={item.name} key={item.id} thumbnail={item.thumbnail} image={item.smallImage} moreInfo={this.moreInformation} add={this.addToItemStoreList} />
                )
            }
        )

        return (
            <div className="DataItems">
                <ItemDetails itemDetailsFlag={this.state.itemDetails} {...this.props} />
                {item}
                <div className="bottom-area">
                    <button className="btn btn-info Previous" onClick={() => this.handleClick("dec")}>Previous</button>
                    <button className="btn btn-info Next" onClick={() => this.handleClick("inc")}>Next</button>
                </div>
            </div>
        )
    }

}

export default DataItems;