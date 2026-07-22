import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <>
      <Header cart={props.cart}/>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
