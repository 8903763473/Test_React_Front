import React, { useState, useEffect, useCallback } from 'react';
import './vieworder.scss';
import api from '../../ApiService/apiService';
import { useParams } from 'react-router-dom';

const ViewOrder = ({ setLoading }) => {
    const [singleOrdersData, setOrderid] = useState([]);
   
    const { id } = useParams();
    const GetOrderId = () => {
      api.getOrderId(id)
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
<div className="full">
<div class="order-container">
    <div class="order-summary animate-fadeIn">
      <h2>Order Summary</h2>
      <p><strong>Order Date:</strong> 2024-10-08</p>
      <p><strong>Status:</strong> <span class="status completed">Completed</span></p>
      <p><strong>Total Amount:</strong> ₹5,600</p>
    </div>

    <div class="product-list">
      <h3>Products</h3>


<div className="grid">
<div class="product-item animate-slideIn">
        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=80&q=80" alt="Product Image" />
        <div class="product-details">
          <p><strong>Ocean Chair</strong></p>
          <p>Quantity: 2</p>
          <p>Price: ₹2,800 each</p>
        </div>
      </div>

      <div class="product-item animate-slideIn delay-1">
        <img src="https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=80&q=80" alt="Product Image" />
        <div class="product-details">
          <p><strong>Wooden Lamp</strong></p>
          <p>Quantity: 1</p>
          <p>Price: ₹2,000</p>
        </div>
      </div>
</div>
     
    </div>

    {/* <button class="confirm-button">Confirm Order</button> */}
  </div>
</div>
</div>

    );
};

export default ViewOrder;
