import { Navigate } from "react-router-dom";
import useRole from "../useHooks/useRole";

const TaskCreatorRoute = ({children}) => {
    const [role, isLoading] = useRole()
    if (isLoading){ return <span className="loading loading-infinity loading-lg"></span>}
    if (role === 'taskCreator'){ return children}
    return <Navigate state={{from: location}} replace to={'/login'}></Navigate>
};

export default TaskCreatorRoute;