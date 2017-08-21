import React, { Component } from 'react' 
import { Alert, FormGroup, ControlLabel, FormControl, HelpBlock, Well } from 'react-bootstrap' 
import { ButtonFormSquad } from './../../atoms/Buttons'

class PlatformForm extends Component {

  componentWillMount() {
    this.setState(this.props.row.toObject())
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

  renderView() {
  	return (
  		 <Alert bsStyle={(this.props.reducer.get('visualizationType') === 'remove') ? 'danger': 'info'} >
          <p>ID: { this.props.row.get('id') }</p> 
          <p>Name: { this.props.row.get('name') }</p> 
        </Alert>
  	)
  }

  renderNewPlatformButton() {
  	return (
  		<Well bsSize="large">
        {
          this.props.isSaving ? 'Saving new Platform' : 'Actions'
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
  renderEditPlatformButton() {
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
  renderViewPlatformButton() {
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

  renderRemovePlatformButton() {
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
                value={this.props.row.get('name')}
                placeholder="Enter full name"
                onChange={this.handleChange.bind(this)}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length more than 5 caracters.</HelpBlock>
            </FormGroup>

            {
              this.props.status.get('type') === 'SUCCESS' ?
                 <Alert bsStyle="success" onDismiss={this.props.hide_message}>
                  <h4>Oh yeah! New Platform created succefully!</h4>
                  <p>ID: { this.props.lastRow.get('id') }</p> 
                  <p>Name: { this.props.lastRow.get('name') }</p> 
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
            	this.renderNewPlatformButton()
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
	            	this.renderViewPlatformButton()
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
          	this.renderRemovePlatformButton()
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

export default PlatformForm