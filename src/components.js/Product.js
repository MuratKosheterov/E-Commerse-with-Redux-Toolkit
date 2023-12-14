import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

function Product({ item }) {
  const dispatch = useDispatch();
  const { image, price, category, id } = item;

  return (
      <div className="card shadow p-2 cardd mb-5 align-items-center">
        <Link
          to={`product/${id}`}
          className="  position-absolute  end-0  bg-secondary top-0 rounded-3 text-dark fs-6 p-2"
        >
          <i className="bi bi-eye"></i>
        </Link>
        <img src={image} className="card-img-top img-product m-2" alt="..." />
        <div className="card-body">
          <span className="card-title ">
            <span className=" fw-bolder text-warning text-center">Category: </span>
            {category}
          </span>
          <p className="card-text ">
            <span className=" fw-bolder text-warning ">Price: </span>$ {price}
          </p>
          <button
            onClick={() => dispatch(addToCart(item))}
            className="btn btn-dark w-100"
          >
            Покупать
          </button>
        </div>
      </div>
  );
}

export default Product;
