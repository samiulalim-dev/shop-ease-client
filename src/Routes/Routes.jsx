import { createBrowserRouter } from "react-router";
import Roots from "../Layouts/Roots";
import Home from "../Pages/Home/Home";
import HelpCenter from "../Pages/HelpCenter/HelpCenter";
import AboutUs from "../Pages/AboutUs/AboutUs";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ErrorPage from "../Pages/Error/ErrorPage";
import BecomeSeller from "../Pages/BecomeSeller/BecomeSeller";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "/becomeSeller",
        Component: BecomeSeller,
      },
      {
        path: "/aboutUs",
        Component: AboutUs,
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/register",
        Component: RegisterPage,
      },
    ],
  },
]);
