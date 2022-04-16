/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Product from "./product/Product";

const Home = () => {
  const dispatch = useDispatch();

  const { loading, products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h1> Loading... </h1>
      ) : (
        <>
          <h1 id="products_heading">Latest Products</h1>

          <section id="products" className="container mt-5">
            <div className="row">
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
