import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/home/components/Home";
import Register from "./src/pages/auth/Register";
import Login from "./src/pages/auth/Login";


const router=createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    },

])
export default router