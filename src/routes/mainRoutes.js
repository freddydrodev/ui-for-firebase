import React from "react";

import LogWrapper from "../containers/LogWrapper/LogWrapper.js";

const routes = [
  {
    key: "App Pages",
    path: "/app",
    render: () => <p>App Render</p>
  },
  {
    key: "Log Pages",
    path: "*",
    component: LogWrapper
  }
];

export default routes;
