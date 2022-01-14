import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';
import Products from "./pages/product/Products";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home";

import { GlobalStyle } from "./styles";


ReactDOM.render(
  <BrowserRouter>

    <Header />
    

    <GlobalStyle />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="contact" element={<Contact />} />
    </Routes>

    <Footer />

  </BrowserRouter>,
  document.getElementById('root')
);
