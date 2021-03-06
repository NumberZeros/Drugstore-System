import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import AppNavigation from './AppNavigation';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import MyReducer from './redux/MyReducer';

const AppContainer = createAppContainer(AppNavigation);

const initialState = {};
const store = createStore(MyReducer, initialState);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
