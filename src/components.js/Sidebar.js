import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  increase,
  decreament,
  reset,
} from "../redux/cartSlice";
import { open } from "../redux/sidebarSlice";

function Sidebar() {
  let [total, setTotal] = useState(0);
  console.log(setTotal);

  const { cartItems } = useSelector((store) => store.cartAdd);
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.cartAdd);

  cartItems.forEach((item) => {
    total += item.amount * item.price;
  });

  return (
    <div>
      <div className="offcanvas offcanvas-end show" id="offcanvas">
        <div className="offcanvas-header border-bottom border-3">
          <h5 className="offcanvas-title" id="offcanvasLabel">
            In your cart {amount} products
          </h5>
          <button
            onClick={() => dispatch(open())}
            type="button"
            className="btn-close"
          />
        </div>
        <div className="offcanvas-body">
          {cartItems.map((item) => {
            return (
              <div key={item.id} className="container">
                <div className="row mb-2 border-bottom  py-2 d-flex  justify-content-between align-items-center  shadow  ">
                  <div className="col-4">
                    <img src={item.image} className=" w-75 " alt="" />
                  </div>
                  <div className="col-5">
                    <div className="  ">
                      <div className="d-flex  justify-content-between  align-items-center">
                        <button
                          onClick={() => dispatch(increase(item.id))}
                          className=" bg-dark text-light px-2 border-0 me-2 rounded-1 "
                        >
                          +
                        </button>
                        <p className=" m-auto ">{item.amount}</p>
                        <button
                          onClick={() => dispatch(decreament(item.id))}
                          className=" bg-dark text-light px-2 rounded-1 border-0 ms-2 "
                        >
                          -
                        </button>
                      </div>
                      <p className="mt-3">Price: $ {item.price}</p>
                    </div>
                  </div>

                  <div
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="col-3 text-center "
                  >
                    <i className="bi bi-x-lg  "></i>
                    <div className="col mt-3  d-flex align-items-center text-center  flex-column  ">
                      $: {(item.amount * item.price).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="sidebar-footer d-flex  justify-content-between align-items-center pt-3 border-top  border-3   ">
            <div>Общий итог: $ {total.toFixed(2)} </div>
            <button
              onClick={() => dispatch(reset())}
              className="btn btn-danger"
            >
              Очистить
            </button>
          </div>
          <Link to='checkout' className="btn btn-primary w-100 mt-3">ЗАКАЗАТЬ</Link>    
        </div>
        
      </div>
      
    </div>
  );
}

export default Sidebar;
