import React, { Component } from 'react'
import { ButtonSquad } from '../atoms/Buttons'


class ButtonContainer extends Component {

  render() {
    return (
      <div className='well'>
	    <ButtonSquad type='primary' icon='fa-plus-square'/>
	    <ButtonSquad label='Filter' />
	    <ButtonSquad label='Export' />
      </div>
    );

}
  }  

export default ButtonContainer