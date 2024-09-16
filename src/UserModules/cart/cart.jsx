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
                                    <a className="rts-btn btn-primary mr--50" onClick={() => clearcart()} style={{ cursor: 'pointer' }}>Clear All</a>
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

            <Footer />

            <Footer/>
        </div>
    );
};

export default Cartpage;
