import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './../actions'

import TableList from './../pages/TableList'

class Products extends Component {

  render() {
	return (
		<TableList
			header={this.props.header}
      products={''}
			show_mobile_menu={this.props.show_mobile_menu} />
	);
  }
}



function mapStateToProps(state) {
  return {
    header : state.header
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export { Products }
export default connect(mapStateToProps, mapDispatchToProps)(Products)