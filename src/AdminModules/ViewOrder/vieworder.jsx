import React, { useState, useEffect, useCallback } from 'react';
import './vieworder.scss';
import api from '../../ApiService/apiService';
import { useLocation, useParams } from 'react-router-dom';

const ViewOrder = ({ setLoading }) => {
    const [singleOrdersData, setOrderid] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const OrderId = searchParams.get('orderId');
    const { id } = useParams();
    const GetOrderId = () => {
      api.getOrderId(OrderId)
        .then(response => {
          console.log("Order Details:", response.data);
          setOrderid(response.data);
        })
        .catch(error => {
          console.error("Error fetching order details:", error);
        });
    };

useEffect(() => {
    GetOrderId()
}, []);

    return (
      <div className="fullpageview">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Order #{singleOrdersData._id} Details</h1>
        <button className="back-button">← Back to Orders</button>
      </div>

      {/* Order Container */}
      <div className="order-container">
        {/* Order Summary */}
        <div className="order-summary animate-fadeIn">
          <h2>Order Summary</h2>
          <p><strong>Order Date:</strong> {new Date(singleOrdersData.createdAt).toLocaleDateString()}</p>
          <p>
            <strong>Status:</strong> 
            <span className={`status ${singleOrdersData.status ? singleOrdersData.status.toLowerCase() : 'pending'}`}>
              {singleOrdersData.status || 'Pending'}
            </span>
          </p>
          <p><strong>Total Amount:</strong> ₹{singleOrdersData.products.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
        </div>

        {/* Product List */}
        <div className="product-list">
          <h3>Products</h3>
          {singleOrdersData.products.map((product, index) => (
            <div className={`product-item animate-slideIn delay-${index}`} key={product._id}>
              <img 
                src="https://via.placeholder.com/80" 
                alt={product.productId.productName} 
              />
              <div className="product-details">
                <p><strong>{product.productId.productName}</strong></p>
                <p>Category: {product.productId.productCategory}</p>
                <p>Quantity: {product.quantity} {product.productId.productUnit}</p>
                <p>Price: ₹{product.price}</p>
                <p>Original Rate: ₹{product.productId.productOriginalRate}</p>
                <p>Discount: {product.productId.productDiscount}%</p>
              </div>
            </div>
          ))}
        </div>

        {/* Confirm Order Button */}
        <button className="confirm-button">Confirm Order</button>
      </div>
    </div>

    );
};

export default ViewOrder;
