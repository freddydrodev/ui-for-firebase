import React from "react";

import Registration from "../pages/Registration/Registration.js";
import Login from "../pages/Login/Login.js";

const routes = [
  {
    key: "Registration",
    path: "/registration",
    exact: true,
    component: Registration
  },
  {
    key: "Login",
    path: "/",
    exact: true,
    component: Login
  },
  {
    key: "404",
    path: "*",
    render: () => <h1>404 Page Not Found</h1>
  },

];

export default routes;
