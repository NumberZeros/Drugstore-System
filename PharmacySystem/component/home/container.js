import React, {Component} from 'react';
import Home from './Home';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './action';

class container extends Component {
  render() {
    return <Home {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

function mapDispatchToProps(dispatch) {
  const actions = {
    ...action,
  };
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(container);
