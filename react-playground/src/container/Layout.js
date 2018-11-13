import React, { Component } from 'react';
import Header from '../components/Header/Header';
import DataItems from '../container/DataItems';
import MainPage from '../components/Pages/MainPage';


import "./Layout.less";

class Layout extends Component {

    render() {
        return (
            <div className="Layout">
                <Header />
                <DataItems />
                <MainPage />
            </div>
        )
    }


}

export default Layout;
