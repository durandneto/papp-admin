import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'

import Header from './../organisms/Header'
import Content from './../organisms/Content'
import SimpleTable from './../organisms/SimpleTable'
import Footer from './../organisms/Footer'

class TableListTemplate extends Component {

  render() {

  	let { header, show_mobile_menu, users } = this.props
    return (
    	<Grid fluid={true}>
      	<Header data={header} show_mobile_menu={show_mobile_menu}/>
        <Content>
          <SimpleTable data={users} />
        </Content>
      	<Footer />
      </Grid>
    );
    
  }
}
 
export { TableListTemplate }
export default TableListTemplate