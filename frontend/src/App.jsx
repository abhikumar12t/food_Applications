import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Success from "./Pages/Success";
import NotFound from "./Pages/Not_Found";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* Toaster ko Routes ke bahar rakho */}
        <Toaster position="top-center" reverseOrder={false} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/success' element={<Success />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
