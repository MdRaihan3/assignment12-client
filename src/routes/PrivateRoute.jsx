import { Navigate } from "react-router-dom";
import useAuth from "../useHooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    if (loading) return <span className="loading loading-infinity loading-lg"></span>
    if (user) return children
    return <Navigate to={'/'}></Navigate>
};

export default PrivateRoute;