/* eslint-disable */
import React, { Component } from 'react'
import { TweenMax, TimelineMax } from 'gsap'

class Box extends Component {

  constructor(props) {
    super(props)
  } 

  render() {
    return ( 
      <div
        className={ this.props.className }>
        { this.props.children }
      </div>
    )
  }

}
class BoxFull extends Component {

  constructor(props) {
    super(props)
    this._close = this._close.bind(this)
    this._open = this._open.bind(this)
  } 

  _close(){
    TweenMax.set(this.refs.boxFull,{className:"-=box-full"})
  }
  _open(){

    let elements = document.getElementsByClassName('animation')
    let tl = new TimelineMax();
    
    tl.add( TweenMax.set(this.refs.boxFull,{className:"+=box-full"}));
    tl.add( TweenMax.set(elements, {opacity:0}));
    tl.add( TweenMax.staggerTo(elements, 0.5, { opacity: 1}, 0.5));            
    
  }

  shouldComponentUpdate(nextProps, nextState){
     if ( nextProps.isOpen ){
      this._open()
    }else{
      this._close()
    }
    return true
  }

  render() {
    return (
    <div ref="boxFull" className='box'>
      <div className='animation background' onClick={this.props.closeCallback}></div>
      <div className='animation children'>
        { this.props.children }
      </div>
    </div> 
    )
  }

}

export { Box }
export { BoxFull }
export default Box 
