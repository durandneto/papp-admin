import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Alert, FormGroup, ControlLabel, FormControl, HelpBlock, Well } from 'react-bootstrap'

import * as Actions from './../../actions'
import * as LanguageActions from './../../actions/language'
import LanguageForm from './../../organisms/forms/Language'


import Home from './../../pages/Home'

class NewLanguage extends Component {

  componentWillMount() {
    this.props.hide_message()
  }

  render() {
  	return (
  		<Home
  			header={this.props.header}
  			show_mobile_menu={this.props.show_mobile_menu} >
        <LanguageForm
          reducer={this.props.ListLanguages}
          
          row={this.props.ListLanguages.get('selectedRow')}
          status={this.props.ListLanguages.get('status')}

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
    , ListLanguages: state.ListLanguages
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(Actions, LanguageActions) , dispatch )
}

export { NewLanguage }
export default connect(mapStateToProps, mapDispatchToProps)(NewLanguage)