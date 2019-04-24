import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// local components
import Home from "./pages/Home";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact path='/'
              component={Home}
            />
            <Route
              exact path='/Home'
              component={Home}
            />
          </Switch>
          <Route
            exact path='/Search'
            component={Search}
          />
          <Route
            exact path='/Saved'
            component={Saved}
          />
         
        </div>
      </Router>
    );
  }
}

export default App;

