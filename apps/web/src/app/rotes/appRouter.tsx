import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouteObject,
  createBrowserRouter,
  IndexRouteObject,
  Route,
  Navigate
} from "react-router-dom";
import SignIn from "../views/SingIn";
import Dashboard from "../views/DashBoard";
import Ticket from "../views/TicketView";
import { useSelector } from "react-redux";
import { userSketch } from "../states/userSlide";
import PrivateWrapper from "../components/auth/PrivateWrapper";

const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <SignIn/>,
  },
  {
    path:"/dashboard",
    element:
      <PrivateWrapper>
        <Dashboard/>
      </PrivateWrapper>,
    index:true
  } ,
  {
    path:"/ticket/:ticketId",
    element: <Ticket />,
  },
]);

export default router