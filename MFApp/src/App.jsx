import React, { useState, useEffect, lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FoodList from "./components/FoodList.jsx";
import ProductList from "./components/ProductList.jsx";

import "./style.css";
import Layout from "./components/Layout.jsx";
import NotFound from "./components/NotFound.jsx";

const App = () => {
  const [cartItems, setCartItems] = useState([])
  const callbackParent = (cartDetails) => {
    console.log(cartDetails);
    const cart = [...cartItems, cartDetails]
    setCartItems(cart)
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout cart={cartItems}/>,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <FoodList callback={callbackParent} />,
        },
        {
          path: "/foodlist",
          element: <FoodList callback={callbackParent}/>,
        },
        {
          path: "/productlist",
          element: <ProductList />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
