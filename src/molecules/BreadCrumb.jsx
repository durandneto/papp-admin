import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-bootstrap'

class BreadCrumb extends Component {

  render() {
    return (
      <Grid fluid={true}>
        <Row>    
          <Col md={12}>
            <ul className="breadcrumb">
              <li>
                <a href="#">Inicio</a>
              </li>
              <li className="active">Usuarios</li>
            </ul>
          </Col>
        </Row>
      </Grid>
    );

}
  }  

export default BreadCrumb;
