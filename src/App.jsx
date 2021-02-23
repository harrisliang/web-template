/** @jsxImportSource @emotion/react */
import { Component, Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './Common.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route path='/' exact render={() => <Redirect to='/home' />} />

          {/* Load Page Component use require. */}
          <Route path='/home' exact component={require('./pages/Home').Home} />
        </Router>
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app-container'));
