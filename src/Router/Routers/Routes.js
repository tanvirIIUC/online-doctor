import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivetRouter from "../PrivetRouter/PrivetRouter";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/Register',
            element:<Register></Register>
        },
        {
            path:'/appointment',
            element:<Appointment></Appointment>
        }
      ]

    },
    {
      path:'/dashboard',
      element:<PrivetRouter><Dashboard></Dashboard></PrivetRouter>
    }
  ]);

  export default router;