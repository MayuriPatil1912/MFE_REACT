import React, { useState, useEffect, lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FoodList from "./components/FoodList.jsx";
import ProductList from "./components/ProductList.jsx";

import "./style.css";
import Layout from "./components/Layout.jsx";
import NotFound from "./components/NotFound.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement:<NotFound />,
      children: [
        {
          path: "/",
          element: <FoodList />,
        },
        {
          path: "/foodlist",
          element: <FoodList />,
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
