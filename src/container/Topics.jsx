import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './../actions'

import TableList from './../pages/TableList'

class Topics extends Component {

  render() {
	return (
		<TableList
      columns={['Id Topic','Title']}
      data={[
        [5,'topic 1']
        , [26,'topic 2']
        , [37,'topic 3']
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

export { Topics }
export default connect(mapStateToProps, mapDispatchToProps)(Topics)