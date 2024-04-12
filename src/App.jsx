import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import "./index.css";

import HomePage from "./pages/HomePage";
import ChartersPage from "./pages/ChartersPage";
import Aboutpage from "./pages/Aboutpage";
import NotFound from "./pages/NotFound";
import Navbar from "mf_navbar/Navbar"

const App = () => (
  <BrowserRouter>
  <Navbar/>
  <div className="mx-20 mt-20">
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/personajes" element={<ChartersPage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        {/* manejo de rutas no agregadas dos opciones */}
        {/* <Route path="*" element={<Navigate to="/"/>}/> */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
  </div>
  </BrowserRouter>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App /> );
