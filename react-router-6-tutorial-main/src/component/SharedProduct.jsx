import React from "react";
import { Outlet, Link } from "react-router-dom";

const SharedProduct = () => {
  return (
    //button
    <section className="section">
      <Outlet />
      <Link to="/products">
        <button className="btn">Back to all Products</button>
      </Link>
    </section>
  );
};

export default SharedProduct;
