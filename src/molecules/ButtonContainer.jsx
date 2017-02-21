import React, { Component } from 'react'

class ButtonContainer extends Component {

  render() {
    return (
      <div className='well'>
        <a className="btn btn-primary"><i className="fa fa-fw -square -circle fa-plus-square"></i>+</a>
        <a className="btn btn-default"><i className="fa fa-fw -square -circle fa-plus-square"></i>Fitler</a>
        <a className="btn btn-default"><i className="fa fa-fw -square -circle fa-plus-square"></i>Export</a>
      </div>
    );

}
  }  

export default ButtonContainer