import React, { Component } from 'react'

import TemplateSimpleTable from './../templates/SimpleTable'

class TableList extends Component {

  render() {
    return (
    		<TemplateSimpleTable header={this.props.header} show_mobile_menu={this.props.show_mobile_menu} > 
    			{ this.props.children }
    		</TemplateSimpleTable>
    )
  }
}

export { TableList }
export default TableList