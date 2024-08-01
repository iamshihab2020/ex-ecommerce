import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Components/Shared/Error/ErrorPage";
import Home from "../Components/Pages/Home/Home/Home";
import ProductDetails from "../Components/Pages/Home/FlashSales/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: () => fetch("/products.json").then((res) => res.json()), 
      },
      {
        path: "/bestSales/:id",
        element: <ProductDetails />,
        loader: () => fetch("/bestSales.json").then((res) => res.json()), 
      },
    ],
  },
]);

export default router;
