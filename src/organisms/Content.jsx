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
              <li><Link to="/user/durand">user 1 </Link></li>
              <li>
                <Link to={{ pathname: '/user/bob', query: { showAge: true } }}>user 2</Link><br />
              </li>
              <li>
                <Link to='/'>back</Link>
              </li>
              <li>
                <Link disabled>Link 3 content</Link>
              </li>
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
