import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart.scss';
import api from "../../ApiService/apiService";
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const Cartpage = ({ setLoading }) => {
    const [quantity, setQuantity] = useState(1);
    const [myCart, setmyCart] = useState([]);

    const getcartdata = () => {
        let post = {
            "userId": localStorage.getItem("userId")
        }

        api.getcart(post)
            .then(response => {
                console.log("Categories:", response.data);
                setmyCart(response.data.items)
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
            });
    };

    useEffect(() => {
        getcartdata();
    }, []);


    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const navigate = useNavigate();  

    const handleCheckoutClick = () => {
        navigate('/checkout');  
    };
    const RemoveCart = (productId) => {
        let post = {
            "userId": localStorage.getItem("userId"),
            "productId": productId
        }
        api.removecart(post)
            .then(res => {
                console.log(res);
                getcartdata();

            }).catch(err => {
                console.log(err);
            })
    };

    const clearcart = () => {
        let post = {
            "userId": localStorage.getItem("userId"),
        }
        api.clearallcart(post)
            .then(res => {
                console.log(res);
                getcartdata();
            }).catch(err => {
                console.log(err);
               
            })
    }
    return (
        <div>

        <Header/>

            <div className="rts-cart-area rts-section-gap bg_light-1">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-9 col-lg-12 col-md-12 col-12 order-2 order-xl-1 order-lg-2 order-md-2 order-sm-2">
                            <div className="rts-cart-list-area">
                                <div className="single-cart-area-list head">
                                    <div className="product-main">
                                        <p>Products</p>
                                    </div>
                                    <div className="price">
                                        <p>Price</p>
                                    </div>
                                    <div className="quantity">
                                        <p>Quantity</p>
                                    </div>
                                    <div className="subtotal">
                                        <p>SubTotal</p>
                                    </div>
                                </div>

                                {/* Example product item */}
                                {myCart.map((cart) => (
                                    <div className="single-cart-area-list main item-parent">
                                        <div className="product-main-cart">
                                            <div className="close section-activation" onClick={() => RemoveCart(cart.productId)}>
                                                <i className="fa-regular fa-x"></i>
                                            </div>
                                            <div className="thumbnail">
                                                <img src={cart.productImage} alt="shop" />
                                            </div>
                                            <div className="information">
                                                <h6 className="title">{cart.productCategory}</h6>
                                                <span>{cart.productCategory}</span>
                                            </div>
                                        </div>
                                        <div className="price">
                                            <p>₹{cart.productCurrentRate}</p>
                                        </div>
                                        <div className="quantity">
                                            <div className="quantity-edit">
                                                <input
                                                    type="number"
                                                    className="input"
                                                    value={cart.quantity}
                                                    onChange={handleQuantityChange} style={{ maxWidth: '100%' }}
                                                />
                                                <div className="button-wrapper-action">
                                                    <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                    <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="subtotal">
                                            <p>₹{cart.productCurrentRate * cart.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className="bottom-cupon-code-cart-area">
                                    <form action="#">
                                        <input type="text" placeholder="Coupon Code" />
                                        <button className="rts-btn btn-primary">Apply Coupon</button>
                                    </form>
                                    <a className="rts-btn btn-primary mr--50" onClick={() => clearcart()} style={{cursor:'pointer'}}>Clear All</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-12 col-md-12 col-12 order-1 order-xl-2 order-lg-1 order-md-1 order-sm-1">
                            <div className="cart-total-area-start-right">
                                <h5 className="title">Cart Totals</h5>
                                <div className="subtotal">
                                    <span>Subtotal</span>
                                    <h6 className="price">₹{myCart.productCurrentRate * myCart.quantity}</h6>
                                </div>
                                <div className="shipping">
                                    <span>Shipping</span>
                                    <ul>
                                        <li>
                                            <input type="radio" id="f-option" name="selector" />
                                            <label htmlFor="f-option">Free Shipping</label>
                                            <div className="check"></div>
                                        </li>
                                        <li>
                                            <input type="radio" id="s-option" name="selector" />
                                            <label htmlFor="s-option">Flat Rate</label>
                                            <div className="check">
                                                <div className="inside"></div>
                                            </div>
                                        </li>
                                        <li>
                                            <input type="radio" id="t-option" name="selector" />
                                            <label htmlFor="t-option">Local Pickup</label>
                                            <div className="check">
                                                <div className="inside"></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bottom">
                                    <div className="wrapper">
                                        <span>Subtotal</span>
                                        <h6 className="price">₹{myCart.productCurrentRate * myCart.quantity}</h6>
                                    </div>
                                    <div className="button-area">
                                        <button className="rts-btn btn-primary" onClick={handleCheckoutClick} >Proceed To Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>


            <div className="rts-footer-area pt--80 bg_light-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-main-content-wrapper pb--70 pb_sm--30">
                                <div className="single-footer-wized">
                                    <h3 className="footer-title">About Company</h3>
                                    <div className="call-area">
                                        <div className="icon">
                                            <i className="fa-solid fa-phone-rotary"></i>
                                        </div>
                                        <div className="info">
                                            <span>Have Question? Call Us 24/7</span>
                                            <a href="http://google.com" className="number">+258 3692 2569</a>
                                        </div>
                                    </div>
                                    <div className="opening-hour">
                                        <div className="single">
                                            <p>Monday - Friday: <span>8:00am - 6:00pm</span></p>
                                        </div>
                                        <div className="single">
                                            <p>Saturday: <span>8:00am - 6:00pm</span></p>
                                        </div>
                                        <div className="single">
                                            <p>Sunday: <span>Service Close</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-footer-wized">
                                    <h3 className="footer-title">Our Stores</h3>
                                    <div className="footer-nav">
                                        <ul>
                                            <li><a href="http://google.com">Delivery Information</a></li>
                                            <li><a href="http://google.com">Privacy Policy</a></li>
                                            <li><a href="http://google.com">Terms & Conditions</a></li>
                                            <li><a href="http://google.com">Support Center</a></li>
                                            <li><a href="http://google.com">Careers</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-footer-wized">
                                    <h3 className="footer-title">Shop Categories</h3>
                                    <div className="footer-nav">
                                        <ul>
                                            <li><a href="http://google.com">Contact Us</a></li>
                                            <li><a href="http://google.com">Information</a></li>
                                            <li><a href="http://google.com">About Us</a></li>
                                            <li><a href="http://google.com">Careers</a></li>
                                            <li><a href="http://google.com">Nest Stories</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-footer-wized">
                                    <h3 className="footer-title">Useful Links</h3>
                                    <div className="footer-nav">
                                        <ul>
                                            <li><a href="http://google.com">Cancellation & Returns</a></li>
                                            <li><a href="http://google.com">Report Infringement</a></li>
                                            <li><a href="http://google.com">Payments</a></li>
                                            <li><a href="http://google.com">Shipping</a></li>
                                            <li><a href="http://google.com">FAQ</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-footer-wized">
                                    <h3 className="footer-title">Our Newsletter</h3>
                                    <p className="disc-news-letter">
                                        Subscribe to the mailing list to receive updates one   <br /> the new arrivals and other discounts
                                    </p>
                                    <form className="footersubscribe-form" action="#">
                                        <input type="email" placeholder="Your email address" required />
                                        <button className="rts-btn btn-primary">Subscribe</button>
                                    </form>

                                    <p className="dsic">
                                        I would like to receive news and special offer
                                    </p>
                                </div>
                            </div>
                            <div className="social-and-payment-area-wrapper">
                                <div className="social-one-wrapper">
                                    <span>Follow Us:</span>
                                    <ul>
                                        <li><a href="http://google.com"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="http://google.com"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="http://google.com"><i className="fa-brands fa-youtube"></i></a></li>
                                        <li><a href="http://google.com"><i className="fa-brands fa-whatsapp"></i></a></li>
                                        <li><a href="http://google.com"><i className="fa-brands fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                                <div className="payment-access">
                                    <span>Payment Accepts:</span>
                                    <img src="images/payment/01.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rts-copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright-between-1">
                                <p className="disc">
                                    Copyright 2024 <a href="http://google.com">©Ekomart</a>. All rights reserved.
                                </p>
                                <a href="http://google.com" className="playstore-app-area">
                                    <span>Download App</span>
                                    <img src="images/payment/02.png" alt="" />
                                    <img src="images/payment/03.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Cartpage;
