import React, { Component } from 'react' 
import { Alert, FormGroup, ControlLabel, FormControl, HelpBlock, Well } from 'react-bootstrap' 
import { ButtonFormSquad } from './../../atoms/Buttons'

class UserForm extends Component {

  componentWillMount() {
    this.setState(this.props.user.toObject())
    this.props.hide_message()
  }

  _save() {
    this.props.submit()
  }

  getValidationPassword() {

  	if ( this.state.password ){
	    const length = this.state.password.length
	    if (length > 5) return 'success'
	    else if (length > 3) return 'warning'
	    else if (length > 0) return 'error'
	    else return null
  	}
	
	return null
  }

  getValidationState() {
  	if ( this.state.name ){
	    const length = this.state.name.length
	    if (length > 5) return 'success'
	    else if (length > 3) return 'warning'
	    else if (length > 0) return 'error'
	    else return null
  	}
	return null
  }

  handleChange(e) {
    this.setState({ name: e.target.value },()=> {
      this.props.save(this.state)
    })
  }

  getValidationEmail() {

  	if ( this.state.email ) {
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

  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value },()=> {
      this.props.save(this.state)
    })
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value },()=> {
      this.props.save(this.state)
    })
  }

  renderView() {
  	return (
  		 <Alert bsStyle={(this.props.reducer.get('visualizationType') === 'remove') ? 'danger': 'info'} >
          <p>ID: { this.props.user.get('id') }</p> 
          <p>Name: { this.props.user.get('name') }</p> 
          <p>E-mail: { this.props.user.get('email') }</p> 
        </Alert>
  	)
  }

  renderNewUserButton() {
  	return (
  		<Well bsSize="large">
        {
          this.props.isSaving ? 'Saving new User' : 'Actions'
        }
          <ButtonFormSquad 
            className='pull-right'
            type='primary'
            click={this._save.bind(this)}
            label='Save'
          />
        </Well>
  	)
  }
  renderEditUserButton() {
  	return (
  		<Well bsSize="large">
       Actions
          <ButtonFormSquad 
            className='pull-right'
            type='primary'
            click={this._save.bind(this)}
            label='Save'
          />
          <ButtonFormSquad 
            className='pull-right'
            type='danger'
            click={this.props.set_page_type.bind(this,'remove')}
            label='Remove'
          />
        </Well>
  	)
  }
  renderViewUserButton() {
  	return (
  		<Well bsSize="large">
  		Actions
          <ButtonFormSquad 
            className='pull-right'
            type='primary'
            click={this.props.set_page_type.bind(this,'edit')}
            label='Edit'
          />
          <ButtonFormSquad 
            className='pull-right'
            type='danger'
            click={this.props.set_page_type.bind(this,'remove')}
            label='Remove'
          />
        </Well>
  	)
  }

  renderRemoveUserButton() {
  	return (
  		<Well bsSize="large">
        Actions 
          <ButtonFormSquad 
            className='pull-right'
            type='danger'
            click={this.props.remove.bind(this)}
            label='Remove'
          />
        </Well>
  	)
  }

  renderForm() {
  	return (
          <form>
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
            >
              <ControlLabel>Full Name</ControlLabel>
              <FormControl
                type="text"
                value={this.props.user.get('name')}
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
                value={this.props.user.get('email')}
                placeholder="Enter e-mail"
                onChange={this.handleChangeEmail.bind(this)}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on e-mail validation.</HelpBlock>
            </FormGroup>

            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationPassword()}
            >
              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="password"
                value={this.props.user.get('password')}
                placeholder="Enter password"
                onChange={this.handleChangePassword.bind(this)}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string.</HelpBlock>
            </FormGroup>

            {
              this.props.status.get('type') === 'SUCCESS' ?
                 <Alert bsStyle="success" onDismiss={this.props.hide_message}>
                  <h4>Oh yeah! New User created succefully!</h4>
                  <p>ID: { this.props.lastUser.get('id') }</p> 
                  <p>Name: { this.props.lastUser.get('name') }</p> 
                  <p>E-mail: { this.props.lastUser.get('email') }</p> 
                </Alert>: null
            }
            {
              this.props.status.get('type') === 'ERROR' ?
                <Alert bsStyle="danger" onDismiss={this.props.hide_message}>
                  <h4>Oh snap! You got an error!</h4>
                  <p>{ this.props.status.get('message') }</p>
                </Alert> : null
            }

            {
            	this.renderNewUserButton()
            }
          </form> 
  	)
  }

  render() { 
  	return (
  		<span>
  			<h1>{this.props.reducer.get('title').get(this.props.reducer.get('visualizationType')).get('title')}</h1>  			{
	  			this.props.reducer.get('visualizationType') === 'view' ?
	  			<span>
	  			{
	  				this.renderView()
	  			}
	  			{
	            	this.renderViewUserButton()
	            }
	  			</span> : null
	  		}{
	  			this.props.reducer.get('visualizationType') === 'remove' ?
	  			<span>
	  			{
	  				this.renderView()
	  			}
	  			{
	            	this.renderRemoveUserButton()
	            }
	  			</span> : null
	  		}{
	  			this.props.reducer.get('visualizationType') === 'new'
	  			|| this.props.reducer.get('visualizationType') === 'edit' ?
	  			<span>
	  			{
	  				this.renderForm()
	  			}
	  			</span> : null
	  		} 
  		</span>
  	)
  }
}

export default UserForm