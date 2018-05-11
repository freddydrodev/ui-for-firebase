import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import routes from "../../routes/mainRoutes.js";
import "../../less/main.less";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>{routes.map((e) => <Route {...e} />)}</Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
