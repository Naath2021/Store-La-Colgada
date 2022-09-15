import React from 'react'
import "../src/scss/app.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/home/Home';
import Products from "./components/pages/products/Products"
import ProductDetailContainer from './components/pages/products/productDetail/ProductDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/item/:index" element={<ProductDetailContainer />} />
        {/* <Route path="/contacto" element={<Contact />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/login" element={<LogIn />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;