import { Navigate, Outlet } from 'react-router-dom';
import authInstance from '../auth';

const Auth = () =>
authInstance.isTokenExpired()
    ? <Navigate to="/signin" replace />
    : <Outlet />

export default Auth;
