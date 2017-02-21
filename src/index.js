import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'


import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
)(createStore)

let store = createStoreWithMiddleware(reducer)

import Topics from './container/Topics'
import Groups from './container/Groups'
import Reports from './container/Reports'
import Dashboard from './container/Dashboard'
import Users from './container/Users'
import App from './container/App' 
import NoMatch from './container/NoMatch' 

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="users" component={Users} />
        <Route path="topics" component={Topics} />
        <Route path="groups" component={Groups} />
        <Route path="reports" component={Reports} />
        <IndexRoute component={Dashboard}/>
      </Route>
      <Route path="*" component={NoMatch} />
    </Router>
  </Provider>
), document.getElementById('root'))