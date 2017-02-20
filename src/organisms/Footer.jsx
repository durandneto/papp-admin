import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

class Footer extends Component {

  render() {

    return (
      <Row className="show-grid">
        <Col md={12}>footer</Col>
      </Row>
    );

  }  
}

export { Footer }
export default Footer;

