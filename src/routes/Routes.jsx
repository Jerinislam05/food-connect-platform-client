import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import AvailableFood from "./AvailableFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/available-foods',
            element: <AvailableFood></AvailableFood>
        }
    ]
  },
]);
export default router;