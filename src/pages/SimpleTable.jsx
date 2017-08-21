import React, { Component } from 'react'

import TemplateSimpleTable from './../templates/SimpleTable'

class TableList extends Component {

  render() {
    return (
    		<TemplateSimpleTable {...this.props} > 
    			{ this.props.children }
    		</TemplateSimpleTable>
    )
  }
}

export { TableList }
export default TableList