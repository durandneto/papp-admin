import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Alert, FormGroup, ControlLabel, FormControl, HelpBlock, Well } from 'react-bootstrap'

import * as Actions from './../../actions'
import * as UserGroupActions from './../../actions/userGroup'
import UserGroupForm from './../../organisms/forms/UserGroup'
import TableAction from './../../organisms/TableAction'


import Home from './../../pages/Home'

class NewUserGroup extends Component {

  componentWillMount() {
    this.props.hide_message()
    //if ( !this.props.ListUserJoinedGroups.get('isLoadded') )
      this.props.fetch_members()
  }

  _search() {
    this.props.fetch_members('search')
  }
  _add() {
    //this.props.set_page_type('new')
    this.props.go( this.props.ListUserGroups.get('path')+'/join' )
  }
  _view(row) {
    //this.props.select(row)
    //this.props.set_page_type('view')
    this.props.go( this.props.ListUserJoinedGroups.get('path')+'/' + row.get('id') )
  }
  _remove(row) {
    //this.props.select(row)
    //this.props.set_page_type('remove')
    this.props.go( this.props.ListUserJoinedGroups.get('path')+'/' + row.get('id') )
  }

  render() {

  	return (
  		<Home
  			header={this.props.header}
  			show_mobile_menu={this.props.show_mobile_menu} >
        <UserGroupForm
          reducer={this.props.ListUserGroups}
          
          row={this.props.ListUserGroups.get('selectedRow')}
          status={this.props.ListUserGroups.get('status')}
          joinGroup={this.props.joinGroup}

          hide_message={this.props.hide_message}
          save={this.props.select}
          set_page_type={this.props.set_page_type}
          submit={this.props.update}
          remove={this.props.remove}
         />
        <h1>Members</h1>

         <TableAction 
            view={this._view}
            add={this.props.joinGroup}
            search={this._search.bind(this)}
            remove={this._remove}
            updateSearchTerm={this.props.update_member_search_term}
            columns={this.props.ListUserJoinedGroups.get('data').get('columns')}
            rows={this.props.ListUserJoinedGroups.get('data').get('rows')}
            paginator={this.props.ListUserJoinedGroups.get('paginator')} />

        </Home>
  	)
  }
}



function mapStateToProps(state) {
  return {
    header : state.header
    , ListUserGroups: state.ListUserGroups
    , ListUserJoinedGroups: state.ListUserJoinedGroups
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(Actions, UserGroupActions) , dispatch )
}

export { NewUserGroup }
export default connect(mapStateToProps, mapDispatchToProps)(NewUserGroup)