import React, { useState, useEffect } from 'react';
import './checkOut.scss';
import { useNavigate } from 'react-router-dom';
import api from '../ApiService/apiService'

const CheckOut = () => {
  const navigate = useNavigate();
  const [checkItems, setCheckItems] = useState([]);

  // Form state
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    address: '',
    city: '',
    country: '',
    postal: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Calculate the total amount
  const calculateTotal = () => {
    return checkItems.reduce((acc, item) => acc + (item.productPrice * item.quantity), 0);
  };

  // Handle payment with Razorpay
  const payWithRazorpay = async () => {
    const amount = calculateTotal() * 100; // amount in paise
    const currency = 'INR';

    try {
      const options = {
        key: 'rzp_test_g2qodp1PYS6P26', // Use your actual Razorpay test key
        amount: amount, // Amount from the order
        currency: currency,
        name: 'My Company',
        description: 'Test Transaction',
        image: '/your_logo.png',
        // order_id: order_id, // Use the actual order ID from the response
        handler: (response) => {
          console.log('Razorpay Payment Successful', response);
          navigate('/home');
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          address: formData.address,
        },
        theme: {
          color: '#3399cc',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Order creation failed', error);
      alert('Payment process failed. Please try again.');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    payWithRazorpay();
  };


  const getMyCart = async () => {
    const post = {
      userId: localStorage.getItem('userId')
    };

    try {
      const response = await api.getCart(post); // Make sure this returns the cart items
      if (response && response.data) {
        setCheckItems(response.data); // Adjust based on your API response structure
        console.log('Cart Items:', response.data);
      } else {
        console.log('No cart items found.');
      }
    } catch (error) {
      console.error('Failed to fetch cart items:', error);
    }
  };

  // Fetch cart data on component mount
  useEffect(() => {
    getMyCart();
  }, []);


  return (
    <main>
      <section className="checkout-form">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="checkout-email">E-mail</label>
            <div>
              <span className="fa fa-envelope"></span>
              <input
                type="email"
                id="checkout-email"
                name="email"
                placeholder="Enter your email..."
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="checkout-phone">Phone</label>
            <div>
              <span className="fa fa-phone"></span>
              <input
                type="tel"
                name="phone"
                id="checkout-phone"
                placeholder="Enter your phone..."
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="checkout-name">Full Name</label>
            <div>
              <span className="fa fa-user-circle"></span>
              <input
                type="text"
                id="checkout-name"
                name="name"
                placeholder="Enter your name..."
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="checkout-address">Address</label>
            <div>
              <span className="fa fa-home"></span>
              <input
                type="text"
                name="address"
                id="checkout-address"
                placeholder="Your address..."
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="checkout-city">City</label>
            <div>
              <span className="fa fa-building"></span>
              <input
                type="text"
                name="city"
                id="checkout-city"
                placeholder="Your city..."
                value={formData.city}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-control">
              <label htmlFor="checkout-country">Country</label>
              <div>
                <span className="fa fa-globe"></span>
                <input
                  type="text"
                  name="country"
                  id="checkout-country"
                  placeholder="Your country..."
                  list="country-list"
                  value={formData.country}
                  onChange={handleChange}
                />
                <datalist id="country-list">
                  <option value="India"></option>
                  <option value="USA"></option>
                  <option value="Russia"></option>
                  <option value="Japan"></option>
                  <option value="Egypt"></option>
                </datalist>
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="checkout-postal">Postal Code</label>
              <div>
                <span className="fa fa-archive"></span>
                <input
                  type="text"
                  name="postal"
                  id="checkout-postal"
                  placeholder="Your postal code..."
                  value={formData.postal}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="form-control-btn">
            <button type="submit">Continue</button>
          </div>
        </form>
      </section>

      <section className="checkout-details">
        <div className="checkout-details-inner">
          <div className="checkout-lists">
            {checkItems.map(item => (
              <div className="checkoutcard" key={item.id}>
                <div className="card-image">
                  <img src={item.productImage} alt={item.productName} />
                </div>
                <div className="card-details">
                  <div className="card-name">{item.productName}</div>
                  <div className="card-price">₹ {(item.productCurrentRate * item.productQuantity).toFixed(2)}</div>
                  <div className="card-wheel">
                    <button>-</button>
                    <span>{item.productQuantity}</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout-shipping">
            <h6>Shipping</h6>
            <p>{checkItems.length !== 0 ? '₹ 50.00' : '₹ 0.00'}</p>
          </div>
          <div className="checkout-total">
            <h6>Total</h6>
            <p>₹ {calculateTotal().toFixed(2)}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CheckOut;
