/* eslint-disable */
import React, { Component } from 'react'

class ButtonDefault extends Component {

  render() {
     let { icon, click } = this.props

    return ( 
      <span  onClick={click}>
        <i className={`fa fa-fw ${icon}`}></i>
      </span>
    )
  }

}

class ButtonLinkTableHeader extends ButtonDefault {

  render() {
     let { label, click, sortable } = this.props

     let className = (sortable) ? 'sortable' : '';

    return ( 
      <span  onClick={click}>
        <div className={`th-inner ${sortable}`}>{label}</div>
        <div className="fht-cell"></div>
      </span>
    )
  }

}

class ButtonAncor extends ButtonDefault {

  render() {
     let { label, click, className } = this.props

    className = (className) ? className : '';

    return ( 
      <a onClick={click} className={className}>{label}</a>
    )
  }
}

class ButtonSquad extends ButtonDefault {

  render() {
     let { label, click, type, icon } = this.props

    type = (type) ? type : 'default';
    icon = (icon) ? icon : '';

    return ( 
      <a  onClick={click}  className={`btn btn-${type}`}>
      {
        icon ? <i className={`fa fa-fw -square -circle ${icon}`}></i> : null
      }
      {
        label
      }
      </a>
    )
  }
}

export { ButtonDefault }
export { ButtonLinkTableHeader }
export { ButtonAncor }
export { ButtonSquad }
export default ButtonDefault 
