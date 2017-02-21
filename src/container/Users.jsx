import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './../actions'

import TableList from './../pages/TableList'

class Users extends Component {

  render() {
	return (
		<TableList
			columns={['name','email','FB Id']}
			data={[
				['Durand Neto','durand.neto@gmail.com','1000002342987']
				, ['Ruy','papp@gmail.com','10000029999']
				, ['Baltazar','Baltazar@gmail.com','10000029888']
				]}
			location={this.props.location}
			header={this.props.header}
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

export { Users }
export default connect(mapStateToProps, mapDispatchToProps)(Users)