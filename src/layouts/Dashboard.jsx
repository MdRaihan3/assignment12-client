import { Outlet } from "react-router-dom";
import DashboardNavbar from "../pages/dashboard/DashboardNavbar/DashboardNavbar";

const Dashboard = () => {
    return (
        <div>
           <DashboardNavbar></DashboardNavbar>
           <div className=" flex">
            <div className=" p-4">navigation</div>
            <div className=""><Outlet></Outlet>Outlet</div>
           </div>
            
        </div>
    );
};

export default Dashboard;