import React, { Component } from 'react'

import TemplateHome from './../templates/Home'

class Home extends Component {

  render() {
    return (
		<TemplateHome {...this.props}> 
			{ this.props.children }
		</TemplateHome>
)
  }
}

export { Home }
export default Home