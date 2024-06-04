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

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
      children: [
        {
          path: 'workerHome',
          element: <WorkersHome></WorkersHome>
        },
        {
          path: 'taskCreatorHome',
          element: <TaskCreatorRoute><TaskCreatorHome></TaskCreatorHome></TaskCreatorRoute>
        },
        {
          path: 'addNewTask',
          element: <TaskCreatorRoute><AddNewTasks></AddNewTasks></TaskCreatorRoute>
        },
        {
          path: 'manageUsers',
          element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        }
      ]
    }
  ]);