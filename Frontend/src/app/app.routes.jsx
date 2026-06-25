import {createBrowserRouter} from "react-router";
import Register from "../features/auth/pages/Register";

export const routes = createBrowserRouter([
    {
        path:"/",
        element:<h1 className="text-bold bg-amber-400">Hello form Snitch</h1>
    },
    {
        path:"/register",
        element:<Register/>
    }


])