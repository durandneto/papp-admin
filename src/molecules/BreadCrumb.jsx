import React, { Component } from 'react'
import { Link } from 'react-router'

class BreadCrumb extends Component {

  componentWillMount(){
    this.setState(this.props)
  }

  _renderBreadCrumb(){
    let pathname = this.state.location.pathname.split('/')
    let count = (pathname[pathname.length-1]) ? pathname.length : pathname.length-1
    let path = ''

    // eslint-disable-next-line
    return pathname.map((name, index)=>{
      switch(true){
        case index===0 :
          return (<li key={index}><Link to='/'>Dashboard</Link></li>)
          // eslint-disable-next-line
          break
        case index<count -1 :
          path += ['/',name].join('')
          return (<li key={index}><Link to={path}>{pathname[index]}</Link></li>)
          // eslint-disable-next-line
          break
        case index<count :
          return (<li className="active" key={index}>{pathname[index]}</li>)
          // eslint-disable-next-line
          break
        default:
      }
    })
  }

  render() {
    return (
      <ul className="breadcrumb">
      {
        this._renderBreadCrumb()
      }
      </ul>
    )
  }  
}

export default BreadCrumb
