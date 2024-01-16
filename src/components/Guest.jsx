import { Navigate, Outlet } from 'react-router-dom';
import authInstance from '../auth';

const Guest = () =>
authInstance.isTokenExpired()
    ? <Outlet />
    : <Navigate to="/" replace />;

export default Guest;
