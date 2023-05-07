import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Jewelery from "./pages/Jewelery";
import Electronics from "./pages/Electronics";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="mx-auto w-screen">
      <div className="mx-auto w-screen overflow-hidden">
        <Router>
        <Header/>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/jewelery" element={<Jewelery />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
          <Sidebar />
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
