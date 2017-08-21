import React, { Component } from 'react' 
import { Alert, FormGroup, ControlLabel, FormControl, HelpBlock, Well } from 'react-bootstrap' 
import { ButtonFormSquad } from './../../atoms/Buttons'
import FormValidation from './FormValidation'

import Dropzone from 'react-dropzone'

class TopicForm extends FormValidation {

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
  handleColorChange(e) {
    this.setState({ color: e.target.value },()=> {
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
          <p><img src={`http://localhost:3010/files/topic/${this.props.row.get('id')}/avatar.jpg`} style= {{width:150, height:150}}/></p>
          <p>Color: { this.props.row.get('color') }</p> 
          <p>User Id: { this.props.row.get('user').get('id') }</p> 
          <p>User Email: { this.props.row.get('user').get('email') }</p> 
        </Alert>
  	)
  }

  renderNewTopicButton() {
  	return (
  		<Well bsSize="large">
        {
          this.props.isSaving ? 'Saving new Topic' : 'Actions'
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
  renderEditTopicButton() {
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
  renderViewTopicButton() {
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

  renderRemoveTopicButton() {
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

  onDrop(files) {
    let { set_avatar_topic } = this.props
    // set_file(files[0])
    set_avatar_topic(files[0])
    console.log('--------- --------- -----files',files)
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
              validationState={this.getValidationStringState(this.props.row.get('color'))}
            >
              <ControlLabel>Color</ControlLabel>
              <FormControl
                type="text"
                value={this.props.row.get('color')}
                placeholder="Enter color name"
                onChange={this.handleColorChange.bind(this)}
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
              validationState={this.getValidationStringState(this.props.row.get('user').get('id'))}
            >
              <ControlLabel>Avatar</ControlLabel>
              {/*
                this.props.avatar.get('isUploadding')
                ? <img src={this.props.avatar.get('file').get('preview')} style= {{width:150, height:150}}/>
                : <Dropzone ref="dropzone" onDrop={this.onDrop.bind(this)}  className="drag-drop">
                  <label htmlFor="">Arraste pra cá, ou...</label>
                </Dropzone>
              */}
              <Dropzone ref="dropzone" onDrop={this.onDrop.bind(this)}  className="drag-drop">
                  <label htmlFor="">Arraste pra cá, ou...</label>
                </Dropzone>

            </FormGroup>



            {
              this.props.status.get('type') === 'SUCCESS' ?
                 <Alert bsStyle="success" onDismiss={this.props.hide_message}>
                  <h4>Oh yeah! New Topic created succefully!</h4>
                  <p>ID: { this.props.lastRow.get('id') }</p> 
                  <p>Name: { this.props.lastRow.get('name') }</p> 
                  <p>Color: { this.props.lastRow.get('color') }</p> 
                  <p>User Id: { this.props.lastRow.get('user').get('id') }</p> 
                  <p>User Email: { this.props.lastRow.get('user').get('email') }</p> 
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
            	this.renderNewTopicButton()
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
	            	this.renderViewTopicButton()
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
          	this.renderRemoveTopicButton()
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

export default TopicForm