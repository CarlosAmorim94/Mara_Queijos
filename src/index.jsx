import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';
import Products from "./pages/product";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Cheese from './pages/product/cheese';
import Candy from './pages/product/candy';
import Wine from './pages/product/wine';

import { GlobalStyle } from "./styles";



ReactDOM.render(

  <BrowserRouter>

    <Header/>
    

    <GlobalStyle />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="contact" element={<Contact />} />
      <Route path="cheese" element={<Cheese />} />
      <Route path="wine" element={<Wine />} />
      <Route path="candy" element={<Candy />} />
    </Routes>

    <Footer />

  </BrowserRouter>,
  document.getElementById('root')
);
