import React, { Component } from 'react' 
import { Alert, FormGroup, ControlLabel, FormControl, HelpBlock, Well } from 'react-bootstrap' 
import { ButtonFormSquad } from './../../atoms/Buttons'
import FormValidation from './FormValidation'

class UserGroupForm extends FormValidation {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.setState(this.props.row.toObject())
    this.props.hide_message()
  }

  handleLinkChange(e) {
    this.setState({ link: e.target.value },()=> {
      this.props.save(this.state)
    })
  }

  handleChange(e) {
    this.setState({ name: e.target.value },()=> {
      this.props.save(this.state)
    })
  }
  handleDescriptionChange(e) {
    this.setState({ description: e.target.value },()=> {
      this.props.save(this.state)
    })
  }
  handleLocationChange(e) {
    this.setState({ location: e.target.value },()=> {
      this.props.save(this.state)
    })
  }
  handleTopicsChange(e) {
    this.setState({ topics: e.target.value },()=> {
      this.props.save(this.state)
    })
  }
  handleUserChange(e) {
    this.setState({ user: { id: e.target.value } },()=> {
      this.props.save(this.state)
    })
  }
  handleLanguageChange(e) {
    this.setState({ userLanguage: { id: e.target.value } },()=> {
      this.props.save(this.state)
    })
  }
  handlePlatformChange(e) {
    this.setState({ platform: { id: e.target.value } },()=> {
      this.props.save(this.state)
    })
  }

  renderView() {
  	return (
  		 <Alert bsStyle={(this.props.reducer.get('visualizationType') === 'remove') ? 'danger': 'info'} >
          <p>ID: { this.props.row.get('id') }</p> 
          <p>Name: { this.props.row.get('name') }</p> 
          <p>Description: { this.props.row.get('description') }</p> 
          <p>Location: { this.props.row.get('location') }</p> 
          <p>Topics: { this.props.row.get('topics') }</p> 
          <p>Link: { this.props.row.get('link') }</p> 
          <p>User Id: { this.props.row.get('user').get('id') }</p> 
          <p>User Name: { this.props.row.get('user').get('name') }</p> 
          <p>User Email: { this.props.row.get('user').get('email') }</p> 
          <p>Platform: { this.props.row.get('platform').get('name') }</p> 
          <p>Language: { this.props.row.get('userLanguage').get('name') }</p> 
        </Alert>
  	)
  }

  renderNewUserGroupButton() {
  	return (
  		<Well bsSize="large">
        {
          this.props.isSaving ? 'Saving new UserGroup' : 'Actions'
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
  renderEditUserGroupButton() {
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
  renderViewUserGroupButton() {
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

  renderRemoveUserGroupButton() {
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
              validationState={this.getValidationStringState(this.props.row.get('name'))}
            >
              <ControlLabel>Full Name</ControlLabel>
              <FormControl
                type="text"
                value={this.props.row.get('name')}
                placeholder="Enter full name"
                onChange={this.handleChange.bind(this)}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length more than 5 caracters.</HelpBlock>
            </FormGroup>


            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationStringState(this.props.row.get('description'))}
            >
              <ControlLabel>Full Description</ControlLabel>
              <FormControl
                type="text"
                value={this.props.row.get('description')}
                placeholder="Enter full description"
                onChange={this.handleDescriptionChange.bind(this)}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length more than 5 caracters.</HelpBlock>
            </FormGroup>

            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationStringState(this.props.row.get('location'))}
            >
              <ControlLabel>Full location</ControlLabel>
              <FormControl
                type="text"
                value={this.props.row.get('location')}
                placeholder="Enter full location"
                onChange={this.handleLocationChange.bind(this)}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length more than 5 caracters.</HelpBlock>
            </FormGroup>


            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationStringState(this.props.row.get('topics'))}
            >
              <ControlLabel>Full topics</ControlLabel>
              <FormControl
                type="text"
                value={this.props.row.get('topics')}
                placeholder="Enter full topics"
                onChange={this.handleTopicsChange.bind(this)}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length more than 5 caracters.</HelpBlock>
            </FormGroup>

            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationStringState(this.props.row.get('link'))}
            >
              <ControlLabel>Link</ControlLabel>
              <FormControl
                type="text"
                value={this.props.row.get('link')}
                placeholder="Enter full link"
                onChange={this.handleLinkChange.bind(this)}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length more than 5 caracters.</HelpBlock>
            </FormGroup>

            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationStringState(this.props.row.get('user').get('id'))}
            >
              <ControlLabel>User ID</ControlLabel>
              <FormControl
                type="text"
                value={this.props.row.get('user').get('id')}
                placeholder="Enter User ID"
                onChange={this.handleUserChange.bind(this)}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length more than 5 caracters.</HelpBlock>
            </FormGroup>

            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationStringState(this.props.row.get('userLanguage').get('id'))}
            >
              <ControlLabel>Language ID</ControlLabel>
              <FormControl
                type="text"
                value={this.props.row.get('userLanguage').get('id')}
                placeholder="Enter Language ID"
                onChange={this.handleLanguageChange.bind(this)}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length more than 5 caracters.</HelpBlock>
            </FormGroup>
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationStringState(this.props.row.get('platform').get('id'))}
            >
              <ControlLabel>Platform ID</ControlLabel>
              <FormControl
                type="text"
                value={this.props.row.get('platform').get('id')}
                placeholder="Enter Platform ID"
                onChange={this.handlePlatformChange.bind(this)}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length more than 5 caracters.</HelpBlock>
            </FormGroup>

            {
              this.props.status.get('type') === 'SUCCESS' ?
                 <Alert bsStyle="success" onDismiss={this.props.hide_message}>
                  <h4>Oh yeah! New UserGroup created succefully!</h4>
                  <p>ID: { this.props.lastRow.get('id') }</p> 
                  <p>Name: { this.props.lastRow.get('name') || null}</p> 
                  <p>Description: { this.props.lastRow.get('description') }</p> 
                  <p>Location: { this.props.lastRow.get('location') }</p> 
                  <p>Topics: { this.props.lastRow.get('topics') }</p> 
                  <p>Link: { this.props.lastRow.get('link') }</p> 
                  <p>User Id: { this.props.lastRow.get('user').get('id') || null }</p> 
                  <p>User Name: { this.props.lastRow.get('user').get('name') || null }</p> 
                  <p>User Email: { this.props.lastRow.get('user').get('email')  || null}</p> 
                  <p>Platform: { this.props.lastRow.get('platform').get('name') || null }</p> 
                  <p>Language: { this.props.lastRow.get('userLanguage').get('name')  || null}</p> 
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
            	this.renderNewUserGroupButton()
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
	         	this.renderViewUserGroupButton()
	        }
	  			</span> : null
	  		 }
         {
	  			this.props.reducer.get('visualizationType') === 'remove' ?
	  			<span>
	  			{
	  				this.renderView()
	  			}
	  			{
          	this.renderRemoveUserGroupButton()
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

export default UserGroupForm