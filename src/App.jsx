import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Landing, About, Products, SingleProduct, Cart, Checkout, Orders, Login, Register, Error } from "./pages/index";
import { ErrorElement } from "./components";

// loaders
import { loader as landingLoader } from './pages/Landing'
import { loader as productsLoader } from './pages/Products'
import { loader as singleProductLoader } from './pages/SingleProduct'


// actions

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement />,
          loader: landingLoader
        },
        {
          path: "products",
          element: <Products />,
          loader: productsLoader,
        },
        {
          path: "products/:id",
          element: <SingleProduct />,
          loader: singleProductLoader
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
