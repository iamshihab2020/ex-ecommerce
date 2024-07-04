import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Components/Shared/Error/ErrorPage";
import Home from "../Components/Pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/> ,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
