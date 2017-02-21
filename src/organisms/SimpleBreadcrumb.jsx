import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import BreadCrumb from './../molecules/BreadCrumb'

class SimpleBreadcrumb extends Component {

  render() {

    return (
      <Row>
        <Col md={12}>
          <BreadCrumb {...this.props}/>
        </Col>
      </Row>    
    );

  }
}  

export { SimpleBreadcrumb }
export default SimpleBreadcrumb
