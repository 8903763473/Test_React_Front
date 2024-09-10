import React, { useState } from 'react';
import './checkout.scss';




const Checkout = ({ setLoading }) => {
return(
<div>
<div className="rts-header-one-area-one">
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
                                        <a href="account.html" className="btn-border-only account">
                                            <i className="fa-light fa-user"></i>
                                            <span>Account</span>
                                        </a>
                                        <a href="wishlist.html" className="btn-border-only wishlist">
                                            <i className="fa-regular fa-heart"></i>
                                            <span className="text">Wishlist</span>
                                            <span className="number">2</span>
                                        </a>
                                        <div className="btn-border-only cart category-hover-header">
                                            <i className="fa-sharp fa-regular fa-cart-shopping"></i>
                                            <span className="text">My Cart</span>
                                            <span className="number">2</span>
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
                                                        {/* <div className="single-progress-area-incard">
                                                            <div className="progress">
                                                                <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div> */}
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
                                                    <a className="nav-link" href="http://google.com">Home</a>
                                                    <ul className="submenu">
                                                        <li><a className="sub-b" href="index-2.html">Home One</a></li>
                                                        <li><a className="sub-b" href="index-two.html">Home Two</a></li>
                                                        <li><a className="sub-b" href="index-three.html">Home Three</a></li>
                                                        <li><a className="sub-b" href="index-four.html">Home Four</a></li>
                                                        <li><a className="sub-b" href="index-five.html">Home Five</a></li>
                                                    </ul>
                                                </li>
                                                <li className="parent"><a href="about.html">About</a></li>
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
                                                        <li><a className="sub-b" href="about.html">About</a></li>
                                                        <li><a className="sub-b" href="store.html">Store</a></li>
                                                        <li><a className="sub-b" href="faq.html">Faq's</a></li>
                                                        <li><a className="sub-b" href="invoice.html">Invoice</a></li>
                                                        <li><a className="sub-b" href="contact.html">Contact</a></li>
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
                                                <li className="parent"><a href="contact.html">Contact</a></li>
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
                                                            {/* <div className="single-progress-area-incard">
                                                                <div className="progress">
                                                                    <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div> */}
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
            <div id="side-bar" className="side-bar header-two">
                <button className="close-icon-menu"><i className="far fa-times"></i></button>


                <form action="#" className="search-input-area-menu mt--30">
                    <input type="text" placeholder="Search..." required />
                    <button><i className="fa-light fa-magnifying-glass"></i></button>
                </form>

                <div className="mobile-menu-nav-area tab-nav-btn mt--20">

                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Menu</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Category</button>
                        </div>
                    </nav>

                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">

                            <div className="mobile-menu-main">
                                <nav className="nav-main mainmenu-nav mt--30">
                                    <ul className="mainmenu metismenu" id="mobile-menu-active">
                                        <li className="has-droupdown">
                                            <a href="http://google.com" className="main">Home</a>
                                            <ul className="submenu mm-collapse">
                                                <li><a className="mobile-menu-link" href="index-2.html">Home One</a></li>
                                                <li><a className="mobile-menu-link" href="index-two.html">Home Two</a></li>
                                                <li><a className="mobile-menu-link" href="index-three.html">Home Three</a></li>
                                                <li><a className="mobile-menu-link" href="index-four.html">Home Four</a></li>
                                                <li><a className="mobile-menu-link" href="index-five.html"> Home Five</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="about.html" className="main">About</a>
                                        </li>
                                        <li className="has-droupdown">
                                            <a href="http://google.com" className="main">Pages</a>
                                            <ul className="submenu mm-collapse">
                                                <li><a className="mobile-menu-link" href="about.html">About</a></li>
                                                <li><a className="mobile-menu-link" href="faq.html">Faq's</a></li>
                                                <li><a className="mobile-menu-link" href="invoice.html">Invoice</a></li>
                                                <li><a className="mobile-menu-link" href="contact.html">Contact</a></li>
                                                <li><a className="mobile-menu-link" href="register.html">Register</a></li>
                                                <li><a className="mobile-menu-link" href="login.html">Login</a></li>
                                                <li><a className="mobile-menu-link" href="privacy-policy.html">Privacy Policy</a></li>
                                                <li><a className="mobile-menu-link" href="cookies-policy.html">Cookies Policy</a></li>
                                                <li><a className="mobile-menu-link" href="terms-condition.html">Terms Condition</a></li>
                                                <li><a className="mobile-menu-link" href="404.html">Error Page</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-droupdown">
                                            <a href="http://google.com" className="main">Shop</a>
                                            <ul className="submenu mm-collapse">
                                                <li className="has-droupdown third-lvl">
                                                    <a className="main" href="http://google.com">Shop Layout</a>
                                                    <ul className="submenu-third-lvl mm-collapse">
                                                        <li><a href="shop-grid-sidebar.html">SHOP GRID SLIDEBAR</a>Shop Grid Sidebar</li>
                                                        <li><a href="shop-list-sidebar.html">SHOP LIST SILDEBAR</a>Shop List Sidebar</li>
                                                        <li><a href="shop-grid-top-filter.html">SHOP GRID TOP FILTER</a>Shop Grid Top Filter</li>
                                                        <li><a href="shop-list-top-filter.html">SHOP LIST TOP FILTER</a>Shop List Top Filter</li>
                                                    </ul>
                                                </li>
                                                <li className="has-droupdown third-lvl">
                                                    <a className="main" href="http://google.com">Shop Details</a>
                                                    <ul className="submenu-third-lvl mm-collapse">
                                                        <li><a href="shop-details.html">SHOP DETAILS</a>Shop Details</li>
                                                        <li><a href="shop-details-2.html">SHOP DETAILS 2</a>Shop Details 2</li>
                                                        <li><a href="shop-grid-top-filter.html">SHOP GRID TOP FILTER</a>Shop Grid Top Filter</li>
                                                        <li><a href="shop-list-top-filter.html">SHOP LIST TOP FILTER</a>Shop List Top Filter</li>
                                                    </ul>
                                                </li>
                                                <li className="has-droupdown third-lvl">
                                                    <a className="main" href="http://google.com">Product Feature</a>
                                                    <ul className="submenu-third-lvl mm-collapse">
                                                        <li><a href="shop-details-variable.html">SHOP DETAILS VARIABLE</a>Shop Details Variable</li>
                                                        <li><a href="shop-details-affiliats.html">SHOP DETAILS AFFILIATS</a>Shop Details Affiliats</li>
                                                        <li><a href="shop-details-group.html">SHOP DETAILS GROUP</a>Shop Details Group</li>
                                                        <li><a href="shop-compare.html">SHOP COMPARE</a>Shop Compare</li>
                                                    </ul>
                                                </li>
                                                <li className="has-droupdown third-lvl">
                                                    <a className="main" href="http://google.com">Shop Others</a>
                                                    <ul className="submenu-third-lvl mm-collapse">
                                                        <li><a href="cart.html">CART</a>Cart</li>
                                                        <li><a href="checkout.html">CHECKOUT</a>Checkout</li>
                                                        <li><a href="trackorder.html">TRACK ORDER</a>Trackorder</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-droupdown">
                                            <a href="http://google.com" className="main">Blog</a>
                                            <ul className="submenu mm-collapse">
                                                <li><a className="mobile-menu-link" href="blog.html">Blog</a></li>
                                                <li><a className="mobile-menu-link" href="blog-list-left-sidebar.html">Blog Left Sidebar</a></li>
                                                <li><a className="mobile-menu-link" href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact.html" className="main">Contact Us</a>
                                        </li>
                                    </ul>
                                </nav>

                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                            <div className="category-btn category-hover-header menu-category">
                                <ul className="category-sub-menu" id="category-active-menu">
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
                        </div>
                    </div>

                </div>

                <div className="button-area-main-wrapper-menuy-sidebar mt--50">
                    <div className="contact-area">
                        <div className="phone">
                            <i className="fa-light fa-headset"></i>
                            <a href="http://google.com">02345697871</a>
                        </div>
                        <div className="phone">
                            <i className="fa-light fa-envelope"></i>
                            <a href="http://google.com">02345697871</a>
                        </div>
                    </div>
                    <div className="buton-area-bottom">
                        <a href="login.html" className="rts-btn btn-primary">Sign In</a>
                        <a href="register.html" className="rts-btn btn-primary">Sign Up</a>
                    </div>
                </div>

            </div>

         

    
            <div class="checkout-area rts-section-gap">
        <div class="container">
            <div class="row">
          <div class="col-lg-8 pr--40 pr_md--5 pr_sm--5 order-2 order-xl-1 order-lg-2 order-md-2 order-sm-2 mt_md--30 mt_sm--30">
                    {/* <div class="coupon-input-area-1 login-form">
                        <div class="coupon-area">
                            <div class="coupon-ask">
                                <span>Returning customers?</span>
                                <button class="coupon-click"> Click here to login</button>
                            </div>
                            <div class="coupon-input-area">
                                <div class="inner">
                                    <p>If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing section.</p>
                                    <form action="#">
                                        <input type="email" placeholder="User Name..."/>
                                        <input type="password" placeholder="Enter password..."/>

                                        <button type="submit" class="btn-primary rts-btn">Log In</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="coupon-input-area-1">
                        <div class="coupon-area">
                            <div class="coupon-ask  cupon-wrapper-1">
                                <button class="coupon-click">Have a coupon? Click here to enter your code</button>
                            </div>
                            <div class="coupon-input-area cupon1">
                                <div class="inner">
                                    <p class="mt--0 mb--20"> If you have a coupon code, please apply it below.</p>
                                    <div class="form-area">
                                        <input type="text" placeholder="Enter Coupon Code..."/>
                                        <button type="submit" class="btn-primary rts-btn">Apply Coupon</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div class="rts-billing-details-area">
                        <h3 class="title">Billing Details</h3>
                        <form action="#">
                        <div class="half-input-wrapper">
                            <div class="single-input">
                                <label for="phone">Phone*</label>
                                <input id="phone" type="text"/>
                            </div>
                            <div class="single-input">
                                <label for="email">Email Address*</label>
                                <input id="email" type="text" required/>
                            </div>
                            </div>
                            <div class="half-input-wrapper">
                                <div class="single-input">
                                    <label for="f-name">First Name*</label>
                                    <input id="f-name" type="text" required/>
                                </div>
                                <div class="single-input">
                                    <label for="l-name">Last Name*</label>
                                    <input id="l-name" type="text"/>
                                </div>
                            </div>
                            <div class="half-input-wrapper">
                            <div class="single-input">
                                <label for="comp">Company Name (Optional)*</label>
                                <input id="comp" type="text"/>
                            </div>
                            <div class="single-input">
                                <label for="country">Country / Region*</label>
                                <input id="country" type="text"/>
                            </div>
                            </div>
                            <div class="half-input-wrapper">
                            <div class="single-input">
                                <label for="street">Street Address*</label>
                                <input id="street" type="text" required/>
                            </div>
                            <div class="single-input">
                                <label for="city">Town / City*</label>
                                <input id="city" type="text"/>
                            </div>
                            </div>
                            <div class="half-input-wrapper">
                            <div class="single-input">
                                <label for="state">State*</label>
                                <input id="state" type="text"/>
                            </div>
                            <div class="single-input">
                                <label for="zip">Zip Code*</label>
                                <input id="zip" type="text" required/>
                            </div>
                            </div>
                           
                            <div class="single-input">
                                <label for="ordernotes">Order Notes*</label>
                                <textarea id="ordernotes"></textarea>
                            </div>
                            <button class="rts-btn btn-primary">Update Cart</button>
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
                <div className="single-shop-list">
                  <div className="left-area">
                    <a href="#" className="thumbnail">
                      <img src="/images/shop/04.png" alt="Product" />
                    </a>
                    <a href="#" className="title">Foster Farms Breast Nuggets Shaped Chicken</a>
                  </div>
                  <span className="price">$500.00</span>
                </div>
                {/* Add more products as needed */}
                <div className="single-shop-list">
                  <div className="left-area">
                    <span>Subtotal</span>
                  </div>
                  <span className="price">$500.00</span>
                </div>
                <div className="single-shop-list">
                  <div className="left-area">
                    <span>Shipping</span>
                  </div>
                  <span className="price">Flat rate: $50.00</span>
                </div>
                <div className="single-shop-list">
                  <div className="left-area">
                    <span style={{ fontWeight: 600, color: '#2C3C28' }}>Total Price:</span>
                  </div>
                  <span className="price" style={{ color: '#629D23' }}>$550.00</span>
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
                  <a href="#" className="rts-btn btn-primary">Place Order</a>
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
</div>
);
    
}

export default Checkout;