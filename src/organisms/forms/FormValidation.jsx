import React, { Component } from 'react' 
import { Alert, FormGroup, ControlLabel, FormControl, HelpBlock, Well } from 'react-bootstrap' 
import { ButtonFormSquad } from './../../atoms/Buttons'

class FormValidation extends Component {

  _save() {
    this.props.submit()
  }

  getValidationPassword(password) {

  	if ( password ){
	    const length = password.length
	    if (length > 5) return 'success'
	    else if (length > 3) return 'warning'
	    else if (length > 0) return 'error'
	    else return null
  	}
	
	return null
  }

  getValidationStringState(text) {
  	if ( text ){
	    const length = text.length
	    if (length > 5) return 'success'
	    else if (length > 3) return 'warning'
	    else if (length > 0) return 'error'
	    else return null
  	}
	return null
  }

  getValidationEmail(email) {

  	if ( email ) {
	    const length = email.length
	    if( length > 0 ){
	      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	      if ( re.test(email) ) {
	        return 'success'
	      } else {
	        return 'error'
	      }
	    }
  	}
    return null
  }
}

export default FormValidation