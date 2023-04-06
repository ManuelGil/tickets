import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
    const user = useSelector((state:any) => state.user);
    return !!user.value.token ? children : <Navigate to="/" replace />;
}

export default PrivateWrapper