import React from 'react';
import Navigation from '../Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from '../Landing';
import Home from '../Home';
import Account from '../Account';
import SignIn from '../SignIn';
import Recipient from '../Recipient';
import Supplier from '../Supplier';
import SignUp from '../SignUp';
import Loader from '../Loader';

import * as ROUTES from '../../constants/routes';

function App() {
  return (
    <Router>
      <Navigation />
      <div className='App container'>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.ACCOUNT} component={Account} />
          <Route path={ROUTES.SIGNIN} component={SignIn} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.RECIPIENT} component={Recipient} />
          <Route path={ROUTES.SUPPLIER} component={Supplier} />
          <Route path={ROUTES.LOADER} component={Loader} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
