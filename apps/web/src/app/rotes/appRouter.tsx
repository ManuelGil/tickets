import {
  createBrowserRouter
} from 'react-router-dom';
import PrivateWrapper from '../components/auth/PrivateWrapper';
import Dashboard from '../views/DashBoard';
import SignIn from '../views/SingIn';
import TicketCreation from '../views/TicketCreation';
import TicketDetails from '../views/TicketDetails';

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
    element: (
      <PrivateWrapper>
        <TicketCreation />
      </PrivateWrapper>
    ),
  },
  {
    path: '/ticket/:ticketId',
    element: (
      <PrivateWrapper>
        <TicketDetails />
      </PrivateWrapper>
    ),
  },
]);

export default router;
