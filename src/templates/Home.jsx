import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'

import Header from './../organisms/Header'
import Content from './../organisms/Content'
import Footer from './../organisms/Footer'

class HomeTemplate extends Component {

  render() {

    let { header, show_mobile_menu } = this.props
    return (
      <Grid fluid={true}>
        <Header data={header} show_mobile_menu={show_mobile_menu}/>
        <Content>
          { this.props.children }          
        </Content>
        <Footer />
      </Grid>
    );
    
  }
}
 
export { HomeTemplate }
export default HomeTemplate