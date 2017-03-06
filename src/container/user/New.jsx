import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './../../actions'

import Home from './../../pages/Home'

class NewUser extends Component {

  render() {
	return (
		<Home
			header={this.props.header}
			show_mobile_menu={this.props.show_mobile_menu} >
      New User
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

export { NewUser }
export default connect(mapStateToProps, mapDispatchToProps)(NewUser)