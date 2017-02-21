import React, { Component } from 'react'

import TemplateTableList from './../templates/TableList'

class TableList extends Component {

  render() {
    return (
    		<TemplateTableList {...this.props} > 
    			{ this.props.children }
    		</TemplateTableList>
    )
  }
}

export { TableList }
export default TableList