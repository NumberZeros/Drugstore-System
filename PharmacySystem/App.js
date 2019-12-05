import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import AppNavigation from './AppNavigation';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import MyReducer from './redux/myReducer';

const AppContainer = createAppContainer(AppNavigation);

let store = createStore(MyReducer);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
