import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

import Home from './pages/Home'
import romcom from './pages/romcom'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Route exact path = '/' component = {Home} />
              <Route exact path = '/romcom' component = {romcom} />
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
