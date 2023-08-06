import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product.jsx";
import Productlist from "./pages/Productlist.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import Analytics from "./pages/Analytics.jsx";

import Comment from "./pages/Comments.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productlist" element={<Productlist />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
