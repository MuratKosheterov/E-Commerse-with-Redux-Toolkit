import React from "react";
import { useState } from "react";
import Product from "../components.js/Product";
import data from "../data";

function Products() {
  const [filtered, setFiltered] = useState(data);

  function setFilteredProducts(category) {
    const newFilter = data.filter((item) => item.category === category);
    setFiltered(newFilter);
  }

  return (
    <div className="pt-5 mt-4">
      <div className="container">
        <div className="row">
          <h1 className="text-center py-3 shadow-lg text-uppercase ">Our Products</h1>
          <div className=" d-flex  justify-content-center my-3">
            <button
              onClick={() => setFiltered(data)}
              className="btn btn-secondary mx-1 text-uppercase "
            >
              all products
            </button>
            <button
              onClick={() => setFilteredProducts("men's clothing")}
              className="btn btn-secondary mx-1 text-uppercase "
            >
              men's products
            </button>
            <button
              onClick={() => setFilteredProducts("women's clothing")}
              className="btn btn-secondary mx-1 text-uppercase "
            >
              women's products
            </button>
            <button
              onClick={() => setFilteredProducts("electronics")}
              className="btn btn-secondary mx-1 text-uppercase "
            >
              electronics
            </button>
            <button
              onClick={() => setFilteredProducts("jewelery")}
              className="btn btn-secondary mx-1 text-uppercase "
            >
              jewelery
            </button>
          </div>

          <div className=" d-flex flex-wrap  justify-content-between w-100 ">
            {filtered.map((item) => {
              return <Product key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
