import React, { Component } from 'react';
import './App.less';
import DataItems from './container/DataItems';
import { Route, Switch } from 'react-router';
import MainPage from './components/Pages/MainPage';
import ItemDetails from './components/ItemDetails/ItemDetails'
import Layout from './container/Layout';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/main-page" exact component={MainPage} />
            <Route path="/game-list" exact component={DataItems} />
            {/* <Route path="/order" component={MainPage} /> */}
            <Route path="/item-details" name="item-details" component={ItemDetails} />

          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
