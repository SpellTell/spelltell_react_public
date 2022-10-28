import { useState, useReducer, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./Words";
import "./Style.css";
import correct from "./files/correct.mp3";
import wrong from "./files/wrong.mp3";
import SharedLayout from "./SharedLayout";
import Home from "./Home";
import About from "./About";
import SignUp from "./SignUp";
import { MenuPovider } from "./MenuContext";
import ButWhy from "./ButWhy";

function App() {
  return <div>
   <MenuPovider>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<About />} />
        <Route path="/but-why" element={<ButWhy />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
   </MenuPovider>
  </div>;
}

export default App;
