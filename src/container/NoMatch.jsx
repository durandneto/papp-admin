import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './../actions'

class App extends Component {

  render() {
	return (
	<div>
        <h1>Page Not Found.</h1>
        <p>Go to <Link to="/">App Page</Link></p>
      </div>
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

export { App }
export default connect(mapStateToProps, mapDispatchToProps)(App)