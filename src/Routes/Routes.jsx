import { createBrowserRouter } from "react-router";
import Roots from "../Layouts/Roots";
import Home from "../Pages/Home/Home";
import HelpCenter from "../Pages/HelpCenter/HelpCenter";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "/help-center",
        Component: HelpCenter,
      },
    ],
  },
]);
