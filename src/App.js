import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './UserModules/Home/Home';
import Cartpage from './UserModules/cart/cart';
import Checkout from './UserModules/checkout/checkout';
import Login from './CommonModule/Login/Login';
import { Register } from './CommonModule/Register/Register';
function App() {
  const [loading, setLoading] = useState(false);

  return (
    <Router>
      <div className="App">
        {loading && (
          <div className="loaderContent">
            <div className="loader"></div>
          </div>
        )}

        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage setLoading={setLoading} />} />
          <Route path="/cart" element={<Cartpage setLoading={setLoading} />} />
          <Route path="/checkout" element={<Checkout setLoading={setLoading} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
