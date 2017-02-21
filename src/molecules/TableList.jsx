import React, { Component } from 'react'

class TableList extends Component {

  render() {
    console.log(this.props)
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {
              this.props.columns.map((value, index) => {
                return (
                  <th  key={`datatablelistheader${index}`} >
                    <div className="th-inner sortable">{value}</div>
                    <div className="fht-cell"></div>
                  </th>
                  )
              })
            }
            <th >
              <div className="th-inner ">Options</div>
              <div className="fht-cell"></div>
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
                      <i className="fa fa-fw fa-files-o"></i>
                      <i className="fa fa-fw fa-eye"></i>
                      <i className="fa fa-fw fa-ban"></i>
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
        <tfoot>
          <tr>
            <td>
              <div className="fixed-table-pagination">
                <div className="pull-left pagination-detail">
                  <span className="pagination-info">Showing 1 to 3 of 3 rows</span>
                  <span className="page-list" >
                    <span className="btn-group dropup">
                      <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown"><span className="page-size">10</span> <span className="caret"></span></button>
                      <ul className="dropdown-menu" role="menu">
                        <li className="active"><a >10</a></li>
                      </ul>
                    </span>
                    records per page
                  </span>
                </div>
                <div className="pull-right pagination" >
                  <ul className="pagination">
                    <li className="page-first disabled"><a >first</a></li>
                    <li className="page-pre disabled"><a >prev</a></li>
                    <li className="page-number active disabled"><a >current</a></li>
                    <li className="page-next disabled"><a >next</a></li>
                    <li className="page-last disabled"><a >last</a></li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
);

}
  }  

export default TableList