import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './../actions'

import Home from './../pages/Home'

class Dashboard extends Component {

  render() {
	return (
		<Home
			header={this.props.header}
      Dashboard={''}
			show_mobile_menu={this.props.show_mobile_menu} >
      Dashboard
      </Home>
	);
  }
}



function mapStateToProps(state) {
  return {
    header : state.header
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export { Dashboard }
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)