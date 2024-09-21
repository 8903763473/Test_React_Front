import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart.scss';
import api from "../../ApiService/apiService";
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const Cartpage = ({ setLoading }) => {
    const [myCart, setmyCart] = useState([]);
    const [hasQuantityChanged, setHasQuantityChanged] = useState(false);
    const navigate = useNavigate();

    const getcartdata = () => {
        let post = {
            "userId": localStorage.getItem("userId")
        }
        api.getcart(post)
            .then(response => {
                const updatedCart = response.data.items.map(res => {
                    if (res.quantity) {
                        return { ...res, quantityCopy: res.quantity };
                    }
                    return res;
                });
                setmyCart(updatedCart);
                console.log(updatedCart);

            })
            .catch(error => {
                console.error("Error fetching categories:", error);
            });
    };

    useEffect(() => {
        getcartdata();
    }, []);

    const IncreaseQuantity = (index) => {
        const updatedCart = [...myCart];
        updatedCart[index].quantity += 1;
        setmyCart(updatedCart);
        checkForChanges();
    };

    const DecreaseQuantity = (index) => {
        const updatedCart = [...myCart];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
            setmyCart(updatedCart);
            checkForChanges();
        }
    };

    const checkForChanges = () => {
        const changesDetected = myCart.some((item) => item.quantity !== item.quantityCopy);
        setHasQuantityChanged(changesDetected);
    };

    const updateCartOnBackend = () => {
        console.log("hasQuantityChanged", hasQuantityChanged);

        if (hasQuantityChanged) {
            let post = {
                "userId": localStorage.getItem('userId'),
                "items": myCart.map(item => ({
                    "productId": item.productId,
                    "quantity": item.quantity
                }))
            };
            api.UpdateCart(post)
                .then(res => {
                    console.log(res);
                    console.log('Cart updated successfully:', res);
                    navigate('/checkout')
                })
                .catch(error => {
                    console.error('Error updating cart:', error);
                });
        } else {
            navigate('/checkout');
        }
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
            });
    };

    const clearcart = () => {
        let post = {
            "userId": localStorage.getItem("userId"),
        }
        api.clearallcart(post)
            .then(res => {
                console.log(res);
                setmyCart([])
                getcartdata();
            }).catch(err => {
                console.log(err);
            });
    };

    return (
        <div>
            <Header />

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

                                {/* Render cart items */}
                                {myCart.map((cart, index) => (
                                    <div className="single-cart-area-list main item-parent" key={cart.productId}>
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
                                            <p>₹ {cart.productCurrentRate}</p>
                                        </div>
                                        <div className="quantity">
                                            <div className="quantity-edit">
                                                <input
                                                    type="number"
                                                    className="input"
                                                    value={cart.quantity}
                                                    style={{ maxWidth: '100%' }}
                                                    readOnly />
                                                <div className="button-wrapper-action">
                                                    <button
                                                        className="button"
                                                        onClick={() => DecreaseQuantity(index)}
                                                    >
                                                        -<i className="fa-regular fa-chevron-down"></i>
                                                    </button>
                                                    <button
                                                        className="button plus"
                                                        onClick={() => IncreaseQuantity(index)}
                                                    >
                                                        +<i className="fa-regular fa-chevron-up"></i>
                                                    </button>
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
                                    <h6 className="price">₹{myCart.reduce((total, item) => total + item.productCurrentRate * item.quantity, 0)}</h6>
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
                                        <h6 className="price">₹{myCart.reduce((total, item) => total + item.productCurrentRate * item.quantity, 0)}</h6>
                                    </div>
                                    <div className="button-area">
                                        {hasQuantityChanged ? (
                                            <button
                                                className="rts-btn btn-primary"
                                                onClick={updateCartOnBackend}
                                            >
                                                Update & Checkout
                                            </button>
                                        ) : (
                                            <button
                                                className="rts-btn btn-primary"
                                                onClick={updateCartOnBackend}
                                            >
                                                Proceed To Checkout
                                            </button>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Cartpage;
