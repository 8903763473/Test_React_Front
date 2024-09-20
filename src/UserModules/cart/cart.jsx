import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart.scss';
import api from "../../ApiService/apiService";
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const Cartpage = ({ setLoading }) => {
    const [myCart, setmyCart] = useState([]);
    const [hasQuantityChanged, setHasQuantityChanged] = useState(false); // Track if quantity has changed

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

    const handleQuantityChange = (event, index) => {
        const newQuantity = parseInt(event.target.value, 10);
        const updatedCart = [...myCart];
        updatedCart[index].quantity = newQuantity;
        setmyCart(updatedCart);
        setHasQuantityChanged(true);
        updateCartOnBackend(updatedCart[index]);
    };
    
    const IncreaseQuantity = (index) => {
        const updatedCart = [...myCart];
        updatedCart[index].quantity += 1;
        setmyCart(updatedCart);
        setHasQuantityChanged(true); 
    };
    
    const DecreaseQuantity = (index) => {
        const updatedCart = [...myCart];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
            setmyCart(updatedCart);
            setHasQuantityChanged(true); 
        }
    };
    
 

    const navigate = useNavigate();

    const updateCartOnBackend = () => {

        // Prepare the data to send to the backend
        let post = {
            "userId": "66e1d301234549032c7de0db", items: [{"productId": "66b8bf3c7e6c10ee2693fa10", "quantity": 4}]
            // "userId": localStorage.getItem('userId'),
            // "items": myCart.map(item => ({
            //     "productId": item.productId,
            //     "quantity": item.quantity
            // }))
            
        };
console.log(post);

        api.UpdateCart(post)
            .then(res => {
                console.log(res);
                
                console.log('Cart updated successfully:', res);
            })
            .catch(error => {
                console.error('Error updating cart:', error);
            });
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
                getcartdata();
            }).catch(err => {
                console.log(err);
            });
    };

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
                                            <p>₹{cart.productCurrentRate}</p>
                                        </div>
                                        <div className="quantity">
                                            <div className="quantity-edit">
                                                <input
                                                    type="number"
                                                    className="input"
                                                    value={cart.quantity}
                                                    onChange={(e) => handleQuantityChange(e, index)} // Bind the change to the cart item
                                                    style={{ maxWidth: '100%' }}
                                                />
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
                                        <button 
                                            className="rts-btn btn-primary" 
                                            onClick={updateCartOnBackend}
                                            style={{ display: hasQuantityChanged ? 'block' : 'none' }}
                                        >
                                            Update & Checkout
                                        </button>
                                    </div>

                                    <div className="button-area">
                                        <button 
                                            className="rts-btn btn-primary" 
                                            onClick={updateCartOnBackend}
                                            style={{ display: !hasQuantityChanged ? 'block' : 'none' }}
                                        >
                                            Proceed To Checkout
                                        </button>
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
