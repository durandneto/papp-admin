import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './../../actions'

import TableList from './../../pages/TableList'

class Users extends Component {

	componentWillMount() {
		if ( !this.props.ListUsers.get('isLoadded') )
			this.props.fetch_users(this.props.ListUsers)
	}

	_search() {
		this.props.fetch_users(this.props.ListUsers,'search')
	}
	_add() {
		this.props.set_user_page_type('new')
		this.props.go( '/users/new' )
	}
	_view(user) {
		this.props.select_user(user)
		this.props.set_user_page_type('view')
		this.props.go( '/users/' + user.get('id') )
	}
	_remove(user) {
		this.props.select_user(user)
		this.props.set_user_page_type('remove')
		this.props.go( '/users/' + user.get('id') )
	}

  render() {
		return (
			<TableList
				reducer={this.props.ListUsers}
				view={this._view.bind(this)}
				add={this._add.bind(this)}
				search={this._search.bind(this)}
				updateSearchTerm={this.props.update_search_term.bind(this)}
				remove={this._remove.bind(this)}
				location={this.props.location}
				header={this.props.header}
				show_mobile_menu={this.props.show_mobile_menu} 
				callback={this.props.fetch_users.bind(this)}
				/>
		);
  }
}



function mapStateToProps(state) {
  return {
    header: state.header
    , ListUsers: state.ListUsers
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export { Users }
export default connect(mapStateToProps, mapDispatchToProps)(Users)