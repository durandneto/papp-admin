import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { FormGroup, ControlLabel, FormControl, HelpBlock, Well, Button } from 'react-bootstrap'

import * as Actions from './../../actions'
import { ButtonFormSquad } from './../../atoms/Buttons'

import Home from './../../pages/Home'

class NewUser extends Component {

  componentWillMount() {
    this.setState({ full_name:'',email:''})
  }

  _save() {
    this.props.save_user(this.state)
  }

  getValidationState() {
    const length = this.state.full_name.length
    if (length > 5) return 'success'
    else if (length > 3) return 'warning'
    else if (length > 0) return 'error'
    else return null
  }

  handleChange(e) {
    this.setState({ full_name: e.target.value })
  }

  getValidationEmail() {

    const length = this.state.email.length
    if( length > 0 ){
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if ( re.test(this.state.email) ) {
        return 'success'
      } else {
        return 'error'
      }
    }

  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value })
  }

  render() {
  	return (
  		<Home
  			header={this.props.header}
  			show_mobile_menu={this.props.show_mobile_menu} >
          <form>
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
            >
              <ControlLabel>Full Name</ControlLabel>
              <FormControl
                type="text"
                value={this.state.full_name}
                placeholder="Enter full name"
                onChange={this.handleChange.bind(this)}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length more than 5 caracters.</HelpBlock>
            </FormGroup>

            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationEmail()}
            >
              <ControlLabel>E-mail</ControlLabel>
              <FormControl
                type="email"
                value={this.state.email}
                placeholder="Enter e-mail"
                onChange={this.handleChangeEmail.bind(this)}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on e-mail validation.</HelpBlock>
            </FormGroup>

            <Well bsSize="large">
              Look I'm in a large well!
              <ButtonFormSquad 
                className='pull-right'
                type='primary'
                click={this._save.bind(this)}
                label='Save'
              />
            </Well>
          </form>
        </Home>
  	)
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

export { NewUser }
export default connect(mapStateToProps, mapDispatchToProps)(NewUser)