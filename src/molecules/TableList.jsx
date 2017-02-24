import React, { Component } from 'react'
import Paginator from './Paginator'
import { ButtonLinkTableHeader, ButtonDefault } from './../atoms/Buttons'

class TableList extends Component {
 
  _view(param) {
    console.log('click',param)
  }
  _remove(param) {
    console.log('click',param)
  }
  render() {
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {
              this.props.columns.map((value, index) => {
                return (
                  <th  key={`datatablelistheader${index}`} >
                    <ButtonLinkTableHeader label={value} sortable={true} />
                  </th>
                  )
              })
            }
            <th >
              <ButtonLinkTableHeader label={'Options'} /> 
            </th>
          </tr>
        </thead>
        <tbody>
            {
              this.props.data.map((value, index) => {
                return (
                  <tr data-index={index}  key={`datatablelistbody${index}`} >
                  { 
                    value.map((v,a)=>{
                      return (
                        <td className="text-left" key={`datatablelistbodytd${a}`}>{v}</td>
                      )
                    })
                  }
                    <td >
                      <ButtonDefault icon="fa-eye" click={this._view.bind(this,2)}  />
                      <ButtonDefault icon="fa-ban" click={this._remove.bind(this,3)} />
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
        <tfoot>
          <tr>
            <td>
              <Paginator current={1} limit={10} total={300} itemsPerPage={5} />
            </td>
          </tr>
        </tfoot>
      </table>
);

}
  }  

export default TableList