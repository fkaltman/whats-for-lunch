import React, { useEffect, useState }  from "react";
import "./App.css";
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
      <Route index element= {<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
