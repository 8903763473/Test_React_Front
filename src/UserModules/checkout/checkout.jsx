import React, { useState, useEffect, useRef } from 'react';
import './checkout.scss';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import api from '../../ApiService/apiService';
import NotificationCenter from '../../CommonModule/Notification/Notification';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ setLoading }) => {
    const navigate = useNavigate()
    const [checkoutId, setcheckoutId] = useState(0)
    const [showPopup, setShowPopup] = useState(false);
    const [myCart, setMyCart] = useState([]);
    const [Total, setTotal] = useState(0);
    const [feedback, setFeedback] = useState('');
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [rating, setRating] = useState(0);

    // const handleNameChange = (e) => setName(e.target.value);
    // const handleEmailChange = (e) => setEmail(e.target.value);
    // const handleFeedbackChange = (e) => setFeedback(e.target.value);

    // const handleRatingClick = (value) => setRating(value);

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
            return total + (item.productId.productCurrentRate * item.quantity);
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

        const amount = (Total + 50) * 100;
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
            orderStatus: 'Confirmed',
            products: myCart.map((item) => ({
                productId: item.productId._id,
                quantity: item.quantity,
                price: item.productId.productCurrentRate,
            })),
        };

        console.log(post);
        try {
            const response = await api.checkoutProducts(post);
            console.log('Payment verification successful', response.data);
            setShowPopup(true);
            triggerNotification('success', 'Success', 'Thanks for you order', 'x', null);
            setLoading(false)
            setcheckoutId(response.data.checkout._id)
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


    const [selectedRating, setSelectedRating] = useState(0);
    const ratings = [1, 2, 3, 4, 5];

    const handleFeebackSubmit = (e) => {
        e.preventDefault();
        // console.log('User Input:', { name, email, feedback, rating });
        let post = {
            "customerName": localStorage.getItem('name'),
            "email": localStorage.getItem('email'),
            "feedbackText": feedback,
            "rating": selectedRating
        }
        api.Feedback(post)
            .then(res => {
                console.log(res);
                console.log(checkoutId);
                navigate('/invoice?orderId=' + checkoutId);
            })
            .catch(err => {
                console.log(err);
            })
    };

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    };

    const selectRating = (rating) => {
        setSelectedRating(rating);
    };

    return (
        <div>


            <NotificationCenter ref={notificationRef} />
            <Header />
            <div className="container">


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
                                                        <img src={res.productId.productImage} alt={res.productId.productImage} />
                                                    </a>
                                                    <a className="title">{res.productId.productName}</a>
                                                </div>
                                                <span className="price">₹ {res.productId.productCurrentRate * res.quantity}.00</span>
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
            </div>


            {/* popup */}
            {/* {showPopup && (
                <main className='bg-overlay'>
                    <div className="rating-card">
                        <div className="rating-card__front">
                            <div className="rating-card__img">
                                <img src="https://rvs-interactive-rating-component.vercel.app/images/icon-star.svg" alt="" />
                            </div>
                            <div className="rating-card__content">
                                <h2>How did we do?</h2>
                                <p>We value your feedback to help us enhance our services and offerings. Please share your thoughts!</p>
                            </div>
                            <div className="rating-card__ratings">
                                {ratings.map((rating) => (
                                    <button
                                        key={rating}
                                        onClick={() => selectRating(rating)}
                                        className={selectedRating === rating ? 'active' : ''}
                                    >
                                        {rating}
                                    </button>
                                ))}
                            </div>
                            <textarea
                                value={feedback}
                                onChange={handleFeedbackChange}
                                placeholder="Your feedback..."
                                rows="4"
                                className="feedback-textarea"
                            />
                            <button className="rating-card__btn" onClick={handleFeebackSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </main>

            )}; */}
            <Footer />
        </div>
    );

}

export default Checkout;