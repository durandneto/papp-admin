import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Alert, FormGroup, ControlLabel, FormControl, HelpBlock, Well } from 'react-bootstrap'

import * as Actions from './../../actions'
import { ButtonFormSquad } from './../../atoms/Buttons'

import Home from './../../pages/Home'

class NewUser extends Component {

  componentWillMount() {
    this.setState(this.props.ListUsers.get('newUser').toObject())
    this.props.hide_message()
  }

  _save() {
    this.props.create_new_user()
  }

  getValidationState() {
    const length = this.state.name.length
    if (length > 5) return 'success'
    else if (length > 3) return 'warning'
    else if (length > 0) return 'error'
    else return null
  }

  handleChange(e) {
    this.setState({ name: e.target.value },()=> {
      this.props.new_user(this.state)
    })
  }

  getValidationEmail() {

    const length = this.state.email.length
    if( length > 0 ){
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if ( re.test(this.state.email) ) {
        return 'success'
      } else {
        return 'error'
      }
    }

  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value },()=> {
      this.props.new_user(this.state)
    })
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
                value={this.props.ListUsers.get('newUser').get('name')}
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
                value={this.props.ListUsers.get('newUser').get('email')}
                placeholder="Enter e-mail"
                onChange={this.handleChangeEmail.bind(this)}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on e-mail validation.</HelpBlock>
            </FormGroup>

            {
              this.props.ListUsers.get('status').get('type') === 'SUCCESS' ?
                 <Alert bsStyle="success" onDismiss={this.props.hide_message}>
                  <h4>Oh yeah! New User created succefully!</h4>
                  <p>ID: { this.props.ListUsers.get('lastUser').get('id') }</p> 
                  <p>Name: { this.props.ListUsers.get('lastUser').get('name') }</p> 
                  <p>E-mail: { this.props.ListUsers.get('lastUser').get('email') }</p> 
                </Alert>: null
            }
            {
              this.props.ListUsers.get('status').get('type') === 'ERROR' ?
                <Alert bsStyle="danger" onDismiss={this.props.hide_message}>
                  <h4>Oh snap! You got an error!</h4>
                  <p>{ this.props.ListUsers.get('status').get('message') }</p>
                </Alert> : null
            }

            <Well bsSize="large">
            {
              this.props.ListUsers.get('isSavingUser') ? 'Saving new User' : 'Actions'
            }
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
    , ListUsers: state.ListUsers
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export { NewUser }
export default connect(mapStateToProps, mapDispatchToProps)(NewUser)