import { Navigate } from "react-router-dom";
import useRole from "../useHooks/useRole";

const AdminRoute = ({children}) => {
    const [role, isLoading] = useRole()
    if (isLoading){ return <span className="loading loading-infinity loading-lg"></span>}
    if (role === 'admin'){ 
        console.log('admin route clear');
        return children}
    return <Navigate to={'/dashboard'}></Navigate>
};

export default AdminRoute;