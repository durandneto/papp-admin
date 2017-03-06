import React, { Component } from 'react'
import { ButtonSquad } from '../atoms/Buttons'


class ButtonContainer extends Component {

  render() {

    return (
	    <div className='well'>
		    <ButtonSquad 
		    	type='primary'
		    	icon='fa-plus-square'
		    	to={`/${this.props.path}/new`}
		    	label='+'
		    	 />
		    <ButtonSquad label='Filter' />
		    <ButtonSquad label='Export' />
      </div>
    );

}
  }  

export default ButtonContainer