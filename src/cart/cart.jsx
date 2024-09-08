import React, { useState } from 'react';
import './cart.scss'; 

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      productImage: 'https://s.cdpn.io/3/dingo-dog-bones.jpg',
      productName: 'Dingo Dog Bones',
      productDescription: 'The best dog bones of all time. Holy crap. Your dog will be begging for these things!',
      productPrice: 12.99,
      quantity: 2,
    },
    {
      id: 2,
      productImage: 'https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png',
      productName: 'Nutro™ Adult Lamb and Rice Dog Food',
      productDescription: 'Who doesn\'t like lamb and rice?',
      productPrice: 45.99,
      quantity: 1,
    }
  ]);

  const handleRemove = (id) => {
    const newCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(newCartItems);
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = cartItems.map(item => item.id === id ? { ...item, quantity: newQuantity } : item);
    setCartItems(updatedItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + (item.productPrice * item.quantity), 0);
  };

  const tax = 5 / 100 * calculateTotal();
  const shipping = 15;
  const grandTotal = calculateTotal() + tax + shipping;

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
        <div className="product" key={item.id}>
          <div className="product-image">
            <img src={item.productImage} alt={item.productName} />
          </div>
          <div className="product-details">
            <div className="product-title">{item.productName}</div>
            <p className="product-description">{item.productDescription}</p>
          </div>
          <div className="product-price">₹{item.productPrice}</div>
          <div className="product-quantity">
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
            />
          </div>
          <div className="product-removal">
            <button className="remove-product" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
          <div className="product-line-price">₹{(item.productPrice * item.quantity).toFixed(2)}</div>
        </div>
      ))}

      <div className="totals">
        <div className="totals-item">
          <label>Subtotal</label>
          <div className="totals-value">₹{calculateTotal().toFixed(2)}</div>
        </div>
        <div className="totals-item">
          <label>Tax (5%)</label>
          <div className="totals-value">₹{tax.toFixed(2)}</div>
        </div>
        <div className="totals-item">
          <label>Shipping</label>
          <div className="totals-value">₹{shipping.toFixed(2)}</div>
        </div>
        <div className="totals-item totals-item-total">
          <label>Grand Total</label>
          <div className="totals-value">₹{grandTotal.toFixed(2)}</div>
        </div>
      </div>

      <button className="checkout">Checkout</button>
    </div>
    </div>
  );
};

export default Cart;
