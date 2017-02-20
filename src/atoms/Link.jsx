/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './../actions'

class Link extends Component {

  constructor(props) {
    super(props);

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);

    this.state = {
      class: 'normal'
    };
  }

  _onMouseEnter() {
    this.setState({class: 'hovered'});
  }

  _onMouseLeave() {
    this.setState({class: 'normal'});
  }

  render() {

    let { change_name, header } = this.props

    return ( 
        <a
          className={this.state.class}
          href={this.props.page || '#'}
          onClick={change_name.bind(this,' | Durand',35)}
          onMouseEnter={this._onMouseEnter}
          onMouseLeave={this._onMouseLeave}>
          {this.props.children} { header.get('name') } { header.get('age') }
        </a> 
    );
  }

}

function mapStateToProps(state) {
  return {
    header : state.header
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export { Link }
export default connect(mapStateToProps, mapDispatchToProps)(Link)