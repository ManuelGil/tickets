import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouteObject,
  createBrowserRouter,
  IndexRouteObject,
  Route,
  Navigate,
} from 'react-router-dom';
import SignIn from '../views/SingIn';
import Dashboard from '../views/DashBoard';
import TicketDetails from '../views/TicketDetails';
import { useSelector } from 'react-redux';
import { userSketch } from '../states/userSlide';
import PrivateWrapper from '../components/auth/PrivateWrapper';
import TicketCreation from '../views/TicketCreation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/dashboard',
    element: (
      <PrivateWrapper>
        <Dashboard />
      </PrivateWrapper>
    ),
    index: true,
  },
  {
    path: '/ticket/creation',
    element: <TicketCreation />,
  },
  {
    path: '/ticket/:ticketId',
    element: <TicketDetails />,
  },
]);

export default router;
