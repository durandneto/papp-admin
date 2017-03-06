import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import store from './store'
import Topics from './container/Topics'
import Groups from './container/Groups'
import Reports from './container/Reports'
import Dashboard from './container/Dashboard'
import Users from './container/user/List'
import NewUser from './container/user/New'
import App from './container/App' 
import NoMatch from './container/NoMatch' 

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="users" component={Users} />
        <Route path="users/new" component={NewUser} />
        <Route path="topics" component={Topics} />
        <Route path="groups" component={Groups} />
        <Route path="reports" component={Reports} />
        <IndexRoute component={Dashboard}/>
      </Route>
      <Route path="*" component={NoMatch} />
    </Router>
  </Provider>
), document.getElementById('root'))