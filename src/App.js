import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Components/Login";

import Home from "./Components/Home";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
