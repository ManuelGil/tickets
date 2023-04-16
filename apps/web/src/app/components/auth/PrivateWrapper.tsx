import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = useSelector((state: any) => state.user);
  return user.value.token ? children : <Navigate to="/" replace />;
};

export default PrivateWrapper;
