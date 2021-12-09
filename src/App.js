import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Components/Login";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
