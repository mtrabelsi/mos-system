import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import List from './pages/List'
import EditItem from './pages/Edit'
//import conf from './config.json'

//const { itemsCountPerPage } = conf
function Index(props) {
  return (<React.StrictMode>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
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
