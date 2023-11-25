
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import {BrowserRouter , Routes,Route} from "react-router-dom"
import { Toaster } from "react-hot-toast";
import "./styles/app.scss";

function App() {
  return (
    <BrowserRouter> 
    <Header/>
    <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    <Toaster/>
    </BrowserRouter>
  );
}

export default App;
