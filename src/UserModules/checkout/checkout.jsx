import React, { useState, useEffect, useRef } from 'react';
import './checkout.scss';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import api from '../../ApiService/apiService';
import NotificationCenter from '../../CommonModule/Notification/Notification';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ setLoading }) => {
    const navigate = useNavigate()
    const [myCart, setMyCart] = useState([]);
    const [Total, setTotal] = useState(0);

    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
        orderNotes: ''
    });

    const getcartdata = () => {
        let post = {
            "userId": localStorage.getItem('userId')
        }
        api.getcart(post)
            .then(res => {
                console.log(res);
                setMyCart(res.data.items);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        const totalAmount = myCart.reduce((total, item) => {
            return total + (item.productCurrentRate * item.quantity);
        }, 0);
        setTotal(totalAmount);
    }, [myCart]);

    useEffect(() => {
        getcartdata();
    }, []);


    const notificationRef = useRef();
    const triggerNotification = (type, title, subtitle, button, path) => {
        if (notificationRef.current) {
            notificationRef.current.spawnNotification(type, title, subtitle, button, path);
        }
    };

    const openGateway = async (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.email || !formData.phone || !formData.street || !formData.city || !formData.state || !formData.zipCode) {
            console.error('Form is incomplete. Please fill all required fields.');
            triggerNotification('warning', 'Warning', 'All fields are required', 'x', null)
            return;
        }

        const amount = 1 * 100;
        const currency = 'INR';
        const phone = '8903763473';
        const email = 'ramyastella08@gmail.com';
        const name = 'Ramya';

        try {
            let post = {
                amount: amount,
                currency: currency
            };

            const order = await api.createOrder(post);

            console.log(order);

            const options = {
                key: 'rzp_test_8Hsb2JqvzddDdG',
                amount: order.data.amount,
                currency: order.data.currency,
                name: 'Welcome Grocery',
                description: 'Implemented by Ramya',
                image: 'images/logo/logo-01.svg',
                order_id: order.data.id,
                handler: (response) => {
                    console.log('Razorpay Payment Successful', response);
                    // setLoading(true)
                    verifyPayment(response);
                },
                prefill: {
                    name,
                    email,
                    contact: phone,
                },
                notes: {
                    address: 'Corporate Office',
                },
                theme: {
                    color: '#3399cc',
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            console.error('Order creation failed', error);
        }
    };


    const verifyPayment = async (paymentResponse) => {
        console.log(paymentResponse);
        try {
            const response = await api.verifyPayment(paymentResponse);
            console.log('Payment verification successful', response.data);
            doCheckout();
        } catch (error) {
            console.error('Error verifying payment:', error);
            setLoading(false)
        }
    };


    const doCheckout = async () => {

        let post = {
            userId: localStorage.getItem('userId'),
            name: formData.firstName,
            email: formData.email,
            country: formData.country,
            street: formData.street,
            city: formData.city,
            state: formData.state,
            zipCode: formData.zipCode,
            phone: formData.phone,
            orderNotes: formData.orderNotes,
            products: myCart.map((item) => ({
                productId: item.productId,
                quantity: item.quantity,
                price: item.productCurrentRate,
            })),
        };

        console.log(post);

        // triggerNotification('success', 'Success', 'Order Placed Successfully', 'x', null)

        try {
            const response = await api.checkoutProducts(post);
            console.log('Payment verification successful', response.data);
            triggerNotification('success', 'Success', 'Thanks for you order', 'x', null);
            setLoading(false)
            navigate('/invoice?orderId=' + response.data.checkout._id);
        } catch (error) {
            console.error('Error while checkout:', error);
            setLoading(false)
        }
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };


    return (
        <div>


            <NotificationCenter ref={notificationRef} />
            <Header />

            <div className="checkout-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 pr--40 pr_md--5 pr_sm--5 order-2 order-xl-1 order-lg-2 order-md-2 order-sm-2 mt_md--30 mt_sm--30">
                            {/* <div className="coupon-input-area-1 login-form">
                        <div className="coupon-area">
                            <div className="coupon-ask">
                                <span>Returning customers?</span>
                                <button className="coupon-click"> Click here to login</button>
                            </div>
                            <div className="coupon-input-area">
                                <div className="inner">
                                    <p>If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing section.</p>
                                    <form action="#">
                                        <input type="email" placeholder="User Name..."/>
                                        <input type="password" placeholder="Enter password..."/>

                                        <button type="submit" className="btn-primary rts-btn">Log In</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="coupon-input-area-1">
                        <div className="coupon-area">
                            <div className="coupon-ask  cupon-wrapper-1">
                                <button className="coupon-click">Have a coupon? Click here to enter your code</button>
                            </div>
                            <div className="coupon-input-area cupon1">
                                <div className="inner">
                                    <p className="mt--0 mb--20"> If you have a coupon code, please apply it below.</p>
                                    <div className="form-area">
                                        <input type="text" placeholder="Enter Coupon Code..."/>
                                        <button type="submit" className="btn-primary rts-btn">Apply Coupon</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                            <div className="rts-billing-details-area">
                                <h3 className="title">Billing Details</h3>
                                <form onSubmit={openGateway}>
                                    <div className="half-input-wrapper">
                                        <div className="single-input">
                                            <label htmlFor="firstName">First Name*</label>
                                            <input id="firstName" type="text" value={formData.firstName} onChange={handleInputChange} required />
                                        </div>
                                        <div className="single-input">
                                            <label htmlFor="email">Email Address*</label>
                                            <input id="email" type="text" value={formData.email} onChange={handleInputChange} required />
                                        </div>
                                    </div>
                                    <div className="half-input-wrapper">
                                        <div className="single-input">
                                            <label htmlFor="phone">Phone*</label>
                                            <input id="phone" type="text" value={formData.phone} onChange={handleInputChange} required />
                                        </div>
                                        <div className="single-input">
                                            <label htmlFor="street">Street Address*</label>
                                            <input id="street" type="text" value={formData.street} onChange={handleInputChange} required />
                                        </div>
                                    </div>
                                    <div className="half-input-wrapper">
                                        <div className="single-input">
                                            <label htmlFor="city">Town / City*</label>
                                            <input id="city" type="text" value={formData.city} onChange={handleInputChange} required />
                                        </div>
                                        <div className="single-input">
                                            <label htmlFor="state">State*</label>
                                            <input id="state" type="text" value={formData.state} onChange={handleInputChange} required />
                                        </div>
                                    </div>
                                    <div className="half-input-wrapper">
                                        <div className="single-input">
                                            <label htmlFor="country">Country / Region*</label>
                                            <input id="country" type="text" value={formData.country} onChange={handleInputChange} required />
                                        </div>
                                        <div className="single-input">
                                            <label htmlFor="zipCode">Zip Code*</label>
                                            <input id="zipCode" type="text" value={formData.zipCode} onChange={handleInputChange} required />
                                        </div>
                                    </div>

                                    <div className="single-input">
                                        <label htmlFor="orderNotes">Order Notes</label>
                                        <textarea id="orderNotes" value={formData.orderNotes} onChange={handleInputChange}></textarea>
                                    </div>
                                    {/* <button className="rts-btn btn-primary" type="submit">Update Cart</button> */}
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-4 order-1 order-xl-2 order-lg-1 order-md-1 order-sm-1">
                            <h3 className="title-checkout">Your Order</h3>
                            <div className="right-card-sidebar-checkout">
                                <div className="top-wrapper">
                                    <div className="product">Products</div>
                                    <div className="price">Price</div>
                                </div>
                                {myCart.length > 0 ? (
                                    myCart.map(res => (
                                        <div className="single-shop-list" key={res._id}> {/* Ensure unique key for each item */}
                                            <div className="left-area">
                                                <a className="thumbnail">
                                                    <img src={res.productImage} alt={res.productImage} />
                                                </a>
                                                <a className="title">{res.productName}</a>
                                            </div>
                                            <span className="price">₹ {res.productCurrentRate * res.quantity}.00</span>
                                        </div>
                                    ))
                                ) : (
                                    <p>No items in the cart</p>
                                )}
                                {/* Add more products as needed */}
                                <div className="single-shop-list">
                                    <div className="left-area">
                                        <span>Subtotal</span>
                                    </div>
                                    <span className="price">₹ {Total}.00</span>
                                </div>
                                <div className="single-shop-list">
                                    <div className="left-area">
                                        <span>Shipping</span>
                                    </div>
                                    <span className="price">Flat rate: ₹ 50.00</span>
                                </div>
                                <div className="single-shop-list">
                                    <div className="left-area">
                                        <span style={{ fontWeight: 600, color: '#2C3C28' }}>Total Price:</span>
                                    </div>
                                    <span className="price" style={{ color: '#629D23' }}>₹ {Total + 50}.00</span>
                                </div>
                                <div className="cottom-cart-right-area">
                                    <ul>
                                        <li>
                                            <input type="radio" id="f-options" name="selector" />
                                            <label htmlFor="f-options">Direct Bank Transfer</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="s-options" name="selector" />
                                            <label htmlFor="s-options">Cash On Delivery</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="t-options" name="selector" />
                                            <label htmlFor="t-options">Paypal</label>
                                        </li>
                                    </ul>
                                    <p className="mb--20">
                                        Your personal data will be used to process your order, support your experience, and for other purposes described in our privacy policy.
                                    </p>
                                    <div className="single-category mb--30">
                                        <input id="cat14" type="checkbox" />
                                        <label htmlFor="cat14">I have read and agree to the terms and conditions *</label>
                                    </div>
                                    <a className="rts-btn btn-primary pointer" onClick={openGateway}>Place Order</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    );

}

export default Checkout;