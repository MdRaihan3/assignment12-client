import { NavLink, Outlet } from "react-router-dom";
import DashboardNavbar from "../pages/dashboard/DashboardNavbar/DashboardNavbar";
import { FaHome } from "react-icons/fa";
import Footer from "../pages/Main/Home/Footer/Footer";
import useRole from "../useHooks/useRole";

const Dashboard = () => {
    const [role] = useRole()
    return (
        <div>
            <DashboardNavbar></DashboardNavbar>
            <div className=" flex">
                <div className=" md:w-64 min-h-screen bg-red-400">
                    <ul className="menu p-4">
                        {role === 'admin' &&
                            <>
                                <li>
                                    <NavLink to='/dashboard/adminHome'>
                                        <FaHome></FaHome>Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageUsers'>
                                        <FaHome></FaHome>Manage Users</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageTask'>
                                        <FaHome></FaHome>Manage Task</NavLink>
                                </li>
                            </>
                        }
                        {role === 'taskCreator' &&
                            <>

                        <li>
                            <NavLink to='/dashboard/taskCreatorHome'>
                                <FaHome></FaHome>Task Creator Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/addNewTask'>
                                <FaHome></FaHome>Add New Task</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/myTasks'>
                                <FaHome></FaHome>My Tasks</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/purchaseCoin'>
                                <FaHome></FaHome>Purchase Coin</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/paymentHistory'>
                                <FaHome></FaHome>Payment History</NavLink>
                        </li>
                        </>
                        }
                        {
                            role === 'worker' &&
                            <>
                                <li>
                                    <NavLink to='/dashboard/workerHome'>
                                        <FaHome></FaHome>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/taskList'>
                                        <FaHome></FaHome>Task List</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/mySubmission'>
                                        <FaHome></FaHome>My Submission</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/withdrawals'>
                                        <FaHome></FaHome>Withdrawals</NavLink>
                                </li>
                            </>
                        }
                    </ul>
                </div>
                <div className=" flex-1 p-9">
                    hi
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;