import React from "react";
import { Route, Routes } from "react-router";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/checkout" element={ <Checkout /> } />
    </Routes>
  );
}

export default App;