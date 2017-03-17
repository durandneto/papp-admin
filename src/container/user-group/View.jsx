import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Alert, FormGroup, ControlLabel, FormControl, HelpBlock, Well } from 'react-bootstrap'

import * as Actions from './../../actions'
import * as TopicActions from './../../actions/topic'
import TopicForm from './../../organisms/forms/Topic'


import Home from './../../pages/Home'

class NewTopic extends Component {

  componentWillMount() {
    this.props.hide_message()
  }

  render() {
  	return (
  		<Home
  			header={this.props.header}
  			show_mobile_menu={this.props.show_mobile_menu} >
        <TopicForm
          reducer={this.props.ListTopics}
          
          row={this.props.ListTopics.get('selectedRow')}
          status={this.props.ListTopics.get('status')}

          hide_message={this.props.hide_message}
          save={this.props.select.bind(this)}
          set_page_type={this.props.set_page_type}
          submit={this.props.update.bind(this)}
          remove={this.props.remove.bind(this)}
         />

        </Home>
  	)
  }
}



function mapStateToProps(state) {
  return {
    header : state.header
    , ListTopics: state.ListTopics
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign(Actions, TopicActions) , dispatch )
}

export { NewTopic }
export default connect(mapStateToProps, mapDispatchToProps)(NewTopic)