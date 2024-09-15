import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import api from '../../ApiService/apiService';



export const Header = () => {
    const [cartData, setmyCart] = useState([]);
    const [cartDataLength, cartlength] = useState([]);
    const navigate = useNavigate();

    const RouteTo = (data) => {
        navigate('/' + data);
    };

const routeCart=(data)=>{
    if(data==1){
        navigate('/cart');
    }
    else if(data==2){
        navigate('/checkout'); 
    }
    else if(data=='account'){
        navigate('/MyOrder');  
    }
}

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

    const getcartdata = () => {
        let post = {
            "userId": localStorage.getItem("userId")
        }

        api.getcart(post)
            .then(response => {
                console.log("Categories:", response.data);
                setmyCart(response.data.items)
                cartlength(response.data.items.length)
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
            });
    };

    useEffect(() => {
        getcartdata();
    }, []);

    return (
        <div>

            <div className="rts-header-one-area-one">
                {/* <div className="header-top-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bwtween-area-header-top">
                                    <div className="discount-area">
                                        <p className="disc">FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</p>
                                        <div className="countdown">
                                            <div className="countDown">10/05/2025 10:20:00</div>
                                        </div>
                                    </div>
                                    <div className="contact-number-area">
                                        <p>Need help? Call Us:
                                            <a href="tel:+4733378901">+258 3268 21485</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-mid-one-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-mid-wrapper-between">
                                    <div className="nav-sm-left">
                                        <ul className="nav-h_top">
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="account.html">My Account</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                        </ul>
                                        <p className="para">We deliver to your everyday from 7:00 to 22:00</p>
                                    </div>
                                    <div className="nav-sm-left">
                                        <ul className="nav-h_top language">
                                            <li className="category-hover-header language-hover">
                                                <a href="http://google.com">English</a>
                                                <ul className="category-sub-menu">
                                                    <li>
                                                        <a href="http://google.com" className="menu-item">
                                                            <span>Italian</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="http://google.com" className="menu-item">
                                                            <span>Russian</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="http://google.com" className="menu-item">
                                                            <span>Chinian</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="category-hover-header language-hover">
                                                <a href="http://google.com">
                                                    USD
                                                </a>
                                                <ul className="category-sub-menu">
                                                    <li>
                                                        <a href="http://google.com" className="menu-item">
                                                            <span>Rubol</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="http://google.com" className="menu-item">
                                                            <span>Rupi</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="http://google.com" className="menu-item">
                                                            <span>Euro</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="trackorder.html">Track Order</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="search-header-area-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="logo-search-category-wrapper">
                                    <a href="index-2.html" className="logo-area">
                                        <img src="images/logo/logo-01.svg" alt="logo-main" className="logo" />
                                    </a>
                                    <div className="category-search-wrapper">
                                        <div className="category-btn category-hover-header">
                                            <img className="parent" src="images/icons/bar-1.svg" alt="icons" />
                                            <span>Categories</span>
                                            <ul className="category-sub-menu" id="category-active-four">
                                                <li>
                                                    <a href="http://google.com" className="menu-item">
                                                        <img src="images/icons/01.svg" alt="icons" />
                                                        <span>Breakfast &amp; Dairy</span>
                                                        <i className="fa-regular fa-plus"></i>
                                                    </a>
                                                    <ul className="submenu mm-collapse">
                                                        <li><a className="mobile-menu-link" href="http://google.com">Breakfast</a></li>
                                                        <li><a className="mobile-menu-link" href="http://google.com">Dinner</a></li>
                                                        <li><a className="mobile-menu-link" href="http://google.com"> Pumking</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="http://google.com" className="menu-item">
                                                        <img src="images/icons/02.svg" alt="icons" />
                                                        <span>Meats &amp; Seafood</span>
                                                        <i className="fa-regular fa-plus"></i>
                                                    </a>
                                                    <ul className="submenu mm-collapse">
                                                        <li><a className="mobile-menu-link" href="http://google.com">Breakfast</a></li>
                                                        <li><a className="mobile-menu-link" href="http://google.com">Dinner</a></li>
                                                        <li><a className="mobile-menu-link" href="http://google.com"> Pumking</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="http://google.com" className="menu-item">
                                                        <img src="images/icons/03.svg" alt="icons" />
                                                        <span>Breads &amp; Bakery</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://google.com" className="menu-item">
                                                        <img src="images/icons/04.svg" alt="icons" />
                                                        <span>Chips &amp; Snacks</span>
                                                        <i className="fa-regular fa-plus"></i>
                                                    </a>
                                                    <ul className="submenu mm-collapse">
                                                        <li><a className="mobile-menu-link" href="http://google.com">Breakfast</a></li>
                                                        <li><a className="mobile-menu-link" href="http://google.com">Dinner</a></li>
                                                        <li><a className="mobile-menu-link" href="http://google.com"> Pumking</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="http://google.com" className="menu-item">
                                                        <img src="images/icons/05.svg" alt="icons" />
                                                        <span>Medical Healthcare</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://google.com" className="menu-item">
                                                        <img src="images/icons/06.svg" alt="icons" />
                                                        <span>Breads &amp; Bakery</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://google.com" className="menu-item">
                                                        <img src="images/icons/07.svg" alt="icons" />
                                                        <span>Biscuits &amp; Snacks</span>
                                                        <i className="fa-regular fa-plus"></i>
                                                    </a>
                                                    <ul className="submenu mm-collapse">
                                                        <li><a className="mobile-menu-link" href="http://google.com">Breakfast</a></li>
                                                        <li><a className="mobile-menu-link" href="http://google.com">Dinner</a></li>
                                                        <li><a className="mobile-menu-link" href="http://google.com"> Pumking</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="http://google.com" className="menu-item">
                                                        <img src="images/icons/08.svg" alt="icons" />
                                                        <span>Frozen Foods</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://google.com" className="menu-item">
                                                        <img src="images/icons/09.svg" alt="icons" />
                                                        <span>Grocery &amp; Staples</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://google.com" className="menu-item">
                                                        <img src="images/icons/10.svg" alt="icons" />
                                                        <span>Other Items</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <form action="#" className="search-header">
                                            <input type="text" placeholder="Search for products, categories or brands" required />
                                            <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                <div className="btn-text">
                                                    Search
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-light fa-magnifying-glass"></i>
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-light fa-magnifying-glass"></i>
                                                </div>
                                            </a>
                                        </form>
                                    </div>
                                    <div className="actions-area">
                                        <div className="search-btn" id="searchs">

                                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.75 14.7188L11.5625 10.5312C12.4688 9.4375 12.9688 8.03125 12.9688 6.5C12.9688 2.9375 10.0312 0 6.46875 0C2.875 0 0 2.9375 0 6.5C0 10.0938 2.90625 13 6.46875 13C7.96875 13 9.375 12.5 10.5 11.5938L14.6875 15.7812C14.8438 15.9375 15.0312 16 15.25 16C15.4375 16 15.625 15.9375 15.75 15.7812C16.0625 15.5 16.0625 15.0312 15.75 14.7188ZM1.5 6.5C1.5 3.75 3.71875 1.5 6.5 1.5C9.25 1.5 11.5 3.75 11.5 6.5C11.5 9.28125 9.25 11.5 6.5 11.5C3.71875 11.5 1.5 9.28125 1.5 6.5Z" fill="#1F1F25"></path>
                                            </svg>

                                        </div>
                                        <div className="menu-btn" id="menu-btn">

                                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="14" width="20" height="2" fill="#1F1F25"></rect>
                                                <rect y="7" width="20" height="2" fill="#1F1F25"></rect>
                                                <rect width="20" height="2" fill="#1F1F25"></rect>
                                            </svg>

                                        </div>
                                    </div>
                                    <div className="accont-wishlist-cart-area-header">
                                        <a  className="btn-border-only account" onClick={() => routeCart('account')}>
                                            <i className="fa-light fa-user"></i>
                                            <span>Account</span>
                                        </a>
                                        <a className="btn-border-only wishlist">
                                            <i className="fa-regular fa-heart"></i>
                                            <span className="text">Wishlist</span>
                                            <span className="number">2</span>
                                        </a>
                                        <div className="btn-border-only cart category-hover-header">
    <i className="fa-sharp fa-regular fa-cart-shopping"></i>
    <span className="text">My Cart</span>
    <span className="number">{cartDataLength}</span>
    <div className="category-sub-menu card-number-show">
        <h5 className="shopping-cart-number">Shopping Cart ({cartDataLength})</h5>
        {cartData.map((cart) => (
        <div className="cart-item-1 border-top" key={cart.productName}>
            <div className="img-name">
                <div className="thumbanil">
                    <img src={cart.productImage} alt="" />
                </div>
                <div className="details">
                    <a href="shop-details.html">
                        <h5 className="title">{cart.productName}</h5>
                    </a>
                    <div className="number">
                        {cart.quantity}<i className="fa-regular fa-x"></i>
                        <span>₹{cart.productCurrentRate}</span>
                    </div>
                </div>
            </div>
            <div className="close-c1" onClick={() => RemoveCart(cart.productId)}>
                <i className="fa-regular fa-x"></i>
            </div>
        </div>
        ))}
        <div className="sub-total-cart-balance">
            <div className="bottom-content-deals mt--10">
                <div className="top">
                    <span>Sub Total:</span>
                    {/* Subtotal Calculation */}
                    <span className="number-c">₹{cartData.reduce((total, cart) => total + (cart.productCurrentRate * cart.quantity), 0)}</span>
                </div>
                <div className="single-progress-area-incard">
                    <div className="progress">
                        <div className="progress-bar wow fadeInLeft" role="progressbar" style={{width:'80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <p>Spend More <span>₹{cartData.reduce((total, cart) => total + (cart.productCurrentRate * cart.quantity), 0)}</span> to reach <span>Free Shipping</span></p>
            </div>
            <div className="button-wrapper d-flex align-items-center justify-content-between">
    <a className="rts-btn btn-primary" onClick={() => routeCart(1)}>View Cart</a>
    <a className="rts-btn btn-primary border-only" onClick={() => routeCart(2)}>CheckOut</a>
</div>

        </div>
    </div>
</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rts-header-nav-area-one header--sticky">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="nav-and-btn-wrapper">
                                    <div className="nav-area">
                                        <nav>
                                            <ul className="parent-nav">
                                                <li className="parent has-dropdown">
                                                    <a className="pointer" onClick={() => RouteTo('home')}>Home</a>
                                                    {/* <ul className="submenu">
                                                        <li><a className="sub-b" href="index-2.html">Home One</a></li>
                                                        <li><a className="sub-b" href="index-two.html">Home Two</a></li>
                                                        <li><a className="sub-b" href="index-three.html">Home Three</a></li>
                                                        <li><a className="sub-b" href="index-four.html">Home Four</a></li>
                                                        <li><a className="sub-b" href="index-five.html">Home Five</a></li>
                                                    </ul> */}
                                                </li>
                                                <li className="parent"><a className='pointer' onClick={() => RouteTo('about')}>About</a></li>
                                                <li className="parent with-megamenu">
                                                    <a href="http://google.com">Shop</a>
                                                    <div className="rts-megamenu">
                                                        <div className="wrapper">
                                                            <div className="row align-items-center">
                                                                <div className="col-lg-8">
                                                                    <div className="megamenu-item-wrapper">

                                                                        <div className="single-megamenu-wrapper">
                                                                            <p className="title">Shop Layout</p>
                                                                            <ul>
                                                                                <li><a href="shop-grid-sidebar.html">Shop Grid Sidebar</a></li>
                                                                                <li><a href="shop-list-sidebar.html">Shop list Sidebar</a></li>
                                                                                <li><a href="shop-grid-top-filter.html">Shop Top Filter Grid</a></li>
                                                                                <li><a href="shop-list-top-filter.html">Shop Top Filter List</a></li>
                                                                            </ul>
                                                                        </div>


                                                                        <div className="single-megamenu-wrapper">
                                                                            <p className="title">Shop Details</p>
                                                                            <ul>
                                                                                <li><a className="sub-b" href="shop-details.html">Shop Details</a></li>
                                                                                <li><a className="sub-b" href="shop-details-2.html">Shop Details V2</a></li>
                                                                                <li><a className="sub-b" href="shop-details-right-sidebar.html">Shop Details V3</a></li>
                                                                                <li><a className="sub-b" href="shop-details-4.html">Shop Details V4</a></li>
                                                                            </ul>
                                                                        </div>


                                                                        <div className="single-megamenu-wrapper">
                                                                            <p className="title">Product Feature</p>
                                                                            <ul>
                                                                                <li><a className="sub-b" href="shop-details-variable.html">Variable product</a></li>
                                                                                <li><a className="sub-b" href="shop-details-affiliats.html">Affiliate product</a></li>
                                                                                <li><a className="sub-b" href="shop-details-group.html">Shop Details Group</a></li>
                                                                                <li><a className="sub-b" href="shop-compare.html">Shop Compare</a></li>
                                                                            </ul>
                                                                        </div>


                                                                        <div className="single-megamenu-wrapper">
                                                                            <p className="title">Shop Others</p>
                                                                            <ul>
                                                                                <li><a className="sub-b" href="cart.html">Cart</a></li>
                                                                                <li><a className="sub-b" href="checkout.html">Checkout</a></li>
                                                                                <li><a className="sub-b" href="trackorder.html">Track Order</a></li>
                                                                            </ul>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <a href="shop-grid-sidebar.html" className="feature-add-megamenu-area">
                                                                        <img src="images/feature/05.jpg" alt="feature_product" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="parent has-dropdown">
                                                    <a className="nav-link" href="http://google.com">Vendors</a>
                                                    <ul className="submenu">
                                                        <li><a className="sub-b" href="vendor-list.html">Vendor List</a></li>
                                                        <li><a className="sub-b" href="vendor-grid.html">Vendor Grid</a></li>
                                                        <li><a className="sub-b" href="vendor-details.html">Vendor Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="parent has-dropdown">
                                                    <a className="nav-link" href="http://google.com">Pages</a>
                                                    <ul className="submenu">
                                                        <li><a className="sub-b" onClick={() => RouteTo('about')}>About</a></li>
                                                        <li><a className="sub-b" href="store.html">Store</a></li>
                                                        <li><a className="sub-b" href="faq.html">Faq's</a></li>
                                                        <li><a className="sub-b" href="invoice.html">Invoice</a></li>
                                                        <li><a className="sub-b" onClick={() => RouteTo('contact')}>Contact</a></li>
                                                        <li><a className="sub-b" href="register.html">Register</a></li>
                                                        <li><a className="sub-b" href="login.html">Login</a></li>
                                                        <li><a className="sub-b" href="privacy-policy.html">Privacy Policy</a></li>
                                                        <li><a className="sub-b" href="cookies-policy.html">Cookies Policy</a></li>
                                                        <li><a className="sub-b" href="terms-condition.html">Terms & Condition</a></li>
                                                        <li><a className="sub-b" href="404.html">Error</a></li>
                                                    </ul>
                                                </li>
                                                <li className="parent has-dropdown">
                                                    <a className="nav-link" href="http://google.com">Blog</a>
                                                    <ul className="submenu">
                                                        <li><a className="sub-b" href="blog.html">Blog</a></li>
                                                        <li><a className="sub-b" href="blog-list-left-sidebar.html">Blog List Right Sidebar</a></li>
                                                        <li><a className="sub-b" href="blog-list-right-sidebar.html">Blog List Left Sidebar</a></li>
                                                        <li><a className="sub-b" href="blog-details.html">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="parent" onClick={() => RouteTo('contact')}><a className='pointer'>Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="right-btn-area">
                                        <a href="http://google.com" className="btn-narrow">Trending Products</a>
                                        <button className="rts-btn btn-primary">
                                            Get 30% Discount Now
                                            <span>Sale</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="logo-search-category-wrapper after-md-device-header">
                                    <a href="index-2.html" className="logo-area">
                                        <img src="images/logo/logo-01.svg" alt="logo-main" className="logo" />
                                    </a>
                                    <div className="category-search-wrapper">
                                        <div className="category-btn category-hover-header">
                                            <img className="parent" src="images/icons/bar-1.svg" alt="icons" />
                                            <span>Categories</span>
                                            <ul className="category-sub-menu">
                                                <li>
                                                    <a href="http://google.com" className="menu-item">
                                                        <img src="images/icons/01.svg" alt="icons" />
                                                        <span>Breakfast & Dairy</span>
                                                        <i className="fa-regular fa-plus"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://google.com" className="menu-item">
                                                        <img src="images/icons/02.svg" alt="icons" />
                                                        <span>Meats & Seafood</span>
                                                        <i className="fa-regular fa-plus"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://google.com" className="menu-item">
                                                        <img src="images/icons/03.svg" alt="icons" />
                                                        <span>Breads & Bakery</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://google.com" className="menu-item">
                                                        <img src="images/icons/04.svg" alt="icons" />
                                                        <span>Chips & Snacks</span>
                                                        <i className="fa-regular fa-plus"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://google.com" className="menu-item">
                                                        <img src="images/icons/05.svg" alt="icons" />
                                                        <span>Medical Healthcare</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://google.com" className="menu-item">
                                                        <img src="images/icons/06.svg" alt="icons" />
                                                        <span>Breads & Bakery</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://google.com" className="menu-item">
                                                        <img src="images/icons/07.svg" alt="icons" />
                                                        <span>Biscuits & Snacks</span>
                                                        <i className="fa-regular fa-plus"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://google.com" className="menu-item">
                                                        <img src="images/icons/08.svg" alt="icons" />
                                                        <span>Frozen Foods</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://google.com" className="menu-item">
                                                        <img src="images/icons/09.svg" alt="icons" />
                                                        <span>Grocery & Staples</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="http://google.com" className="menu-item">
                                                        <img src="images/icons/10.svg" alt="icons" />
                                                        <span>Other Items</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <form action="#" className="search-header">
                                            <input type="text" placeholder="Search for products, categories or brands" required />
                                            <button className="rts-btn btn-primary radious-sm with-icon">
                                                <span className="btn-text">
                                                    Search
                                                </span>
                                                <span className="arrow-icon">
                                                    <i className="fa-light fa-magnifying-glass"></i>
                                                </span>
                                                <span className="arrow-icon">
                                                    <i className="fa-light fa-magnifying-glass"></i>
                                                </span>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="main-wrapper-action-2 d-flex">
                                        <div className="accont-wishlist-cart-area-header">
                                            <a href="account.html" className="btn-border-only account">
                                                <i className="fa-light fa-user"></i>
                                                Account
                                            </a>
                                            <a href="wishlist.html" className="btn-border-only wishlist">
                                                <i className="fa-regular fa-heart"></i>
                                                Wishlist
                                            </a>
                                            <div className="btn-border-only cart category-hover-header">
                                                <i className="fa-sharp fa-regular fa-cart-shopping"></i>
                                                <span className="text">My Cart</span>
                                                <div className="category-sub-menu card-number-show">
                                                    <h5 className="shopping-cart-number">Shopping Cart (03)</h5>
                                                    <div className="cart-item-1 border-top">
                                                        <div className="img-name">
                                                            <div className="thumbanil">
                                                                <img src="images/shop/cart-1.png" alt="" />
                                                            </div>
                                                            <div className="details">
                                                                <a href="shop-details.html">
                                                                    <h5 className="title">Foster Farms Breast Nuggets Shaped Chicken</h5>
                                                                </a>
                                                                <div className="number">
                                                                    1 <i className="fa-regular fa-x"></i>
                                                                    <span>$36.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="close-c1">
                                                            <i className="fa-regular fa-x"></i>
                                                        </div>
                                                    </div>
                                                    <div className="cart-item-1">
                                                        <div className="img-name">
                                                            <div className="thumbanil">
                                                                <img src="images/shop/05.png" alt="" />
                                                            </div>
                                                            <div className="details">
                                                                <a href="shop-details.html">
                                                                    <h5 className="title">Foster Farms Breast Nuggets Shaped Chicken</h5>
                                                                </a>
                                                                <div className="number">
                                                                    1 <i className="fa-regular fa-x"></i>
                                                                    <span>$36.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="close-c1">
                                                            <i className="fa-regular fa-x"></i>
                                                        </div>
                                                    </div>
                                                    <div className="cart-item-1">
                                                        <div className="img-name">
                                                            <div className="thumbanil">
                                                                <img src="images/shop/04.png" alt="" />
                                                            </div>
                                                            <div className="details">
                                                                <a href="shop-details.html">
                                                                    <h5 className="title">Foster Farms Breast Nuggets Shaped Chicken</h5>
                                                                </a>
                                                                <div className="number">
                                                                    1 <i className="fa-regular fa-x"></i>
                                                                    <span>$36.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="close-c1">
                                                            <i className="fa-regular fa-x"></i>
                                                        </div>
                                                    </div>
                                                    <div className="sub-total-cart-balance">
                                                        <div className="bottom-content-deals mt--10">
                                                            <div className="top">
                                                                <span>Sub Total:</span>
                                                                <span className="number-c">$108.00</span>
                                                            </div>
                                                            <div className="single-progress-area-incard">
                                                                <div className="progress">
                                                                    <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                            <p>Spend More <span>$125.00</span> to reach <span>Free Shipping</span></p>
                                                        </div>
                                                        <div className="button-wrapper d-flex align-items-center justify-content-between">
                                                            <a href="cart.html" className="rts-btn btn-primary ">View Cart</a>
                                                            <a href="checkout.html" className="rts-btn btn-primary border-only">CheckOut</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="cart.html" className="over_link"></a>
                                            </div>
                                        </div>
                                        <div className="actions-area">
                                            <div className="search-btn" id="search">

                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.75 14.7188L11.5625 10.5312C12.4688 9.4375 12.9688 8.03125 12.9688 6.5C12.9688 2.9375 10.0312 0 6.46875 0C2.875 0 0 2.9375 0 6.5C0 10.0938 2.90625 13 6.46875 13C7.96875 13 9.375 12.5 10.5 11.5938L14.6875 15.7812C14.8438 15.9375 15.0312 16 15.25 16C15.4375 16 15.625 15.9375 15.75 15.7812C16.0625 15.5 16.0625 15.0312 15.75 14.7188ZM1.5 6.5C1.5 3.75 3.71875 1.5 6.5 1.5C9.25 1.5 11.5 3.75 11.5 6.5C11.5 9.28125 9.25 11.5 6.5 11.5C3.71875 11.5 1.5 9.28125 1.5 6.5Z" fill="#1F1F25"></path>
                                                </svg>

                                            </div>
                                            <div className="menu-btn">

                                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect y="14" width="20" height="2" fill="#1F1F25"></rect>
                                                    <rect y="7" width="20" height="2" fill="#1F1F25"></rect>
                                                    <rect width="20" height="2" fill="#1F1F25"></rect>
                                                </svg>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
