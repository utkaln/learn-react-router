import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const NestedHome = () => {
  return (
    <>
      <Navbar />
      <section className="section">
        <Outlet />
      </section>
    </>
  );
};

export default NestedHome;
