import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../../Layout/MainLayout/MainLayout"
import Home from "../../Component/Pages/Home/Home/Home"
import Appointment from "../../Component/Pages/Appointment/Appointment/Appointment"
import LogIn from "../../Component/UserFile/Login/LogIn"
import SignUp from "../../Component/UserFile/SignUp/SignUp"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import DashBoardLayout from "../../Layout/DashBoardLayout/DashBoardLayout"
import AppointmentTable from "../../Component/Dashboard/Pages/AppointmentTable/AppointmentTable"
import Allusers from "../../Component/Dashboard/Pages/AllUsers/Allusers"


export const routers = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
               path:'/',
               element:<Home></Home>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ],
      
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<AppointmentTable></AppointmentTable>  
            },
            {
                path:'/dashboard/allusers',
                element:<Allusers></Allusers> 
            }
        ]
       },
])