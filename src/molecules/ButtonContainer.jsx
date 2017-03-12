import React, { Component } from 'react'
import { ButtonSquad, ButtonFormSquad } from './../atoms/Buttons'
import { BoxFull } from './../atoms/Box'

import { FormControl } from 'react-bootstrap'


class ButtonContainer extends Component {

	constructor(props){
		super(props)
		this._open = this._open.bind(this)
		this._close = this._close.bind(this)
	}

	componentWillMount(){
		this.setState({isOpen : false, search: '' })
	}

  _open (e){
    this.setState({isOpen : true})
  }
  _close (e){
    this.setState({isOpen : false})
  }
  _search(){
    this.props.search(this.state.search)
  }

  handleChange(e) {
    this.setState({ search: e.target.value }, () => {
    	this.props.updateSearchTerm(this.state.search)
    	})
  }

  render() {
    return (
    	<BoxFull isOpen={this.state.isOpen} closeCallback={this._close} >
		    <div className='well'>
			    <ButtonFormSquad
			    	icon='fa-plus-square'
			    type='primary' 
			    	click={this.props.add}/>
			    <ButtonFormSquad label='Close' 
			    	click={this._close}/>
			    <ButtonFormSquad label='Open'
			    	click={this._open}
			     />
		 
            <ButtonFormSquad click={this._search.bind(this)} label='Search' className='pull-right' />
			      <input
			      		className='pull-right'
                type="text"
                value={this.state.search}
                placeholder="Enter text"
                onChange={this.handleChange.bind(this)}
              />
	      </div>
        </BoxFull>
    );

}
  }  

export default ButtonContainer