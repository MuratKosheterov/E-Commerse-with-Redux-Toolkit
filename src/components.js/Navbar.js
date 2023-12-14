import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { open } from "../redux/sidebarSlice";

function Navbar() {
  const { amount } = useSelector((state) => state.cartAdd);

  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow  fixed-top ">
      <div className="container">
        <Link className="navbar-brand fw-bolder  text-uppercase " to="#">
          Store Commerse
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item ">
              <NavLink className='nav-link' to='/'>
                  Home
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className='nav-link' to='shop'>
                  Shop
              </NavLink>
            </li>
            
          </ul>
          <li className="nav-item d-flex position-relative  ">
              <div
                onClick={() => dispatch(open())}
                className="nav-link text-black   px-3"
              >
                <i className="bi bi-bag fs-4"></i>
              </div>
              <p className=" ms-4 position-absolute  end-0  bg-dark text-light px-1 rounded-pill  ">
                {amount}
              </p>
            </li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
