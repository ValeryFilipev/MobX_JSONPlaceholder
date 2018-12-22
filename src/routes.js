import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import PostsPage from "./containers/PostPage";
import ViewPage from "./containers/ViewPage";
import UserPage from "./containers/UserPage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={PostsPage} />
          <Route exact path="/post/:id" component={ViewPage} />
          <Route exact path="/user/:id" component={UserPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
