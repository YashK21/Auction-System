import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Login, Instruction, Auction, UserLayout, Register } from "../../comp/index.jsx";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/instructions",
    element: <Instruction />,
  },
  {
    path: "/auction",
    element: <UserLayout />,
    children: [
      {
        path: ":teamId",
        element: <Auction />,
      },
    ],
  },
]);
export default Routes;
