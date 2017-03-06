import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './../../actions'

import TableList from './../../pages/TableList'

class Users extends Component {

	componentWillMount(){
		if ( !this.props.ListUsers.get('isLoadded') )
			this.props.fetch_users(this.props.ListUsers)
	}
  render() {
		return (
			<TableList
				reducer={this.props.ListUsers}
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