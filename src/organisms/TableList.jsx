import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

import BreadCrumb from './../molecules/BreadCrumb'
import ButtonContainer from './../molecules/ButtonContainer'

class TableList extends Component {

  render() {
    return (
      <Col> 
        <div className="section">
            <BreadCrumb />
            <ButtonContainer />
        </div>
        <div className="section">
          <div className="row">
            <div className="col-md-12">
              <table className="table table-hover table-striped">
                <tbody>
                  <tr>
                    <td>
                      <a href="#"><i className="fa fa-2x fa-fw -alt fa-eye-slash"></i></a>
                    </td>
                    <td>
                      <h4>
                        <b>Director de Recursos Humanos</b>
                      </h4>
                      <p>@Carlos Enciso</p>
                    </td>
                    <td>
                      <img alt='' src="http://pingendo.github.io/pingendo-bootstrap/assets/user_placeholder.png" className="img-circle" width="60" />
                    </td>
                    <td>
                      <h4>
                        <b>Carlos Enciso</b>
                      </h4>
                      <a href="mailto: carlos@mail.com"> carlos@mail.com</a>
                    </td>
                    <td>5 años</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-default" value="left" type="button">
                        <i className="fa fa-fw s fa-remove"></i>Eliminar</button>
                        <button className="btn btn-default" value="right" type="button">
                        <i className="fa fa-fw fa-cog"></i>Configurar</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#"><i className="fa fa-2x fa-fw -alt fa-eye-slash"></i></a>
                    </td>
                    <td>
                      <h4>
                        <b>Director de Recursos Humanos</b>
                      </h4>
                      <p>@Carlos Enciso</p>
                    </td>
                    <td>
                      <img alt='' src="http://pingendo.github.io/pingendo-bootstrap/assets/user_placeholder.png" className="img-circle" width="60" />
                    </td>
                    <td>
                      <h4>
                        <b>Carlos Enciso</b>
                      </h4>
                      <a href="mailto: carlos@mail.com"> carlos@mail.com</a>
                    </td>
                    <td>5 años</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-default" value="left" type="button">
                        <i className="fa fa-fw s fa-remove"></i>Eliminar</button>
                        <button className="btn btn-default" value="right" type="button">
                        <i className="fa fa-fw fa-cog"></i>Configurar</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#"><i className="fa fa-2x fa-fw -alt fa-eye-slash"></i></a>
                    </td>
                    <td>
                      <h4>
                        <b>Director de Recursos Humanos</b>
                      </h4>
                      <p>@Carlos Enciso</p>
                    </td>
                    <td>
                      <img alt='' src="http://pingendo.github.io/pingendo-bootstrap/assets/user_placeholder.png" className="img-circle" width="60" />
                    </td>
                    <td>
                      <h4>
                        <b>Carlos Enciso</b>
                      </h4>
                      <a href="mailto: carlos@mail.com"> carlos@mail.com</a>
                    </td>
                    <td>5 años</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-default" value="left" type="button">
                        <i className="fa fa-fw s fa-remove"></i>Eliminar</button>
                        <button className="btn btn-default" value="right" type="button">
                        <i className="fa fa-fw fa-cog"></i>Configurar</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#"><i className="fa fa-2x fa-fw -alt fa-eye-slash"></i></a>
                    </td>
                    <td>
                      <h4>
                        <b>Director de Recursos Humanos</b>
                      </h4>
                      <p>@Carlos Enciso</p>
                    </td>
                    <td>
                      <img alt='' src="http://pingendo.github.io/pingendo-bootstrap/assets/user_placeholder.png" className="img-circle" width="60" />
                    </td>
                    <td>
                      <h4>
                        <b>Carlos Enciso</b>
                      </h4>
                      <a href="mailto: carlos@mail.com"> carlos@mail.com</a>
                    </td>
                    <td>5 años</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-default" value="left" type="button">
                        <i className="fa fa-fw s fa-remove"></i>Eliminar</button>
                        <button className="btn btn-default" value="right" type="button">
                        <i className="fa fa-fw fa-cog"></i>Configurar</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> 
     
      </Col>
    );

  }
}  

export { TableList }
export default TableList
