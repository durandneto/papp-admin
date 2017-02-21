import React, { Component } from 'react'
import { Link } from 'react-router'
import { Col, Row } from 'react-bootstrap'

class Content extends Component {

  render() {
    return (
      <Row className="show-grid">    
        <Col md={2}>
          <nav>
            <ul>
              <li><Link to='/'>Dashboard</Link></li>
              <li><Link to='/users'>Users</Link></li>
              <li><Link to='/groups'>Groups</Link></li> 
              <li><Link to='/topics'>Topics</Link></li>
              <li><Link to='/reports'>Reports</Link></li>
            </ul>
          </nav>
        </Col>
        <Col md={10}>{ this.props.children }</Col>
      </Row>
    );

}
  }  

export { Content }
export default Content;
