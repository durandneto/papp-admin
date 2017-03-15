import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './../../actions'
import * as TopicActions from './../../actions/topic'

import TableList from './../../pages/TableList'

class Topics extends Component {

	componentWillMount() {
		if ( !this.props.ListTopics.get('isLoadded') )
			this.props.fetch(this.props.ListTopics)
	}

	_search() {
		this.props.fetch(this.props.ListTopics,'search')
	}
	_add() {
		this.props.set_page_type('new')
		this.props.go( this.props.ListTopics.get('path')+'/new' )
	}
	_view(row) {
		this.props.select(row)
		this.props.set_page_type('view')
		this.props.go( this.props.ListTopics.get('path')+'/' + row.get('id') )
	}
	_remove(row) {
		this.props.select(row)
		this.props.set_page_type('remove')
		this.props.go( this.props.ListTopics.get('path')+'/' + row.get('id') )
	}

  render() {
		return (
			<TableList
				reducer={this.props.ListTopics}
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
    , ListTopics: state.ListTopics
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(Actions, TopicActions) , dispatch )
}

export { Topics }
export default connect(mapStateToProps, mapDispatchToProps)(Topics)