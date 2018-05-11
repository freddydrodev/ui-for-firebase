import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Row, Col } from "antd";

import routes from "../../routes/logRoutes.js";
import './LogWrapper.less';

class LogWrapper extends Component {
  render() {
    return (
      <Row style={{ height: "100vh" }} type="flex" justify="center" align="middle">
        <Col className="signForm">
          <Switch>{routes.map((e) => <Route {...e} />)}</Switch>
        </Col>
      </Row>
    );
  }
}

export default LogWrapper;
