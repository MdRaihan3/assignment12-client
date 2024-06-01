import { Outlet } from "react-router-dom";
import DashboardNavbar from "../pages/dashboard/DashboardNavbar/DashboardNavbar";

const Dashboard = () => {
    return (
        <div>
           <DashboardNavbar></DashboardNavbar>
           <div className=" flex">
            <div className=" w-64 min-h-screen p-4">navigation</div>
            <div className=" flex-1 p-9"><Outlet></Outlet>Outlet</div>
           </div>
            
        </div>
    );
};

export default Dashboard;