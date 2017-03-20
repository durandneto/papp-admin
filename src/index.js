import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import store from './store'

import Topics from './container/topic/List'
import NewTopic from './container/topic/New'
import ViewTopic from './container/topic/View'

import UserGroup from './container/user-group/List'
import JoinUserGroup from './container/user-group/Join'
import NewUserGroup from './container/user-group/New'
import ViewUserGroup from './container/user-group/View'



import Reports from './container/Reports'
import Dashboard from './container/Dashboard'

import Languages from './container/language/List'
import NewLanguage from './container/language/New'
import ViewLanguage from './container/language/View'

import Users from './container/user/List'
import NewUser from './container/user/New'
import ViewUser from './container/user/View'

import App from './container/App' 
import NoMatch from './container/NoMatch' 

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>

        <Route path="users" component={Users} />
        <Route path="users/new" component={NewUser} />
        <Route path="users/:user_id" component={ViewUser} />

        <Route path="topics" component={Topics} />
        <Route path="topics/new" component={NewTopic} />
        <Route path="topics/:id" component={ViewTopic} />


        <Route path="groups" component={UserGroup} />
        <Route path="groups/new" component={NewUserGroup} />
        <Route path="groups/:id" component={ViewUserGroup} />
        <Route path="groups/:id/join" component={JoinUserGroup} />



        <Route path="reports" component={Reports} />

        <Route path="languages" component={Languages} />
        <Route path="languages/new" component={NewLanguage} />
        <Route path="languages/:id" component={ViewLanguage} />

        <IndexRoute component={Dashboard}/>
      </Route>
      <Route path="*" component={NoMatch} />
    </Router>
  </Provider>
), document.getElementById('root'))