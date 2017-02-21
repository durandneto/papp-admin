import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './../actions'

import TableList from './../pages/TableList'

class Reports extends Component {

  render() {
	return (
		<TableList
      columns={['Id Report','Description','User Report','Group Reported']}
      data={[
        [99,'report 1','Durand Neto','familia lima']
        , [567,'report 2','Rodrigo','Rio de Janeiro - SP']
        , [345,'report 3','Alice','Alice a Feia']
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

export { Reports }
export default connect(mapStateToProps, mapDispatchToProps)(Reports)