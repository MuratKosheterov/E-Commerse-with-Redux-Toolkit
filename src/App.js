import React, { lazy, Suspense } from "react";
import {  useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOut from "./components.js/CheckOut";
import Navbar from "./components.js/Navbar";
import Sidebar from "./components.js/Sidebar";
import Home from "./pages/Home";
import ProductID from "./pages/ProductID";
const LazyProducts = lazy(() => import("../src/pages/Products"));

function App() {
  const { isOpen } = useSelector((state) => state.sidebar);
  console.log('rendered');
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="shop"
            element={
              <Suspense fallback="Please wait, is loading...">
                <LazyProducts />
              </Suspense>
            }
          />
          <Route path="product/:id" element={<ProductID />} />
          <Route path="checkout" element={<CheckOut/> } />
        </Routes>
          
        {isOpen && <Sidebar />}
      </BrowserRouter>
    </div>
  );
}

export default App;
