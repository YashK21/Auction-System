import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";

import Routes from "./comp/Routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={Routes} />
);
