import React, { Component } from 'react'

import TemplateTableList from './../templates/TableList'

class TableList extends Component {

  render() {
    return (
    		<TemplateTableList header={this.props.header} show_mobile_menu={this.props.show_mobile_menu} > 
    			{ this.props.children }
    		</TemplateTableList>
    )
  }
}

export { TableList }
export default TableList