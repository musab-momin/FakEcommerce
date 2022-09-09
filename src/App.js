import React from "react";
import { Route, Routes } from "react-router";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Thankyou from "./pages/Thankyou";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/checkout" element={ <Checkout /> } />
      <Route exact path="/end" element={ <Thankyou /> } />
    </Routes>
  );
}

export default App;