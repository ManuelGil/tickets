import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouteObject,
  createBrowserRouter,
  IndexRouteObject,
  Route
} from "react-router-dom";
import SignIn from "../views/SingIn";
import Dashboard from "../views/DashBoard/Dashboard";

<Route
  // this path will match URLs like
  // - /teams/hotspur
  // - /teams/real
  path="/teams/:teamId"
  // the matching param will be available to the loader
  loader={({ params }) => {
    console.log(params.teamId); // "hotspur"
  }}
 
  element={<SignIn/>}
/>;
const test : IndexRouteObject={
  path:"/teams/:teamId",
  index:true
}

const router = createBrowserRouter(
  [
  {
    path:"/teams/:teamId"
    //element={<Ticket />}
  },
  test,
  {
    path: "/",
    element: <SignIn/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  }
  
]);

export default router