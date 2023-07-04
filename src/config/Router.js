import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Register from "../pages/register";
import Login from "../pages/login";
import About from "../pages/about";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="register" element={<Register />} />
        <Route index path="login" element={<Login />} />
        <Route index path="about" element={<About />} />
        {/* <Route index path="*" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
