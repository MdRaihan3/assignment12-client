import { Navigate, useLocation } from "react-router-dom";
import useRole from "../useHooks/useRole";

const AdminRoute = ({children}) => {
    const location = useLocation()
    const [role, isLoading] = useRole()
    if (isLoading){ return <span className="loading loading-infinity loading-lg"></span>}
    if (role === 'admin'){ 
        console.log('admin route clear');
        return children}
    return <Navigate state={{from: location}} replace to={'/login'}></Navigate>
};

export default AdminRoute;