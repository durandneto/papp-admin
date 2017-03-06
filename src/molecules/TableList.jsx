import React, { Component } from 'react'
import Paginator from './Paginator'
import { ButtonLinkTableHeader, ButtonDefault } from './../atoms/Buttons'

class TableList extends Component {
 
  _view(param) {
    this.props.callback('view')
  }
  _remove(param) {
    this.props.callback('remove')
  }
  _next(param) {
    this.props.callback('next')
  }
  _first(param) {
    this.props.callback('first')
  }
  _last(param) {
    this.props.callback('last')
  }
  _prev(param) {
    this.props.callback('prev')
  }

  render() {
    return (
      <table className="table table-striped table-hover">
      {
        this.props.columns && this.props.rows ? 
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
        </thead> : null
      }
        <tbody>
            {
            this.props.rows ?
              this.props.rows.map((value, index) => {
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
                      {/*<ButtonDefault icon="fa-eye" click={this._view.bind(this,2)}  />
                      <ButtonDefault icon="fa-ban" click={this._remove.bind(this,3)} />
                    */}

                    <span  onClick={this._view.bind(this,2)} > View </span>  
                    <span  onClick={this._remove.bind(this,1)} > Remove </span>  
                    </td>
                  </tr>
                )
              }) : <tr><td> no data found</td></tr>
            } 
        </tbody> 
        {
          this.props.rows ?
            <tfoot>
              <tr>
                <td>
                  <Paginator
                    current={this.props.paginator.get('currentPage')}
                    limit={this.props.paginator.get('totalPage')}
                    total={this.props.paginator.get('count')}
                    itemsPerPage={this.props.paginator.get('limitPerPage')}
                    actionNext={this._next.bind(this)}
                    actionPrev={this._prev.bind(this)}
                    actionLast={this._last.bind(this)}
                    actionFirst={this._first.bind(this)}
                    allowNavigation={this.props.paginator.get('allowNavigation')}
                     />
                </td>
              </tr>
            </tfoot> : null
        }
      </table>
    );

  }  
}

export default TableList