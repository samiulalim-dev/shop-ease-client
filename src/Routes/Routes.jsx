import { createBrowserRouter } from "react-router";
import Roots from "../Layouts/Roots";
import Home from "../Pages/Home/Home";
import HelpCenter from "../Pages/HelpCenter/HelpCenter";
import AboutUs from "../Pages/AboutUs/AboutUs";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ErrorPage from "../Pages/Error/ErrorPage";
import BecomeSeller from "../Pages/BecomeSeller/BecomeSeller";
import React from "react";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout/DashboardLayout";
import ManageUser from "../Pages/Dashboard/AdminDashboard/ManageUser/ManageUser";
import AdminPrivateRoute from "../PrivateRoute/AdminPrivateRoute/AdminPrivateRoute";
import ForbiddenPage from "../Pages/Forbidden/ForbiddenPage";
import Search from "../Shared/Search/Search";
import MobileSearchBar from "../Shared/MobileSearchBar/MobileSearchBar";
import SearchCheckingRoute from "../PrivateRoute/SearchCheckingRoute/SearchCheckingRoute";
import MyOrders from "../Pages/Dashboard/UserDashboard/MyOrders/MyOrders";
import UserPrivateRoute from "../PrivateRoute/UserPrivateRoute/UserPrivateRoute";
import SellerPrivateRoute from "../PrivateRoute/SellerPrivateRoute/SellerPrivateRoute";
import AddProduct from "../Pages/Dashboard/SellerDashboard/AddProducts/AddProduct";

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
      {
        path: "/forbidden",
        Component: ForbiddenPage,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout></DashboardLayout>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manage-user",
        element: (
          <AdminPrivateRoute>
            <ManageUser></ManageUser>
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <SellerPrivateRoute>
            <AddProduct></AddProduct>
          </SellerPrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/search",
    element: (
      <SearchCheckingRoute>
        <MobileSearchBar></MobileSearchBar>
      </SearchCheckingRoute>
    ),
  },
]);
