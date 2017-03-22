import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './../actions'

import LoginPage from './user/Login'

class App extends Component {

  render() {

  if(!this.props.User.get('isLogged')){
    return <LoginPage />
  }

	return (
		<span>
			{this.props.children}
		</span>
	);
  }
}



function mapStateToProps(state) {
  return {
    User : state.UserAdmin
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export { App }
export default connect(mapStateToProps, mapDispatchToProps)(App)