import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Alert, FormGroup, ControlLabel, FormControl, HelpBlock, Well } from 'react-bootstrap'

import * as Actions from './../../actions'
import * as PlatformActions from './../../actions/platform'
import PlatformForm from './../../organisms/forms/Platform'


import Home from './../../pages/Home'

class NewPlatform extends Component {

  componentWillMount() {
    this.props.hide_message()
  }

  render() {
  	return (
  		<Home
  			header={this.props.header}
  			show_mobile_menu={this.props.show_mobile_menu} >
        <PlatformForm
          reducer={this.props.ListPlatforms}
          
          row={this.props.ListPlatforms.get('selectedRow')}
          status={this.props.ListPlatforms.get('status')}

          hide_message={this.props.hide_message}
          save={this.props.select.bind(this)}
          set_page_type={this.props.set_page_type}
          submit={this.props.update.bind(this)}
          remove={this.props.remove.bind(this)}
         />

        </Home>
  	)
  }
}



function mapStateToProps(state) {
  return {
    header : state.header
    , ListPlatforms: state.ListPlatforms
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(Actions, PlatformActions) , dispatch )
}

export { NewPlatform }
export default connect(mapStateToProps, mapDispatchToProps)(NewPlatform)