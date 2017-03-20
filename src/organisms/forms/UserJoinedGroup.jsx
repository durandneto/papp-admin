import React, { Component } from 'react' 
import { Alert, FormGroup, ControlLabel, FormControl, HelpBlock, Well } from 'react-bootstrap' 
import { ButtonFormSquad } from './../../atoms/Buttons'
import FormValidation from './FormValidation'

class UserJoinedGroupForm extends FormValidation {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.setState(this.props.row.toObject())
    this.props.hide_message()
  }

  handleChange(e) {
    this.setState({ name: e.target.value },()=> {
      this.props.save(this.state)
    })
  }
  handleUserChange(e) {
    this.setState({ user: { id: e.target.value } },()=> {
      this.props.save(this.state)
    })
  }

  renderView() {
  	return (
  		 <Alert bsStyle={(this.props.reducer.get('visualizationType') === 'remove') ? 'danger': 'info'} >
          <p>ID: { this.props.row.get('id') }</p> 
          <p>Name: { this.props.row.get('name') }</p> 
          <p>User Id: { this.props.row.get('user').get('id') }</p> 
          <p>User Email: { this.props.row.get('user').get('email') }</p> 
          <p>Group: { this.props.row.get('group').get('name') }</p> 
        </Alert>
  	)
  }

  renderNewUserJoinedGroupButton() {
  	return (
  		<Well bsSize="large">
        {
          this.props.isSaving ? 'Saving new UserJoinedGroup' : 'Actions'
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
  renderEditUserJoinedGroupButton() {
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
  renderViewUserJoinedGroupButton() {
    console.log(this.props.joinGroup)
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
            type='default'
            click={this.props.joinGroup}
            label='Join'
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

  renderRemoveUserJoinedGroupButton() {
  	return (
  		<Well bsSize="large">
        Actions 
          <ButtonFormSquad 
            className='pull-right'
            type='danger'
            click={this.props.remove_member.bind(this)}
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

            {
              this.props.status.get('type') === 'SUCCESS' ?
                 <Alert bsStyle="success" onDismiss={this.props.hide_message}>
                  <h4>Oh yeah! New UserJoinedGroup created succefully!</h4>
                  <p>ID: { this.props.lastRow.get('id') }</p> 
                  <p>Name: { this.props.lastRow.get('name') || null}</p> 
                  <p>User Id: { this.props.lastRow.get('user').get('id') || null }</p> 
                  <p>User Email: { this.props.lastRow.get('user').get('email')  || null}</p> 
                  <p>Group: { this.props.lastRow.get('group').get('name')  || null}</p> 
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
            	this.renderNewUserJoinedGroupButton()
            }
          </form> 
  	)
  }

  render() { 
  	return (
  		<span>
  			<h1>
        {
          this.props.reducer.get('title')
          .get(this.props.reducer.get('visualizationType'))
          .get('title')
        }
        {
          ' '
        }
        {
          this.props.group.get('name')
        }
        </h1>
        <h4>
        Owner: 
        {
          ' '
        }
        {
          this.props.group.get('user').get('name')
        }
        </h4>
        <p>
        {
          this.props.group.get('user').get('email')
        }
        </p>    			
        {
	  			this.props.reducer.get('visualizationType') === 'view' ?
	  			<span>
	  			{
	  				this.renderView()
	  			}
	  			{
	            	this.renderViewUserJoinedGroupButton()
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
          	this.renderRemoveUserJoinedGroupButton()
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

export default UserJoinedGroupForm