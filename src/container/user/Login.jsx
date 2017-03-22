import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './../../actions'
import * as AuthenticattionActions from './../../actions/authentication'
import LoginForm from './../../organisms/forms/Login'
import * as UserActions from './../../actions/user'

class Login extends Component {
 
  render() {
	return  <LoginForm

          reducer={this.props.User}
          hide_message={this.props.hide_message}
          save={this.props.set_user_admin}
          submit={this.props.authenticate}
          logout={this.props.logout}

         />
  }
}

function mapStateToProps(state) {
  return {
  	User : state.UserAdmin
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(Actions, AuthenticattionActions) , dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)