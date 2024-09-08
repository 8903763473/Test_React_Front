import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './Home/Home';
import Login from './Login/Login';
import Dashboard from './dashboard/Dashboard';
import Cart from './cart/cart';
import CheckOut from './checkout/checkOut';

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
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage setLoading={setLoading} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard setLoading={setLoading} />} />
          <Route path="/cart" element={<Cart setLoading={setLoading} />} />
          <Route path="/checkout" element={<CheckOut setLoading={setLoading} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
