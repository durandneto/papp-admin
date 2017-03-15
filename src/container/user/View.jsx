import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Alert, FormGroup, ControlLabel, FormControl, HelpBlock, Well } from 'react-bootstrap'

import * as Actions from './../../actions'
import * as UserActions from './../../actions/user'
import UserForm from './../../organisms/forms/User'


import Home from './../../pages/Home'

class NewUser extends Component {

  componentWillMount() {
    this.props.hide_message()
  }

  render() {
  	return (
  		<Home
  			header={this.props.header}
  			show_mobile_menu={this.props.show_mobile_menu} >
        <UserForm
          reducer={this.props.ListUsers}
          
          user={this.props.ListUsers.get('selectedUser')}
          status={this.props.ListUsers.get('status')}

          hide_message={this.props.hide_message}
          save={this.props.select_user.bind(this)}
          set_page_type={this.props.set_user_page_type}
          submit={this.props.update_user.bind(this)}
          remove={this.props.remove_user.bind(this)}
         />
        </Home>
  	)
  }
}



function mapStateToProps(state) {
  return {
    header : state.header
    , ListUsers: state.ListUsers
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(Actions, UserActions) , dispatch )
}

export { NewUser }
export default connect(mapStateToProps, mapDispatchToProps)(NewUser)