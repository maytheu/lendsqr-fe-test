import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LOGIN } from "./sharedComponents/helpers/variables";
import Login from "./features/Login/index";

function App() {
  const router = createBrowserRouter([{ path: LOGIN, element:<Login/>, }]);
  return <RouterProvider router={router} />;
}

export default App;
