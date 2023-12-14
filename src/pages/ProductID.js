import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import data from "../data";
import { addToCart } from "../redux/cartSlice";

function ProductID() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = data.find((item) => {
    return item.id === parseInt(id);
  });

  const { image, price, title, description } = product;

  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row ">
          <div className="col-6 ">
            <img className=" w-50 img-fluid " src={image} alt="" />
          </div>
          <div className="col-6">
            <h1>{title}</h1>
            <div className=" d-flex  align-items-center  justify-content-evenly ">
              <Link to={-1} className="btn btn-secondary">
                Назад
              </Link>
              <p className=" mt-5 mb-5 "> Price: ${price}</p>
              <button
                onClick={() => dispatch(addToCart(product))}
                className=" btn  btn-secondary"
              >
                Покупать
              </button>
            </div>
            <h2 className=" mt-5">{description}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductID;