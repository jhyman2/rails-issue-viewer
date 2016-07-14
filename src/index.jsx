import React    from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

// Containers
import Issues from './issues/container.jsx';
import Issue  from './issue/container.jsx';
import App    from './app/app.jsx';

// Workaround for a bug in react 15 loading remote images
// @ref - https://github.com/facebook/react/issues/6472
const root = document.createElement('div');
root.id    = 'app-container';
document.body.appendChild(root);

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Issues} />
      <Route path="/:pageNum" component={Issues} />
      <Route path="/issue/:id" component={Issue} />
    </Route>
  </Router>
), root);