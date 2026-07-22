import React, { useState, useEffect, lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import FoodList from "./components/FoodList.jsx";
import ProductList from "./components/ProductList.jsx";

import "./style.css";

const App = () => {
  const router = createBrowserRouter([
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
  ]);
  return (
    <RouterProvider router={router}>
      <Header />
      <FoodList />
      <ProductList />
      <Footer />
    </RouterProvider>
  );
};

export default App;
