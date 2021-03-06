import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Alert, FormGroup, ControlLabel, FormControl, HelpBlock, Well } from 'react-bootstrap'

import * as Actions from './../../actions'
import * as UserGroupActions from './../../actions/userGroup'
import UserGroupForm from './../../organisms/forms/UserGroup'


import Home from './../../pages/Home'

class NewUserGroup extends Component {

  componentWillMount() {
    this.props.set_page_type('new')
    this.props.hide_message()
  }

  render() {
  	return (
  		<Home
  			header={this.props.header}
  			show_mobile_menu={this.props.show_mobile_menu} >

        <UserGroupForm
          reducer={this.props.ListUserGroups}

          row={this.props.ListUserGroups.get('newRow')}
          lastRow={this.props.ListUserGroups.get('lastRow')}
          status={this.props.ListUserGroups.get('status')}
          
          hide_message={this.props.hide_message}
          save={this.props.new_row.bind(this)}
          set_page_type={this.props.set_page_type}
          submit={this.props.create_new.bind(this)}
          remove={this.props.remove.bind(this)}
         />
      </Home>
  	)
  }
}



function mapStateToProps(state) {
  return {
    header : state.header
    , ListUserGroups: state.ListUserGroups
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(Actions, UserGroupActions) , dispatch )
}

export { NewUserGroup }
export default connect(mapStateToProps, mapDispatchToProps)(NewUserGroup)