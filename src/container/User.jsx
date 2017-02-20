import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'react-bootstrap'

import * as Actions from './../actions'

import { Home } from './../pages/Home'

class App extends Component {

  render() {
	return (
		<Home
			header={this.props.header}
			show_mobile_menu={this.props.show_mobile_menu}>
			<Button bsStyle="primary">Primary</Button>
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

export { App }
export default connect(mapStateToProps, mapDispatchToProps)(App)