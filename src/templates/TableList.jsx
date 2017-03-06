import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import Header from './../organisms/Header'
import Content from './../organisms/Content'
import TableAction from './../organisms/TableAction'
import Footer from './../organisms/Footer'
import SimpleBreadcrumb from './../organisms/SimpleBreadcrumb'

class TableActionTemplate extends Component {

  _callback(type) {
    let { 
      reducer
      , callback
    } = this.props

    callback(reducer,type)

  }

  render() {
  	
    let { 
      reducer
      , header
      , show_mobile_menu
      , location
    } = this.props

    return (
      	<Grid fluid={true}>
        	<Header data={header} show_mobile_menu={show_mobile_menu}/>
          <Content>
            <Row>    
              <Col md={12}>
                <SimpleBreadcrumb location={location} />
              </Col>
            </Row>
            <Row>
              <Col md={12}> 
                <TableAction 
                  path={reducer.get('path')}
                  columns={reducer.get('data').get('columns')}
                  rows={reducer.get('data').get('rows')}
                  callback={this._callback.bind(this)} 
                  paginator={reducer.get('paginator')} />
              </Col>
            </Row>
            { this.props.children }          
          </Content>
        	<Footer />
        </Grid>
    );
  }
}
 
export { TableActionTemplate }
export default TableActionTemplate