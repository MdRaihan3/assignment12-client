import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Main/Home/Home/Home";
import Login from "../pages/Main/Login/Login";
import Register from "../pages/Main/Home/Register/Register";
import Dashboard from "../layouts/Dashboard";
import WorkersHome from "../pages/dashboard/worker/WorkerHome/WorkersHome";
import AddNewTasks from "../pages/dashboard/taskCreator/AddNewTask/AddNewTasks";
import ManageUsers from "../pages/dashboard/Admin/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import TaskCreatorRoute from "./TaskCreatorRoute";
import TaskCreatorHome from "../pages/dashboard/taskCreator/TaskCreatorHome/TaskCreatorHome";
import MyTasks from "../pages/dashboard/taskCreator/MyTasks/MyTasks";
import UpdateMyTask from "../pages/dashboard/taskCreator/UpdateMyTask/UpdateMyTask";
import PurchaseCoin from "../pages/dashboard/taskCreator/PurchaseCoin/PurchaseCoin";
import Payment from "../pages/dashboard/taskCreator/PurchaseCoin/Payment";
import PaymentHistory from "../pages/dashboard/taskCreator/PaymentHistory/PaymentHistory";
import ManageTasks from "../pages/dashboard/Admin/MangeTasks/ManageTasks";
import AdminHome from "../pages/dashboard/Admin/AdminHome/AdminHome";
import PrivateRoute from "./PrivateRoute";
import WorkerTaskList from "../pages/dashboard/worker/TaskList/WorkerTaskList";
import TaskDetail from "../pages/dashboard/worker/TaskDetail/TaskDetail";
import MySubmission from "../pages/dashboard/worker/MySubmission/MySubmission";
import WithDrawalForm from "../pages/dashboard/worker/WithDrawalForm/WithDrawalForm";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        // worker sfsad
        {
          path: 'workerHome',
          element: <PrivateRoute><WorkersHome></WorkersHome></PrivateRoute>
        },
        {
          path: 'taskList',
          element: <PrivateRoute><WorkerTaskList></WorkerTaskList></PrivateRoute>
        },
        {
          path: 'taskDetail/:id',
          element: <PrivateRoute><TaskDetail></TaskDetail></PrivateRoute>,
          loader: ({params}) =>fetch(`${import.meta.env.VITE_SERVER_APi}/task/${params?.id}`)
        },
        {
          path: 'mySubmission',
          element: <PrivateRoute><MySubmission></MySubmission></PrivateRoute>
        },
        {
          path: 'withdrawals',
          element: <PrivateRoute><WithDrawalForm></WithDrawalForm></PrivateRoute>
        },
        // task creator
        {
          path: 'taskCreatorHome',
          element: <TaskCreatorRoute><TaskCreatorHome></TaskCreatorHome></TaskCreatorRoute>
        },
        {
          path: 'addNewTask',
          element: <TaskCreatorRoute><AddNewTasks></AddNewTasks></TaskCreatorRoute>
        },
        {
          path: 'myTasks',
          element: <TaskCreatorRoute><MyTasks></MyTasks></TaskCreatorRoute>
        },
        {
          path: 'updateMyTask/:id',
          element: <TaskCreatorRoute><UpdateMyTask></UpdateMyTask></TaskCreatorRoute>,
          loader: ({params}) =>fetch(`${import.meta.env.VITE_SERVER_APi}/task/${params?.id}`)
        },
        {
          path: 'purchaseCoin',
          element: <TaskCreatorRoute><PurchaseCoin></PurchaseCoin></TaskCreatorRoute>
        },
        {
          path: 'payment/:prices',
          element: <TaskCreatorRoute><Payment></Payment></TaskCreatorRoute>
        },
        {
          path: 'paymentHistory',
          element: <TaskCreatorRoute><PaymentHistory></PaymentHistory></TaskCreatorRoute>
        },
        // admin
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'manageUsers',
          element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path: 'manageTask',
          element: <AdminRoute><ManageTasks></ManageTasks></AdminRoute>
        }
      ]
    }
  ]);