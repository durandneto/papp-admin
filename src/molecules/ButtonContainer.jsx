import React, { Component } from 'react'
import { ButtonSquad, ButtonFormSquad } from './../atoms/Buttons'
import { BoxFull } from './../atoms/Box'


class ButtonContainer extends Component {

	constructor(props){
		super(props)
		this._open = this._open.bind(this)
		this._close = this._close.bind(this)
	}

	componentWillMount(){
		this.setState({isOpen : false })
	}

  _open (e){
    this.setState({isOpen : true})
  }
  _close (e){
    this.setState({isOpen : false})
  }

  render() {
    return (
    	<BoxFull isOpen={this.state.isOpen} closeCallback={this._close} >
		    <div className='well'>
			    <ButtonSquad 
			    	type='primary'
			    	icon='fa-plus-square'
			    	to={`/${this.props.path}/new`}
			    	label='+'
			    	 />
			    <ButtonFormSquad label='Close' 
			    	click={this._close}/>
			    <ButtonFormSquad label='Open'
			    	click={this._open}
			     />
	      </div>
        </BoxFull>
    );

}
  }  

export default ButtonContainer