import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './../actions'

import TableList from './../pages/TableList'

class Groups extends Component {

  render() {
	return (
		<TableList
      columns={['Id Group','Title','Language']}
      data={[
        [1,'grupo 1','EN']
        , [2,'grupo 2','PT']
        , [3,'grupo 3','EN']
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

export { Groups }
export default connect(mapStateToProps, mapDispatchToProps)(Groups)