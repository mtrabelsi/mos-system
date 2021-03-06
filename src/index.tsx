import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import List from './pages/List'
import EditItem from './pages/Edit'
import './index.scss'
import { backgroundColor } from './components/Global';

function Index(props) {
  return (<React.StrictMode>
    <Router>
      <div style={{ backgroundColor: backgroundColor }}>
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/edit/:incidentId" component={EditItem} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
