import React from 'react';
import './app.css';
import Navbar from './components/navbar';
import Products from './components/products';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
