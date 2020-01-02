import React,{Component} from 'react';
import Manager from './Manager';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from './actions';

class container extends Component {
  render() {
    return <Manager {...this.props} />;
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
