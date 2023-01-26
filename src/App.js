// import './App.css';
import './assets/css/app.css'
import './assets/js/app.js'
import $ from 'jquery';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Rates from './Pages/Rates';
import Transactions from './Pages/TransactionHistory';
import Register from './Pages/Auth/Signup';
import Signin from './Pages/Auth/Signin';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
        </Switch>
        <Switch>
          <Route path='/rate'>
            <Rates />
          </Route>
        </Switch>
        <Switch>
          <Route path='/transactions'>
            <Transactions />
          </Route>
        </Switch>
        <Switch>
          <Route path='/register'>
            <Register />
          </Route>
        </Switch>
        <Switch>
          <Route path='/signin'>
            <Signin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
