import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './../../actions'
import * as LanguageActions from './../../actions/language'

import TableList from './../../pages/TableList'

class Languages extends Component {

	componentWillMount() {
		if ( !this.props.ListLanguages.get('isLoadded') )
			this.props.fetch(this.props.ListLanguages)
	}

	_search() {
		this.props.fetch(this.props.ListLanguages,'search')
	}
	_add() {
		this.props.set_page_type('new')
		this.props.go( this.props.ListLanguages.get('path')+'/new' )
	}
	_view(row) {
		this.props.select(row)
		this.props.set_page_type('view')
		this.props.go( this.props.ListLanguages.get('path')+'/' + row.get('id') )
	}
	_remove(row) {
		this.props.select(row)
		this.props.set_page_type('remove')
		this.props.go( this.props.ListLanguages.get('path')+'/' + row.get('id') )
	}

  render() {
		return (
			<TableList
				reducer={this.props.ListLanguages}
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
    , ListLanguages: state.ListLanguages
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(Actions, LanguageActions) , dispatch )
}

export { Languages }
export default connect(mapStateToProps, mapDispatchToProps)(Languages)