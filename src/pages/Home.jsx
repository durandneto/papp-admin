import React, { Component } from 'react'

import TemplateHome from './../templates/Home'

class Home extends Component {

  render() {
    return (
		<TemplateHome header={this.props.header} show_mobile_menu={this.props.show_mobile_menu} > 
			{ this.props.children }
		</TemplateHome>
)
  }
}

export { Home }
export default Home