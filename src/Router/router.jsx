import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import CheckOutForm from "../pages/CheckOutForm/CheckOutForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/checkOutForm/:id",
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`),
                element: <CheckOutForm/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/login",
                element: <Login/>
            }
        ]
    }
])

export default router