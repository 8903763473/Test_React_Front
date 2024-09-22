import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './UserModules/Home/Home';
import Cartpage from './UserModules/cart/cart';
import Checkout from './UserModules/checkout/checkout';
import Login from './CommonModule/Login/Login';
import { Register } from './CommonModule/Register/Register';
import Contact from './UserModules/contact/contact';
import Dashboard from './AdminModules/dashboard/Dashboard'
import { ProductDetail } from './UserModules/productDetail/ProductDetail';
import { About } from './UserModules/about/About';
import UserDashboard from './UserModules/userDashboard/UserDashboard';
import InVoice from './UserModules/invoice/invoice';
import { TrackMyOrder } from './UserModules/TrackMyOrder/TrackMyOrder';
import ProductCategory from './UserModules/ProductByCategory/ProductByCategory';


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
          <Route path="*" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage setLoading={setLoading} />} />
          <Route path="/cart" element={<Cartpage setLoading={setLoading} />} />
          <Route path="/about" element={<About setLoading={setLoading} />} />
          <Route path="/checkout" element={<Checkout setLoading={setLoading} />} />
          <Route path="/contact" element={<Contact setLoading={setLoading} />} />
          <Route path="/productDetail" element={<ProductDetail setLoading={setLoading} />} />
          <Route path="/Dashboard" element={<UserDashboard setLoading={setLoading} />} />
          <Route path="/ProductCategory" element={<ProductCategory setLoading={setLoading} />} />

          {/* <Route path="/dashboard" element={<Dashboard setLoading={setLoading} />} /> */}
          <Route path="/invoice" element={<InVoice setLoading={setLoading} />} />
          <Route path="/TrackMyOrder" element={<TrackMyOrder setLoading={setLoading} />} />


        </Routes>
      </div>
    </Router>

  );
}

export default App;
