import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-bootstrap'

class ButtonContainer extends Component {

  render() {
    return (
      <Grid fluid={true}>
        <Row>    
          <Col md={12} className='well'>
            <a className="btn btn-primary"><i className="fa fa-fw -square -circle fa-plus-square"></i>+</a>
            <a className="btn btn-default"><i className="fa fa-fw -square -circle fa-plus-square"></i>Fitler</a>
            <a className="btn btn-default"><i className="fa fa-fw -square -circle fa-plus-square"></i>Export</a>
          </Col>
        </Row>
      </Grid>
    );

}
  }  

export default ButtonContainer