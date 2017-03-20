import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Alert, FormGroup, ControlLabel, FormControl, HelpBlock, Well } from 'react-bootstrap'

import * as Actions from './../../actions'
import * as UserGroupActions from './../../actions/userGroup'
import UserJoinedGroupForm from './../../organisms/forms/UserJoinedGroup'


import Home from './../../pages/Home'

class NewUserJoinedGroup extends Component {

  componentWillMount() {
    this.props.set_member_page_type('new')
    this.props.hide_message()
  }

  render() {
  	return (
  		<Home
  			header={this.props.header}
  			show_mobile_menu={this.props.show_mobile_menu} >

        <UserJoinedGroupForm
          reducer={this.props.ListUserJoinedGroups}
          group={this.props.ListUserGroups.get('selectedRow')}

          row={this.props.ListUserJoinedGroups.get('newRow')}
          lastRow={this.props.ListUserJoinedGroups.get('lastRow')}
          status={this.props.ListUserJoinedGroups.get('status')}
          
          hide_message={this.props.hide_message}
          save={this.props.new_member_row.bind(this)}
          set_page_type={this.props.set_member_page_type}
          submit={this.props.join_new_member.bind(this)}
          remove={this.props.remove_member.bind(this)}
         />
      </Home>
  	)
  }
}



function mapStateToProps(state) {
  return {
    header : state.header
    , ListUserJoinedGroups: state.ListUserJoinedGroups
    , ListUserGroups: state.ListUserGroups
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(Actions, UserGroupActions) , dispatch )
}

export { NewUserJoinedGroup }
export default connect(mapStateToProps, mapDispatchToProps)(NewUserJoinedGroup)