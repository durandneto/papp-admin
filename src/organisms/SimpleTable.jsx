import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

class SimpleTable extends Component {

  render() {
    return (
      <Col>
        <h3>View Users </h3>
        <hr/>
        <div className="table-responsive">
          <div className="bootstrap-table">
            <div className="fixed-table-toolbar">
              <div className="bars pull-left">
                <div id="toolbargrid">
                  <div className="form-inline" role="form"></div>
                </div>
              </div>
            </div>
            <div className="toolbar clearfix">
              <div className="toolbar-left">
                <button className="btn btn-primary">Add User</button> 
                  <a className="btn btn-default" target="_blank">
                  <i className="fa fa-fw fa-file-pdf-o"></i> Filter</a>
                  <a className="btn btn-default" target="_blank">
                  <i className="fa fa-fw fa-file-pdf-o"></i>export</a>
              </div>
              <div className="toolbar-right">
                <div className="form-inline" role="form">
                    <input className="form-control table-search" type="text" placeholder="Search"/>
                </div>
                
              </div>
            </div>
            <div className="fixed-table-container">
              <div className="fixed-table-header">
                <table></table>
              </div>
              <div className="fixed-table-body">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th className="text-left">
                        <div className="th-inner sortable">Description</div>
                        <div className="fht-cell"></div>
                      </th>
                      <th className="text-left">
                        <div className="th-inner sortable">Leads</div>
                        <div className="fht-cell"></div>
                      </th>
                      <th className="text-left">
                        <div className="th-inner sortable">Order Type</div>
                        <div className="fht-cell"></div>
                      </th>
                      <th className="text-left">
                        <div className="th-inner sortable">Status</div>
                        <div className="fht-cell"></div>
                      </th>
                      <th className="text-left">
                        <div className="th-inner sortable">Date Created</div>
                        <div className="fht-cell"></div>
                      </th>
                      <th >
                        <div className="th-inner ">Options</div>
                        <div className="fht-cell"></div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr data-index="0">
                      <td className="text-left">Test</td>
                      <td className="text-left"><a href="/broker/order/1/lead">1/1</a></td>
                      <td className="text-left">Buyer</td>
                      <td className="text-left">Completed</td>
                      <td className="text-left">01/29/2015 16:47:05</td>
                      <td >
                        <a className="btn btn-primary" href="/broker/order/clone/1"
                         data-toggle="tooltip"
                          data-placement="top"
                           title="Clone Order"><i className="fa fa-fw fa-files-o"></i></a> <a className="btn btn-primary"
                            href="/broker/order/detail/1" data-toggle="tooltip" data-placement="top" 
                            title="View Order Detail"><i className="fa fa-fw fa-eye"></i></a>
                             <a id="BTN_ORDER_CANCEL1" className="btn btn-primary"
                              href="/broker/order/cancel/request/1" data-toggle="tooltip" data-placement="top"
                               title="Cancel Order" style={{display: "none"}}><i className="fa fa-fw fa-ban"></i></a>

                      </td>
                    </tr>
                  </tbody>
                  <tfoot></tfoot>
                </table>
              </div>
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
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </Col>
    );

  }
}  

export { SimpleTable }
export default SimpleTable
