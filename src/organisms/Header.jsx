import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

class Header extends Component {

  render() {

    return (
      <Row className="show-grid">
        <Col onClick={this.props.show_mobile_menu} md={12}>header</Col>
      </Row>
    );
  } 
}

export { Header }
export default Header;



