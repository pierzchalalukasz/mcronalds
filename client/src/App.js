import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/home/home';
import CreateOrderPage from './pages/createOrder/createOrder';
import ProductDetailsPage from './pages/productDetails/productDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error404Page from './pages/404/404';


function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/create-order" component={CreateOrderPage} exact/>
            <Route path="/product-details/:id" component={ProductDetailsPage} exact/>
            <Route component={Error404Page} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
