import React, { Component } from 'react'
import { Link } from 'react-router'
import { Col, Row, NavItem, Nav} from 'react-bootstrap'

class Content extends Component {

  render() {

    return (
      <Row className="show-grid">    
        <Col md={2}>
          <Nav bsStyle="pills" stacked activeKey={this.props.location.pathname.split('/')[1]}>
              <NavItem eventKey={''} ><Link to='/'>Dashboard</Link></NavItem>
              <NavItem eventKey={'users'} ><Link to='/users'>Users</Link></NavItem>
              <NavItem eventKey={'languages'} ><Link to='/languages'>Languages</Link></NavItem>
              <NavItem eventKey={'groups'} ><Link to='/groups'>Groups</Link></NavItem> 
              <NavItem eventKey={'topics'} ><Link to='/topics'>Topics</Link></NavItem>
              <NavItem eventKey={'platforms'} ><Link to='/platforms'>Platforms</Link></NavItem>
              <NavItem eventKey={'reports'} ><Link to='/reports'>Reports</Link></NavItem>

          </Nav>
        </Col>
        <Col md={10}>{ this.props.children }</Col>
      </Row>
    );
  }  
}

export { Content }
export default Content;
