import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './../../actions'
import * as UserGroupActions from './../../actions/userGroup'

import TableList from './../../pages/TableList'

class UserGroups extends Component {

	componentWillMount() {
		if ( !this.props.ListUserGroups.get('isLoadded') )
			this.props.fetch(this.props.ListUserGroups)
	}

	_search() {
		this.props.fetch(this.props.ListUserGroups,'search')
	}
	_add() {
		this.props.set_page_type('new')
		this.props.go( this.props.ListUserGroups.get('path')+'/new' )
	}
	_view(row) {
		this.props.select(row)
		this.props.set_page_type('view')
		this.props.go( this.props.ListUserGroups.get('path')+'/' + row.get('id') )
	}
	_remove(row) {
		this.props.select(row)
		this.props.set_page_type('remove')
		this.props.go( this.props.ListUserGroups.get('path')+'/' + row.get('id') )
	}

  render() {
		return (
			<TableList
				reducer={this.props.ListUserGroups}
				view={this._view.bind(this)}
				add={this._add.bind(this)}
				search={this._search.bind(this)}
				updateSearchTerm={this.props.update_search_term.bind(this)}
				remove={this._remove.bind(this)}
				location={this.props.location}
				header={this.props.header}
				show_mobile_menu={this.props.show_mobile_menu} 
				callback={this.props.fetch.bind(this)}
				/>
		);
  }
}



function mapStateToProps(state) {
  return {
    header: state.header
    , ListUserGroups: state.ListUserGroups
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(Actions, UserGroupActions) , dispatch )
}

export { UserGroups }
export default connect(mapStateToProps, mapDispatchToProps)(UserGroups)