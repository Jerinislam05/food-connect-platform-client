import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import AvailableFood from "./AvailableFood";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import AddFood from "../addfood/AddFood";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Community from "../bannerBtn/Community";
import Contact from "../bannerBtn/Contact";
import NotFoundPage from "../NotFoundPage";
import FoodDetails from "../pages/foodDetails/FoodDetails";
import ManageFood from "../manageFood/ManageFood";
import RequestFood from "../requestFood/requestFood";
import PopularDetails from "../popularDetails/PopularDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/available-food",
        element: <AvailableFood></AvailableFood>,
      },
      {
        path: "/community",
        element: <Community></Community>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: `/foods/:id`,
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) =>
          fetch(`https://food-connect-server.vercel.app/foods/${params.id}`),
      },
      {
        path: `/popular/:id`,
        element: <PopularDetails></PopularDetails>,
        loader: ({ params }) =>
          fetch(`https://food-connect-server.vercel.app/popular/${params.id}`),
      },
      {
        path: "/manage-food",
        element: (
          <PrivateRoute>
            <ManageFood></ManageFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/request-food",
        element: (
          <PrivateRoute>
            <RequestFood></RequestFood>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFoundPage></NotFoundPage>,
      },
    ],
  },
]);
export default router;
