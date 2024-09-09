import React, { useState, useEffect } from 'react';
import './cart.scss';
import api from '../ApiService/apiService';
import { useNavigate } from 'react-router-dom';

// Helper function to truncate text
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
};

const Cart = () => {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([]);

  const GetCart = async () => {
    let post = {
      userId: localStorage.getItem('userId')
    };
    console.log(post);

    try {
      const response = await api.getcart(post);

      // Extract items from the response
      if (response.data && response.data.items) {
        setCartItems(response.data.items); // Set the items array to the state
      } else {
        console.error("Unexpected response format:", response);
        setCartItems([]); // Fallback to an empty array if the response format is unexpected
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
      setCartItems([]); // Set cartItems to an empty array on error
    }
  };

  const handleRemove = (id) => {
    const newCartItems = cartItems.filter(item => item._id !== id);
    setCartItems(newCartItems);
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = cartItems.map(item =>
      item._id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + (item.productCurrentRate * item.quantity), 0);
  };

  const tax = 5 / 100 * calculateTotal();
  const shipping = 15;
  const grandTotal = calculateTotal() + tax + shipping;

  useEffect(() => {
    GetCart();
  }, []);

  return (
    <div className="container">
      <div className="shopping-cart">
        <div className="column-labels">
          <label className="product-image">Image</label>
          <label className="product-details">Product</label>
          <label className="product-price">Price</label>
          <label className="product-quantity">Quantity</label>
          <label className="product-removal">Remove</label>
          <label className="product-line-price">Total</label>
        </div>

        {cartItems.map(item => (
          <div className="product" key={item._id}>
            <div className="product-image">
              <img src={item.productImage || 'default-image.jpg'} alt={item.productName} />
            </div>
            <div className="product-details">
              <div className="product-title">{item.productName}</div>
              <p className="product-description">
                {truncateText(item.productDescription, 20)}
              </p>
            </div>
            <div className="product-price">₹{item.productCurrentRate}</div>
            <div className="product-quantity">
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
              />
            </div>
            <div className="product-removal">
              <button className="remove-product" onClick={() => handleRemove(item._id)}>
                Remove
              </button>
            </div>
            <div className="product-line-value1">
              ₹{(item.productCurrentRate * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}

        <div className="totals">
          <div className="totals-item">
            <label>Subtotal</label>
            <div className="totals-value1">₹{calculateTotal().toFixed(2)}</div>
          </div>
          <div className="totals-item">
            <label>Tax (5%)</label>
            <div className="totals-value1">₹{tax.toFixed(2)}</div>
          </div>
          <div className="totals-item">
            <label>Shipping</label>
            <div className="totals-value1">₹{shipping.toFixed(2)}</div>
          </div>
          <div className="totals-item totals-item-total">
            <label>Grand Total</label>
            <div className="totals-value1">₹{grandTotal.toFixed(2)}</div>
          </div>
        </div>
        <button className="checkout" onClick={() => navigate('/checkout')}>Checkout</button>

      </div>
    </div>
  );
};

export default Cart;
