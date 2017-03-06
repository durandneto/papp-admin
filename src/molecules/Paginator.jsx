import React, { Component } from 'react'
import { ButtonAncor } from '../atoms/Buttons'

class Paginator extends Component {

  render() {

  	let { allowNavigation
      , current
      , total
      , itemsPerPage
      , limit 
    } = this.props

    return (
      <div className="fixed-table-pagination">
        <div className="pull-left pagination-detail">
          <span className="pagination-info">{`Showing ${current} to ${limit} of ${total} rows`}</span>
          <span className="page-list" >
            <span className="btn-group dropup">
              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
              	<span className="page-size">{itemsPerPage}</span>
              	<span className="caret"></span>
              </button>
              <ul className="dropdown-menu" role="menu">
                <li className="active"><a >{itemsPerPage}</a></li>
                <li><a>20</a></li>
                <li><a>30</a></li>
                <li><a>40</a></li>
              </ul>
            </span>
            records per page
          </span>
        </div>
        <div className="pull-right pagination" >
          <ul className="pagination">
            <li className={`page-first ${allowNavigation.get('prev') ? '' : 'disabled'} `}  
              onClick={allowNavigation.get('prev') ? this.props.actionFirst : null} ><ButtonAncor label='first' /></li>

            <li className={`page-pre  ${allowNavigation.get('prev') ? '' : 'disabled'}`} 
               onClick={ allowNavigation.get('prev') ? this.props.actionPrev : null}><ButtonAncor label='prev' /></li>
            
            <li className={`page-number active`}><ButtonAncor label={current} /></li>
            
            <li className={`page-next  ${allowNavigation.get('next') ? '' : 'disabled'}`}
               onClick={ allowNavigation.get('next') ? this.props.actionNext : null}><ButtonAncor label='next' /></li>
            
            <li className={`page-last  ${allowNavigation.get('next') ? '' : 'disabled'}`} 
               onClick={allowNavigation.get('next') ? this.props.actionLast : null}><ButtonAncor label='last' /></li> 
          </ul>
        </div>
      </div>
    );
  }  
}

export default Paginator