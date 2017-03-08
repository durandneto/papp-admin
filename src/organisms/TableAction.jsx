import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import ButtonContainer from './../molecules/ButtonContainer'
import TableList from './../molecules/TableList'

class TableAction extends Component {


  render() {
    return (
      <span>
        <Row>
          <Col md={12}>
              <ButtonContainer {...this.props} />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <TableList {...this.props} />
          </Col>
        </Row>
      </span>
    );

  }
}  

export { TableAction }
export default TableAction
