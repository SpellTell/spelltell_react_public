import { useState, useReducer, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./Words";
import "./Style.css";
import correct from "./files/correct.mp3";
import wrong from "./files/wrong.mp3";
import SharedLayout from "./SharedLayout";
import Home from "./Home";
import Word from "./Word";
import About from "./About";

function App() {
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/word:name" element={<Word />} />
        <Route path="/" element={<h1>404</h1>} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  </div>;
}

export default App;
