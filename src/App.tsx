import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LOGIN, USER } from "./sharedComponents/helpers/variables";
import Login from "./features/Login/index";
import path from "path";
import { element } from "prop-types";
import User from "./features/User";

function App() {
  const router = createBrowserRouter([
    { path: LOGIN, element: <Login /> },
    { path: USER, element: <User/> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
