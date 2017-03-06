/* eslint-disable */
import React, { Component } from 'react'
import { Link } from 'react-router'

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
     let { to, label, type, icon } = this.props

    type = (type) ? type : 'default';
    icon = (icon) ? icon : '';

    return ( 
      <Link  to={(to)?to:null} className={`btn btn-${type}`}>
      {
        icon ? <i className={`fa fa-fw -square -circle ${icon}`}></i> : null
      }
      {
        label
      }
      </Link>
    )
  }
}

class ButtonFormSquad extends ButtonDefault {

  render() {
     let { to, label, type, icon, click, className } = this.props

    type = (type) ? type : 'default';
    icon = (icon) ? icon : '';
    className = (className) ? className : '';

    return ( 
      <span onClick={(click)?click:null} className={`btn btn-${type} ${className}`}>
      {
        icon ? <i className={`fa fa-fw -square -circle ${icon}`}></i> : null
      }
      {
        label
      }
      </span>
    )
  }
}

export { ButtonDefault }
export { ButtonLinkTableHeader }
export { ButtonFormSquad }
export { ButtonAncor }
export { ButtonSquad }
export default ButtonDefault 
