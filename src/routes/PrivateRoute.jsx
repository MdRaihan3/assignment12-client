import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../useHooks/useAuth";

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useAuth()
    if (loading) return <span className="loading loading-infinity loading-lg"></span>
    if (user) return children
    return <Navigate state={{from: location}} replace to={'/login'}></Navigate>
};

export default PrivateRoute;