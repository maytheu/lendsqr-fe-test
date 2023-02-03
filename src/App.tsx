import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LOGIN } from "./helpers/variables";
import Login from "./features/Login/Login";

function App() {
  const router = createBrowserRouter([{ path: LOGIN, element:<Login/>, }]);
  return <RouterProvider router={router} />;
}

export default App;
