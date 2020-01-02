import React, {Component} from 'react';
import User from './User';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './actions';

class container extends Component {
  render() {
    return <User {...this.props} />;
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
