import React from 'react';
import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import Details from "./components/Details"
import Cart from "./components/Cart"
import Default from "./components/Default"








function App() {
  return (
    <React.Fragment>
      <h3>hello from app</h3>
      <Navbar>

      </Navbar>
    </React.Fragment>
 

   
  );
}

export default App;
