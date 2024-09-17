import React, { useEffect, useState, useCallback, useRef } from 'react';
import './Home.scss';
import api from "../../ApiService/apiService";
// import { useNavigate } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import NotificationCenter from '../../CommonModule/Notification/Notification';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ setLoading }) => {

    const [allCategories, setallCategories] = useState([])
    const [highOfferProducts, sethighOfferProducts] = useState([])
    const [trendingProducts, setTrendingProducts] = useState([])

    const navigate = useNavigate();

    const ProductDetail = (data) => {
        console.log(data);
        navigate('/productDetail/' + data);
    };

    const getAllCategories = () => {
        api.getAllCategory()
            .then(response => {
                console.log("Categories:", response.data);
                setallCategories(response.data);
                getHighOfferProducts();
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
            });
    }

    useEffect(() => {
        getAllCategories();
    }, []);

    const notificationRef = useRef();
    const triggerNotification = (type, title, subtitle, button, path) => {
        if (notificationRef.current) {
            notificationRef.current.spawnNotification(type, title, subtitle, button, path);
        }
    };

    const addCart = (data) => {
        console.log(data);
        const isLogged = localStorage.getItem('login')
        if (isLogged == 'success') {
            console.log('Cart Added');

            let post = {
                "productId": data._id,
                "quantity": data.productQuantity,
                "userId": localStorage.getItem('userId')
            }
            api.AddToCart(post)
                .then(response => {
                    console.log(response.data);
                    triggerNotification('success', 'Success', 'Successfully Added in cart', 'x', null)
                }).catch(error => {
                    console.log(error.response.data.message);
                    triggerNotification('error', 'Error', error.response.data.message, 'x', null)
                })
        } else {
            console.log('Kindly Loggin');
            triggerNotification('warning', 'Warning', 'Login to continue !', null, 'login')
        }
    }

    const getHighOfferProducts = () => {
        api.highOfferProducts()
            .then(response => {
                console.log("highOfferProducts:", response.data);
                sethighOfferProducts(response.data);
                getTrendingProducts();
            })
            .catch(error => {
                console.error("Error fetching highOfferProducts:", error);
            });
    }


    const getTrendingProducts = () => {
        api.trendingProducts()
            .then(response => {
                console.log("trendingProducts:", response.data.data);
                setTrendingProducts(response.data.data)
            })
            .catch(error => {
                console.error("Error fetching highOfferProducts:", error);
            });
    }


    return (
        <div className='Fullpage'>


             <NotificationCenter ref={notificationRef} />

            <Header /> 
             {/* <section className="shop-main-h">  */}

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
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">

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
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
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

            <div className="background-light-gray-color rts-section-gap bg_light-1 pt_sm--20">
                <div className="rts-banner-area-one mb--30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="category-area-main-wrapper-one">
                                    <div className="swiper mySwiper-category-1 swiper-data" data-swiper='{
                            "spaceBetween":1,
                            "slidesPerView":1,
                            "loop": true,
                            "speed": 2000,
                            "autoplay":{
                                "delay":"4000"
                            },
                            "navigation":{
                                "nextEl":".swiper-button-next",
                                "prevEl":".swiper-button-prev"
                            },
                            "breakpoints":{
                            "0":{
                                "slidesPerView":1,
                                "spaceBetween": 0},
                            "320":{
                                "slidesPerView":1,
                                "spaceBetween":0},
                            "480":{
                                "slidesPerView":1,
                                "spaceBetween":0},
                            "640":{
                                "slidesPerView":1,
                                "spaceBetween":0},
                            "840":{
                                "slidesPerView":1,
                                "spaceBetween":0},
                            "1140":{
                                "slidesPerView":1,
                                "spaceBetween":0}
                            }
                        }'>
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="banner-bg-image bg_image bg_one-banner  ptb--120 ptb_md--80 ptb_sm--60">
                                                    <div className="banner-one-inner-content">
                                                        <span className="pre">Get up to 30% off on your first $150 purchase</span>
                                                        <h1 className="title">
                                                            Do not miss our amazing   <br />
                                                            grocery deals
                                                        </h1>
                                                        <a href="shop-grid-sidebar.html" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Shop Now
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="banner-bg-image bg_image bg_one-banner two  ptb--120 ptb_md--80 ptb_sm--60">
                                                    <div className="banner-one-inner-content">
                                                        <span className="pre">Get up to 30% off on your first $150 purchase</span>
                                                        <h1 className="title">
                                                            Do not miss our amazing   <br />
                                                            grocery deals
                                                        </h1>
                                                        <a href="shop-grid-sidebar.html" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Shop Now
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="swiper-button-next"><i className="fa-regular fa-arrow-right"></i></button>
                                        <button className="swiper-button-prev"><i className="fa-regular fa-arrow-left"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rts-caregory-area-one ">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12">
                            <div className="category-area-main-wrapper-one" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>

                                {allCategories.map((cart) => (
                                    <div className="swiper mySwiper-category-1 swiper-data" data-swiper='{
                            "spaceBetween":12,
                            "slidesPerView":10,
                            "loop": true,
                            "speed": 1000,
                            "breakpoints":{
                            "0":{
                                "slidesPerView":2,
                                "spaceBetween": 12},
                            "320":{
                                "slidesPerView":2,
                                "spaceBetween":12},
                            "480":{
                                "slidesPerView":3,
                                "spaceBetween":12},
                            "640":{
                                "slidesPerView":4,
                                "spaceBetween":12},
                            "840":{
                                "slidesPerView":4,
                                "spaceBetween":12},
                            "1140":{
                                "slidesPerView":10,
                                "spaceBetween":12}
                            }
                        }' style={{ width: '20%'}}>     
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <a href="shop-grid-sidebar.html" className="single-category-one">
                                                    <img src={cart.image} alt="category" />
                                                    <p>{cart.name}</p>
                                                </a>
                                            </div>
                                            
                                        </div>
                                        
                        
                                    </div>
                                   
                                       ))}
                                </div>
                            </div>
                     
                        </div>
                    </div>
                </div>
            </div>


            <div className="rts-feature-area rts-section-gap">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-xl-20 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="single-feature-area">
                                <div className="icon">
                                    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M36.7029 6.29715C32.642 2.23634 27.2429 0 21.5 0C15.7571 0 10.358 2.23634 6.29715 6.29715C2.23642 10.358 0 15.7571 0 21.5C0 27.2429 2.23642 32.642 6.29715 36.7029C10.358 40.7637 15.7571 43 21.5 43C27.2429 43 32.642 40.7637 36.7029 36.7029C40.7636 32.642 43 27.2429 43 21.5C43 15.7571 40.7636 10.358 36.7029 6.29715ZM21.5 40.4805C11.0341 40.4805 2.51953 31.9659 2.51953 21.5C2.51953 11.0341 11.0341 2.51953 21.5 2.51953C31.9659 2.51953 40.4805 11.0341 40.4805 21.5C40.4805 31.9659 31.9659 40.4805 21.5 40.4805Z" fill="#629D23" />
                                        <path d="M22.8494 20.2402H20.1506C18.6131 20.2402 17.3623 18.9895 17.3623 17.452C17.3623 15.9145 18.6132 14.6638 20.1506 14.6638H25.548C26.2438 14.6638 26.8078 14.0997 26.8078 13.404C26.8078 12.7083 26.2438 12.1442 25.548 12.1442H22.7598V9.35594C22.7598 8.66022 22.1957 8.09618 21.5 8.09618C20.8043 8.09618 20.2402 8.66022 20.2402 9.35594V12.1442H20.1507C17.2239 12.1442 14.8429 14.5253 14.8429 17.452C14.8429 20.3787 17.224 22.7598 20.1507 22.7598H22.8495C24.3869 22.7598 25.6377 24.0106 25.6377 25.548C25.6377 27.0855 24.3869 28.3363 22.8495 28.3363H17.452C16.7563 28.3363 16.1923 28.9004 16.1923 29.5961C16.1923 30.2918 16.7563 30.8559 17.452 30.8559H20.2402V33.6442C20.2402 34.34 20.8043 34.904 21.5 34.904C22.1957 34.904 22.7598 34.34 22.7598 33.6442V30.8559H22.8494C25.7761 30.8559 28.1571 28.4747 28.1571 25.548C28.1571 22.6214 25.7761 20.2402 22.8494 20.2402Z" fill="#629D23" />
                                    </svg>
                                </div>
                                <div className="content">
                                    <h4 className="title">Wide Assortment</h4>
                                    <span>Orders $50 or more</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-20 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="single-feature-area">
                                <div className="icon">
                                    <svg width="37" height="44" viewBox="0 0 37 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M35.0347 19.5029C32.0518 11.3353 26.6248 5.76684 26.3952 5.53386L24.2276 3.33326V11.6016C24.2276 12.3124 23.658 12.8906 22.9578 12.8906C22.2577 12.8906 21.688 12.3124 21.688 11.6016C21.688 5.20446 16.5614 0 10.26 0H8.99021V1.28906C8.99021 7.30933 5.09884 11.646 2.14143 17.2212C-0.841884 22.8449 -0.69916 29.7349 2.51381 35.2021C5.7234 40.6636 11.5291 44 17.7786 44H18.3686C24.1822 44 29.6369 41.1045 32.9597 36.2545C36.2819 31.4054 37.056 25.0371 35.0347 19.5029ZM30.8748 34.7824C28.0265 38.9398 23.3513 41.4219 18.3686 41.4219H17.7786C12.4416 41.4219 7.42813 38.5325 4.69471 33.8813C1.93691 29.1886 1.81535 23.2733 4.37726 18.4436C7.17519 13.1691 10.9752 8.81934 11.4744 2.662C15.803 3.26502 19.1483 7.04412 19.1483 11.6015C19.1483 13.7338 20.8572 15.4687 22.9577 15.4687C25.0581 15.4687 26.767 13.7338 26.767 11.6015V9.91607C28.54 12.2131 31.0138 15.9094 32.6534 20.399C34.3856 25.1416 33.704 30.653 30.8748 34.7824Z" fill="#629D23" />
                                        <path d="M16.6089 22C16.6089 19.8676 14.9 18.1328 12.7996 18.1328C10.6991 18.1328 8.99021 19.8676 8.99021 22C8.99021 24.1324 10.6991 25.8672 12.7996 25.8672C14.9 25.8672 16.6089 24.1324 16.6089 22ZM11.5298 22C11.5298 21.2892 12.0994 20.7109 12.7996 20.7109C13.4997 20.7109 14.0693 21.2892 14.0693 22C14.0693 22.7108 13.4997 23.2891 12.7996 23.2891C12.0994 23.2891 11.5298 22.7108 11.5298 22Z" fill="#629D23" />
                                        <path d="M22.9578 28.4453C20.8573 28.4453 19.1485 30.1801 19.1485 32.3125C19.1485 34.4449 20.8573 36.1797 22.9578 36.1797C25.0583 36.1797 26.7672 34.4449 26.7672 32.3125C26.7672 30.1801 25.0583 28.4453 22.9578 28.4453ZM22.9578 33.6016C22.2577 33.6016 21.688 33.0233 21.688 32.3125C21.688 31.6017 22.2577 31.0234 22.9578 31.0234C23.658 31.0234 24.2276 31.6017 24.2276 32.3125C24.2276 33.0233 23.658 33.6016 22.9578 33.6016Z" fill="#629D23" />
                                        <path d="M10.5466 34.0632L23.2407 18.599L25.1911 20.249L12.4969 35.7132L10.5466 34.0632Z" fill="#629D23" />
                                    </svg>

                                </div>
                                <div className="content">
                                    <h4 className="title">Easy Return Policy</h4>
                                    <span>Orders $50 or more</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-20 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="single-feature-area">
                                <div className="icon">
                                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32.2963 41.508C31.8507 41.508 31.4844 41.847 31.4412 42.2812H24.9741L23.9539 36.1376L25.0879 35.0037C25.249 34.8425 25.3396 34.6239 25.3396 34.396C25.3396 34.1681 25.249 33.9496 25.0879 33.7883L24.0845 32.7849H25.799C27.6807 32.7849 29.4317 33.7189 30.4826 35.2833C30.7473 35.6773 31.2813 35.782 31.6752 35.5174C32.0691 35.2527 32.174 34.7188 31.9093 34.3248C30.5492 32.3004 28.29 31.0861 25.8569 31.067C26.6893 30.1451 27.1971 28.9246 27.1971 27.5876V26.3271C27.1971 23.4613 24.8657 21.1298 21.9998 21.1298C19.134 21.1298 16.8025 23.4613 16.8025 26.3271V27.5876C16.8025 28.925 17.3105 30.1456 18.1432 31.0676C14.1133 31.0988 10.8441 34.3856 10.8441 38.4228V43.1406C10.8441 43.6152 11.2288 44 11.7035 44H32.2962C32.7708 44 33.1555 43.6152 33.1555 43.1406V42.3674C33.1557 41.8928 32.771 41.508 32.2963 41.508ZM22.0099 35.6511L20.7548 34.396L22.0099 33.141L23.265 34.396L22.0099 35.6511ZM21.5651 37.6007C21.7014 37.6834 21.8554 37.7258 22.0098 37.7258C22.1641 37.7258 22.3182 37.6835 22.4545 37.6007L23.2318 42.2812H20.7878L21.5651 37.6007ZM18.5214 26.3271C18.5214 24.4091 20.0819 22.8485 22 22.8485C23.9181 22.8485 25.4786 24.409 25.4786 26.3271V27.5876C25.4786 29.5056 23.9181 31.0662 22 31.0662C20.0819 31.0662 18.5214 29.5057 18.5214 27.5876V26.3271ZM12.563 38.4228C12.563 35.314 15.0922 32.7849 18.2009 32.7849H19.9351L18.9317 33.7883C18.7705 33.9496 18.68 34.1681 18.68 34.396C18.68 34.6239 18.7705 34.8425 18.9317 35.0037L20.0657 36.1376L19.0455 42.2812H12.5629L12.563 38.4228Z" fill="#629D23" />
                                        <path d="M10.9901 5.49504C10.9901 2.46504 8.525 0 5.4951 0C2.4652 0 0 2.46513 0 5.49504C0 8.52495 2.46512 10.9901 5.49501 10.9901C8.52491 10.9901 10.9901 8.52503 10.9901 5.49504ZM1.71875 5.49504C1.71875 3.41285 3.41275 1.71876 5.49501 1.71876C7.57728 1.71876 9.27128 3.41285 9.27128 5.49504C9.27128 7.57723 7.57728 9.27132 5.49501 9.27132C3.41275 9.27132 1.71875 7.57731 1.71875 5.49504Z" fill="#629D23" />
                                        <path d="M17.3644 10.9902H26.6357C27.1103 10.9902 27.4951 10.6053 27.4951 10.1308V0.859378C27.4951 0.38483 27.1103 0 26.6357 0H17.3644C16.8897 0 16.505 0.38483 16.505 0.859378V10.1308C16.505 10.6053 16.8897 10.9902 17.3644 10.9902ZM18.2237 1.71876H25.7763V9.2714H18.2237V1.71876Z" fill="#629D23" />
                                        <path d="M43.8848 9.35966L38.9261 0.771034C38.7727 0.505143 38.489 0.341345 38.1819 0.341345C37.8749 0.341345 37.5912 0.505143 37.4377 0.771034L32.479 9.35966C32.3255 9.62555 32.3255 9.95315 32.479 10.219C32.6325 10.4849 32.9162 10.6487 33.2233 10.6487H43.1406C43.4477 10.6487 43.7313 10.4849 43.8848 10.219C44.0384 9.95315 44.0384 9.62555 43.8848 9.35966ZM34.7117 8.92997L38.1818 2.91948L41.652 8.92997H34.7117Z" fill="#629D23" />
                                        <path d="M22 19.4427C22.4746 19.4427 22.8594 19.0579 22.8594 18.5834V16.1313L22.8942 16.1799C23.062 16.4144 23.3258 16.5393 23.5938 16.5393C23.7669 16.5393 23.9417 16.4871 24.0933 16.3786C24.4792 16.1024 24.5681 15.5657 24.2919 15.1797L22.6989 12.9537C22.5375 12.7282 22.2773 12.5944 22.0001 12.5944C21.7228 12.5944 21.4626 12.7282 21.3012 12.9537L19.7082 15.1797C19.432 15.5657 19.521 16.1024 19.9069 16.3786C20.2928 16.6548 20.8296 16.566 21.1059 16.1799L21.1406 16.1313V18.5834C21.1406 19.058 21.5254 19.4427 22 19.4427Z" fill="#629D23" />
                                        <path d="M14.9245 26.4029C14.9245 25.9283 14.5398 25.5435 14.0651 25.5435H6.35937V16.1313L6.39418 16.1799C6.56201 16.4144 6.82584 16.5393 7.09379 16.5393C7.26687 16.5393 7.44167 16.4871 7.59326 16.3786C7.97921 16.1024 8.06815 15.5657 7.79195 15.1797L6.19893 12.9537C6.03754 12.7282 5.77732 12.5944 5.50008 12.5944C5.22285 12.5944 4.96263 12.7282 4.80124 12.9537L3.20822 15.1797C2.93201 15.5657 3.02096 16.1024 3.4069 16.3786C3.79276 16.6548 4.32962 16.566 4.6059 16.1799L4.64062 16.1313V26.4029C4.64062 26.8774 5.02536 27.2622 5.5 27.2622H14.0651C14.5397 27.2622 14.9245 26.8775 14.9245 26.4029Z" fill="#629D23" />
                                        <path d="M39.1988 12.9536C39.0374 12.7281 38.7772 12.5943 38.5 12.5943C38.2227 12.5943 37.9625 12.7281 37.8011 12.9536L36.2081 15.1796C35.9319 15.5656 36.0209 16.1023 36.4068 16.3785C36.7928 16.6548 37.3296 16.5659 37.6058 16.1799L37.6406 16.1313V25.5435H29.9349C29.4602 25.5435 29.0755 25.9283 29.0755 26.4029C29.0755 26.8774 29.4602 27.2622 29.9349 27.2622H38.5C38.9746 27.2622 39.3594 26.8774 39.3594 26.4029V16.1313L39.3942 16.1799C39.562 16.4144 39.8258 16.5393 40.0938 16.5393C40.2669 16.5393 40.4417 16.4871 40.5932 16.3786C40.9792 16.1024 41.0681 15.5657 40.7919 15.1797L39.1988 12.9536Z" fill="#629D23" />
                                        <path d="M32.2962 39.3597C32.7708 39.3597 33.1555 38.9749 33.1555 38.5003C33.1555 38.0257 32.7708 37.6409 32.2962 37.6409C31.8215 37.6409 31.4368 38.0257 31.4368 38.5003C31.4368 38.9749 31.8215 39.3597 32.2962 39.3597Z" fill="#629D23" />
                                    </svg>

                                </div>
                                <div className="content">
                                    <h4 className="title">Best Prices & Offers</h4>
                                    <span>Orders $50 or more</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-20 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="single-feature-area">
                                <div className="icon">
                                    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M36.7029 6.29715C32.642 2.23634 27.2429 0 21.5 0C15.7571 0 10.358 2.23634 6.29715 6.29715C2.23642 10.358 0 15.7571 0 21.5C0 27.2429 2.23642 32.642 6.29715 36.7029C10.358 40.7637 15.7571 43 21.5 43C27.2429 43 32.642 40.7637 36.7029 36.7029C40.7636 32.642 43 27.2429 43 21.5C43 15.7571 40.7636 10.358 36.7029 6.29715ZM21.5 40.4805C11.0341 40.4805 2.51953 31.9659 2.51953 21.5C2.51953 11.0341 11.0341 2.51953 21.5 2.51953C31.9659 2.51953 40.4805 11.0341 40.4805 21.5C40.4805 31.9659 31.9659 40.4805 21.5 40.4805Z" fill="#629D23" />
                                        <path d="M22.8494 20.2402H20.1506C18.6131 20.2402 17.3623 18.9895 17.3623 17.452C17.3623 15.9145 18.6132 14.6638 20.1506 14.6638H25.548C26.2438 14.6638 26.8078 14.0997 26.8078 13.404C26.8078 12.7083 26.2438 12.1442 25.548 12.1442H22.7598V9.35594C22.7598 8.66022 22.1957 8.09618 21.5 8.09618C20.8043 8.09618 20.2402 8.66022 20.2402 9.35594V12.1442H20.1507C17.2239 12.1442 14.8429 14.5253 14.8429 17.452C14.8429 20.3787 17.224 22.7598 20.1507 22.7598H22.8495C24.3869 22.7598 25.6377 24.0106 25.6377 25.548C25.6377 27.0855 24.3869 28.3363 22.8495 28.3363H17.452C16.7563 28.3363 16.1923 28.9004 16.1923 29.5961C16.1923 30.2918 16.7563 30.8559 17.452 30.8559H20.2402V33.6442C20.2402 34.34 20.8043 34.904 21.5 34.904C22.1957 34.904 22.7598 34.34 22.7598 33.6442V30.8559H22.8494C25.7761 30.8559 28.1571 28.4747 28.1571 25.548C28.1571 22.6214 25.7761 20.2402 22.8494 20.2402Z" fill="#629D23" />
                                    </svg>
                                </div>
                                <div className="content">
                                    <h4 className="title">Support 24/7</h4>
                                    <span>Orders $50 or more</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-20 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="single-feature-area">
                                <div className="icon">
                                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.26667 8.26667C11.935 4.59834 16.8122 2.57812 22 2.57812C25.9672 2.57812 29.8028 3.78495 33.0284 6.01279L30.5382 6.2682L30.8013 8.83283L37.5044 8.14533L36.8169 1.4422L34.2522 1.70526L34.4751 3.8787C30.8247 1.36271 26.4866 0 22 0C16.1236 0 10.5989 2.28843 6.44368 6.44368C2.28843 10.5989 0 16.1236 0 22C0 26.3993 1.29456 30.6457 3.7437 34.28L5.88165 32.8393C5.852 32.7952 5.82321 32.7508 5.79391 32.7065C3.68998 29.5289 2.57812 25.8307 2.57812 22C2.57812 16.8123 4.59834 11.935 8.26667 8.26667Z" fill="#629D23" />
                                        <path d="M40.2564 9.71996L38.1184 11.1607C38.148 11.2047 38.1768 11.2493 38.2061 11.2935C40.3099 14.4711 41.4219 18.1693 41.4219 22C41.4219 27.1878 39.4017 32.065 35.7333 35.7333C32.0651 39.4017 27.1879 41.4219 22 41.4219C18.0328 41.4219 14.1972 40.2151 10.9716 37.9872L13.4618 37.7318L13.1987 35.1672L6.49559 35.8547L7.18309 42.5578L9.7478 42.2947L9.52488 40.1213C13.1754 42.6373 17.5135 44 22 44C27.8764 44 33.4011 41.7116 37.5564 37.5563C41.7117 33.4011 44 27.8764 44 22C44 17.6007 42.7055 13.3543 40.2564 9.71996Z" fill="#629D23" />
                                        <path d="M10.7407 24.7057L12.4096 23.1632C13.6739 22 13.9142 21.2161 13.9142 20.3564C13.9142 18.7127 12.5108 17.6633 10.4753 17.6633C8.73048 17.6633 7.4788 18.3966 6.80874 19.5093L8.66731 20.546C9.02129 19.9771 9.60291 19.6863 10.2477 19.6863C11.0063 19.6863 11.3856 20.0276 11.3856 20.5966C11.3856 20.9633 11.2845 21.3679 10.5764 22.0254L7.26387 25.123V26.6907H14.1544V24.7057L10.7407 24.7057Z" fill="#629D23" />
                                        <path d="M22.1076 24.9965H23.4224V23.0115H22.1076V21.507H19.7433V23.0115H17.948L21.5512 17.8404H18.9594L14.9894 23.3655V24.9965H19.6674V26.6906H22.1076V24.9965Z" fill="#629D23" />
                                        <path d="M25.6986 27.955L29.8708 16.045H27.7341L23.5618 27.955H25.6986Z" fill="#629D23" />
                                        <path d="M31.995 21.1908V19.8254H34.3213L31.3375 26.6906H34.0685L37.1913 19.4081V17.8404H29.8582V21.1908H31.995Z" fill="#629D23" />
                                    </svg>


                                </div>
                                <div className="content">
                                    <h4 className="title">Best Prices & Offers</h4>
                                    <span>Orders $50 or more</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rts-grocery-feature-area rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between">
                                <h2 className="title-left">
                                    Featured Grocery
                                </h2>
                                <div className="next-prev-swiper-wrapper">
                                    <div className="swiper-button-prev"><i className="fa-regular fa-chevron-left"></i></div>
                                    <div className="swiper-button-next"><i className="fa-regular fa-chevron-right"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="category-area-main-wrapper-one">
                                <div className="swiper mySwiper-category-1 swiper-data" data-swiper='{
                        "spaceBetween":16,
                        "slidesPerView":6,
                        "loop": true,
                        "speed": 700,
                        "navigation":{
                            "nextEl":".swiper-button-next",
                            "prevEl":".swiper-button-prev"
                          },
                        "breakpoints":{
                        "0":{
                            "slidesPerView":1,
                            "spaceBetween": 12},
                        "320":{
                            "slidesPerView":1,
                            "spaceBetween":12},
                        "480":{
                            "slidesPerView":2,
                            "spaceBetween":12},
                        "640":{
                            "slidesPerView":2,
                            "spaceBetween":16},
                        "840":{
                            "slidesPerView":3,
                            "spaceBetween":16},
                        "1140":{
                            "slidesPerView":5,
                            "spaceBetween":16},
                        "1540":{
                            "slidesPerView":5,
                            "spaceBetween":16},
                        "1840":{
                            "slidesPerView":6,
                            "spaceBetween":16}
                        }
                    }'>
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>2115%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/01.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Nestle Cerelac Mixed Fruits &
                                                            Wheat with Milk</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/02.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Peysan Full Fat Fresh Cottage Cheese</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/03.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Aptamil Gold+ ProNutra Biotik Stage...</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/04.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Abbott Pediasure Chocolate Refill Pack</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/05.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/06.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Aussie Bubs Goat Milk Infant Formula Stage 1,</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/15.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Nestle Cerelac Mixed Fruits &
                                                            Wheat with Milk</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
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
            </div>

            <div className="rts-grocery-feature-area rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between">
                                <h2 className="title-left">
                                    Products With Discounts
                                </h2>
                                <div className="countdown">
                                    <div className="countDown">10/05/2025 10:20:00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product-with-discount">
                                <div className="row g-5">
                                    <div className="col-xl-4 col-lg-12">
                                        <a href="shop-details.html" className="single-discount-with-bg">
                                            <div className="inner-content">
                                                <h4 className="title">Alpro Organic Flavored   <br />
                                                    Fresh Juice</h4>
                                                <div className="price-area">
                                                    <span>Only</span>
                                                    <h4 className="title">
                                                        $15.00
                                                    </h4>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="shop-details.html" className="single-discount-with-bg bg-2">
                                            <div className="inner-content">
                                                <h4 className="title">Alpro Organic Flavored   <br />
                                                    Fresh Juice</h4>
                                                <div className="price-area">
                                                    <span>Only</span>
                                                    <h4 className="title">
                                                        $15.00
                                                    </h4>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xl-8 col-lg-12">
                                        <div className="row" style={{ rowGap: '15px' }}>
                                            {highOfferProducts.map((product) => (
                                                <div className="col-lg-6" key={product._id}>
                                                    <div className="single-shopping-card-one discount-offer">
                                                        <a className="thumbnail-preview highOfferImg" onClick={() => ProductDetail(product._id)}>
                                                            <div className="badge">
                                                                <span>{product.productDiscount}% <br /> Off</span>
                                                                <i className="fa-solid fa-bookmark"></i>
                                                            </div>
                                                            <img src={product.productImage} alt={product.productName} />
                                                        </a>
                                                        <div className="body-content">
                                                            <a>
                                                                <h4 className="title d-flex">{product.productName}</h4>
                                                            </a>
                                                            <span className="availability d-flex">{product.productQuantity} {product.productUnit} Pack</span>
                                                            <div className="price-area">
                                                                <span className="current">${product.productCurrentRate}</span>
                                                                <div className="previous">${product.productOriginalRate}</div>
                                                            </div>
                                                            <div className="cart-counter-action">
                                                                <div className="quantity-edit">
                                                                    <input type="text" className="input" value="1" />
                                                                    <div className="button-wrapper-action">
                                                                        <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                        <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                                    </div>
                                                                </div>
                                                                <a className="rts-btn btn-primary radious-sm with-icon pointer" onClick={() => addCart(product)}>
                                                                    <div className="btn-text">Add</div>
                                                                    <div className="arrow-icon">
                                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                                    </div>
                                                                    <div className="arrow-icon">
                                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="weekly-best-selling-area rts-section-gap bg_light-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between">
                                <h2 className="title-left">
                                    Weekly Best Selling Groceries
                                </h2>
                                <ul className="nav nav-tabs best-selling-grocery" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Frozen Foods</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Diet Foods</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Healthy Foods</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="vitamine-tab" data-bs-toggle="tab" data-bs-target="#vitamine" type="button" role="tab" aria-controls="vitamine" aria-selected="false">Vitamin Items</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row g-4">
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/15.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <span className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </span>
                                                        <span className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </span>
                                                        <span className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Nestle Cerelac Mixed Fruits &
                                                            Wheat with Milk</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/16.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Rubio Extra Ordina Rias Spicy Paprika Flavour Crips</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/17.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Great Pumpkin Spice Wuick Bread & Muffin Mix</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/18.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Smartfood Popcorn, White Good Cheddar, Party Size!</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25% <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/19.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Nestle Cerelac Mixed Fruits &
                                                            Wheat with Milk</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/20.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Peysan Full Fat Fresh Cottage Cheese</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/21.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Foster Farms Breast Nuggets Shaped Chicken</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/22.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Nestle Cerelac Mixed Fruits &
                                                            Wheat with Milk</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/23.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">7 Varieties Pepperidge Farm Chocolate Collection</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/24.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Srorck Werther Original Popcorn, Classic Caramel</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/25.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Cheez-It Cheese Crackers, Baked Snack Crackers, Lunch ...</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/26.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Kellogg's Town House Oven Baked Crackers, Party Snacks,</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row g-4">
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/15.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Nestle Cerelac Mixed Fruits &
                                                            Wheat with Milk</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/16.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Rubio Extra Ordina Rias Spicy Paprika Flavour Crips</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/17.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Great Pumpkin Spice Wuick Bread & Muffin Mix</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/18.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Smartfood Popcorn, White Good Cheddar, Party Size!</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/19.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Nestle Cerelac Mixed Fruits &
                                                            Wheat with Milk</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/20.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Peysan Full Fat Fresh Cottage Cheese</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/21.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Foster Farms Breast Nuggets Shaped Chicken</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">
                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/22.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Nestle Cerelac Mixed Fruits &
                                                            Wheat with Milk</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">
                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/23.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">7 Varieties Pepperidge Farm Chocolate Collection</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">
                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/24.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Srorck Werther Original Popcorn, Classic Caramel</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/25.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Cheez-It Cheese Crackers, Baked Snack Crackers, Lunch ...</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/26.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Kellogg's Town House Oven Baked Crackers, Party Snacks,</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <div className="row g-4">
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/15.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Nestle Cerelac Mixed Fruits &
                                                            Wheat with Milk</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/16.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Rubio Extra Ordina Rias Spicy Paprika Flavour Crips</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/17.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Great Pumpkin Spice Wuick Bread & Muffin Mix</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/18.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Smartfood Popcorn, White Good Cheddar, Party Size!</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/19.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Nestle Cerelac Mixed Fruits &
                                                            Wheat with Milk</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/20.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Peysan Full Fat Fresh Cottage Cheese</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/21.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Foster Farms Breast Nuggets Shaped Chicken</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/22.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Nestle Cerelac Mixed Fruits &
                                                            Wheat with Milk</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/23.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">7 Varieties Pepperidge Farm Chocolate Collection</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/24.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Srorck Werther Original Popcorn, Classic Caramel</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/25.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Cheez-It Cheese Crackers, Baked Snack Crackers, Lunch ...</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/26.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Kellogg's Town House Oven Baked Crackers, Party Snacks,</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="vitamine" role="tabpanel" aria-labelledby="vitamine-tab">
                                    <div className="row g-4">
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/15.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Nestle Cerelac Mixed Fruits &
                                                            Wheat with Milk</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/16.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Rubio Extra Ordina Rias Spicy Paprika Flavour Crips</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/17.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Great Pumpkin Spice Wuick Bread & Muffin Mix</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/18.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Smartfood Popcorn, White Good Cheddar, Party Size!</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/19.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Nestle Cerelac Mixed Fruits &
                                                            Wheat with Milk</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/20.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Peysan Full Fat Fresh Cottage Cheese</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/21.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Foster Farms Breast Nuggets Shaped Chicken</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/22.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Nestle Cerelac Mixed Fruits &
                                                            Wheat with Milk</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/23.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">7 Varieties Pepperidge Farm Chocolate Collection</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/24.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Srorck Werther Original Popcorn, Classic Caramel</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/25.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Cheez-It Cheese Crackers, Baked Snack Crackers, Lunch ...</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="single-shopping-card-one">

                                                <div className="image-and-action-area-wrapper">
                                                    <a href="shop-details.html" className="thumbnail-preview">
                                                        <div className="badge">
                                                            <span>25%   <br />
                                                                Off
                                                            </span>
                                                            <i className="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/26.jpg" alt="grocery" />
                                                    </a>
                                                    <div className="action-share-option">
                                                        <div className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i className="fa-light fa-heart"></i>
                                                        </div>
                                                        <div className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i className="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="body-content">

                                                    <a href="shop-details.html">
                                                        <h4 className="title">Kellogg's Town House Oven Baked Crackers, Party Snacks,</h4>
                                                    </a>
                                                    <span className="availability">500g Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">$36.00</span>
                                                        <div className="previous">$36.00</div>
                                                    </div>
                                                    <div className="cart-counter-action">
                                                        <div className="quantity-edit">
                                                            <input type="text" className="input" value="1" />
                                                            <div className="button-wrapper-action">
                                                                <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                                                <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Add
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
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
            </div>
            <div className="category-feature-area rts-section-gapTop">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="single-feature-card bg_image one">
                                <div className="content-area">
                                    <a href="shop-grid-sidebar.html" className="rts-btn btn-primary">Weekend Discount</a>
                                    <h3 className="title">
                                        Drink Fresh Corn Juice   <br />
                                        <span>Good Taste</span>
                                    </h3>
                                    <a href="shop-grid-sidebar.html" className="shop-now-goshop-btn">
                                        <span className="text">Shop Now</span>
                                        <div className="plus-icon">
                                            <i className="fa-sharp fa-regular fa-plus"></i>
                                        </div>
                                        <div className="plus-icon">
                                            <i className="fa-sharp fa-regular fa-plus"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="single-feature-card bg_image two">
                                <div className="content-area">
                                    <a href="shop-grid-sidebar.html" className="rts-btn btn-primary">Weekend Discount</a>
                                    <h3 className="title">
                                        Organic Lemon Flavored
                                        <span>Banana Chips</span>
                                    </h3>
                                    <a href="shop-grid-sidebar.html" className="shop-now-goshop-btn">
                                        <span className="text">Shop Now</span>
                                        <div className="plus-icon">
                                            <i className="fa-sharp fa-regular fa-plus"></i>
                                        </div>
                                        <div className="plus-icon">
                                            <i className="fa-sharp fa-regular fa-plus"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="single-feature-card bg_image three">
                                <div className="content-area">
                                    <a href="shop-grid-sidebar.html" className="rts-btn btn-primary">Weekend Discount</a>
                                    <h3 className="title">
                                        Nozes Pecanera Brasil
                                        <span>Chocolate Snacks</span>
                                    </h3>
                                    <a href="shop-grid-sidebar.html" className="shop-now-goshop-btn">
                                        <span className="text">Shop Now</span>
                                        <div className="plus-icon">
                                            <i className="fa-sharp fa-regular fa-plus"></i>
                                        </div>
                                        <div className="plus-icon">
                                            <i className="fa-sharp fa-regular fa-plus"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="single-feature-card bg_image four">
                                <div className="content-area">
                                    <a href="shop-grid-sidebar.html" className="rts-btn btn-primary">Weekend Discount</a>
                                    <h3 className="title">
                                        Strawberry Water Drinks
                                        <span>Flavors Awesome</span>
                                    </h3>
                                    <a href="shop-grid-sidebar.html" className="shop-now-goshop-btn">
                                        <span className="text">Shop Now</span>
                                        <div className="plus-icon">
                                            <i className="fa-sharp fa-regular fa-plus"></i>
                                        </div>
                                        <div className="plus-icon">
                                            <i className="fa-sharp fa-regular fa-plus"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-tranding-product rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between">
                                <h2 className="title-left mb--10">
                                    Top Trending Products
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cover-card-main-over">
                                <div className="row g-4">
                                    {trendingProducts.map((product, index) => (
                                        <div className="col-xl-3 col-md-6 col-sm-12 col-12" key={index}>
                                            <div className="single-shopping-card-one tranding-product h-100">
                                                <a className="thumbnail-preview min-width-100 min-height-100" onClick={() => ProductDetail(product._id)}>
                                                    <div className="badge">
                                                        <span>{product.productDiscount}% <br /> Off</span>
                                                        <i className="fa-solid fa-bookmark"></i>
                                                    </div>
                                                    <img src={product.productImage} alt={product.productName} className='min-width-100 min-height-100' />
                                                </a>
                                                <div className="body-content">
                                                    <a href="shop-details.html">
                                                        <h4 className="title d-flex">{product.productName}</h4>
                                                    </a>
                                                    <span className="availability d-flex">{product.productQuantity} {product.productUnit} Pack</span>
                                                    <div className="price-area">
                                                        <span className="current">${product.productCurrentRate.toFixed(2)}</span>
                                                        <div className="previous">${product.productOriginalRate.toFixed(2)}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="blog-area-start rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between">
                                <h2 className="title-left mb--0">
                                    Latest Blog Post Insights
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cover-card-main-over">
                                <div className="row g-4">
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div className="single-blog-area-start">
                                            <a href="blog-details.html" className="thumbnail">
                                                <img src="images/blog/01.jpg" alt="blog-area" />
                                            </a>
                                            <div className="blog-body">
                                                <div className="top-area">
                                                    <div className="single-meta">
                                                        <i className="fa-light fa-clock"></i>
                                                        <span>15 Sep, 2023</span>
                                                    </div>
                                                    <div className="single-meta">
                                                        <i className="fa-regular fa-folder"></i>
                                                        <span>Modern Fashion</span>
                                                    </div>
                                                </div>
                                                <a href="blog-details.html">
                                                    <h4 className="title">
                                                        Shion Fixation: Fueling Your Passion
                                                        for All Things Stylish
                                                    </h4>
                                                </a>
                                                <a href="blog-details.html" className="shop-now-goshop-btn">
                                                    <span className="text">Read Details</span>
                                                    <div className="plus-icon">
                                                        <i className="fa-sharp fa-regular fa-plus"></i>
                                                    </div>
                                                    <div className="plus-icon">
                                                        <i className="fa-sharp fa-regular fa-plus"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div className="single-blog-area-start">
                                            <a href="blog-details.html" className="thumbnail">
                                                <img src="images/blog/02.jpg" alt="blog-area" />
                                            </a>
                                            <div className="blog-body">
                                                <div className="top-area">
                                                    <div className="single-meta">
                                                        <i className="fa-light fa-clock"></i>
                                                        <span>15 Sep, 2023</span>
                                                    </div>
                                                    <div className="single-meta">
                                                        <i className="fa-regular fa-folder"></i>
                                                        <span>Modern Fashion</span>
                                                    </div>
                                                </div>
                                                <a href="blog-details.html">
                                                    <h4 className="title">
                                                        Ashion Fixation: Fueling Your Passion
                                                        for All Things Stylish
                                                    </h4>
                                                </a>
                                                <a href="blog-details.html" className="shop-now-goshop-btn">
                                                    <span className="text">Read Details</span>
                                                    <div className="plus-icon">
                                                        <i className="fa-sharp fa-regular fa-plus"></i>
                                                    </div>
                                                    <div className="plus-icon">
                                                        <i className="fa-sharp fa-regular fa-plus"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div className="single-blog-area-start">
                                            <a href="blog-details.html" className="thumbnail">
                                                <img src="images/blog/03.jpg" alt="blog-area" />
                                            </a>
                                            <div className="blog-body">
                                                <div className="top-area">
                                                    <div className="single-meta">
                                                        <i className="fa-light fa-clock"></i>
                                                        <span>15 Sep, 2023</span>
                                                    </div>
                                                    <div className="single-meta">
                                                        <i className="fa-regular fa-folder"></i>
                                                        <span>Modern Fashion</span>
                                                    </div>
                                                </div>
                                                <a href="blog-details.html">
                                                    <h4 className="title">
                                                        Fixation: Fueling Your Passion
                                                        for All Things Stylish
                                                    </h4>
                                                </a>
                                                <a href="blog-details.html" className="shop-now-goshop-btn">
                                                    <span className="text">Read Details</span>
                                                    <div className="plus-icon">
                                                        <i className="fa-sharp fa-regular fa-plus"></i>
                                                    </div>
                                                    <div className="plus-icon">
                                                        <i className="fa-sharp fa-regular fa-plus"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div className="single-blog-area-start">
                                            <a href="blog-details.html" className="thumbnail">
                                                <img src="images/blog/04.jpg" alt="blog-area" />
                                            </a>
                                            <div className="blog-body">
                                                <div className="top-area">
                                                    <div className="single-meta">
                                                        <i className="fa-light fa-clock"></i>
                                                        <span>15 Sep, 2023</span>
                                                    </div>
                                                    <div className="single-meta">
                                                        <i className="fa-regular fa-folder"></i>
                                                        <span>Modern Fashion</span>
                                                    </div>
                                                </div>
                                                <a href="blog-details.html">
                                                    <h4 className="title">
                                                        Fashion Fixation: Fueling Your Passion
                                                        for All Things Stylish
                                                    </h4>
                                                </a>
                                                <a href="blog-details.html" className="shop-now-goshop-btn">
                                                    <span className="text">Read Details</span>
                                                    <div className="plus-icon">
                                                        <i className="fa-sharp fa-regular fa-plus"></i>
                                                    </div>
                                                    <div className="plus-icon">
                                                        <i className="fa-sharp fa-regular fa-plus"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="product-details-popup-wrapper">
                <div className="rts-product-details-section rts-product-details-section2 product-details-popup-section">
                    <div className="product-details-popup">
                        <button className="product-details-close-btn"><i className="fal fa-times"></i></button>
                        <div className="details-product-area">
                            <div className="product-thumb-area">
                                <div className="cursor"></div>
                                <div className="thumb-wrapper one filterd-items figure">
                                    <div className="product-thumb zoom" onmousemove="zoom(event)" style={{ backgroundImage: `url('images/products/product-details.jpg')` }}><img src="images/products/product-details.jpg" alt="product-thumb" />
                                    </div>
                                </div>
                                <div className="thumb-wrapper two filterd-items hide">
                                    <div className="product-thumb zoom" onmousemove="zoom(event)" style={{ backgroundImage: `url(images/products/product-filt2.jpg)` }}><img src="images/products/product-filt2.jpg" alt="product-thumb" />
                                    </div>
                                </div>
                                <div className="thumb-wrapper three filterd-items hide">
                                    <div className="product-thumb zoom" onmousemove="zoom(event)" style={{ backgroundImage: `url(images/products/product-filt3.jpg)` }}><img src="images/products/product-filt3.jpg" alt="product-thumb" />
                                    </div>
                                </div>
                                <div className="product-thumb-filter-group">
                                    <div className="thumb-filter filter-btn active" data-show=".one"><img src="images/products/product-filt1.jpg" alt="product-thumb-filter" /></div>
                                    <div className="thumb-filter filter-btn" data-show=".two"><img src="images/products/product-filt2.jpg" alt="product-thumb-filter" /></div>
                                    <div className="thumb-filter filter-btn" data-show=".three"><img src="images/products/product-filt3.jpg" alt="product-thumb-filter" /></div>
                                </div>
                            </div>
                            <div className="contents">
                                <div className="product-status">
                                    <span className="product-catagory">Dress</span>
                                    <div className="rating-stars-group">
                                        <div className="rating-star"><i className="fas fa-star"></i></div>
                                        <div className="rating-star"><i className="fas fa-star"></i></div>
                                        <div className="rating-star"><i className="fas fa-star-half-alt"></i></div>
                                        <span>10 Reviews</span>
                                    </div>
                                </div>
                                <h2 className="product-title">Wide Cotton Tunic Dress <span className="stock">In Stock</span></h2>
                                <span className="product-price"><span className="old-price">$9.35</span> $7.25</span>
                                <p>
                                    Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. It is a
                                    completely modern design and you feel comfortable to put on this hijab.
                                    Buy it at the best price.
                                </p>
                                <div className="product-bottom-action">
                                    <div className="cart-edit">
                                        <div className="quantity-edit action-item">
                                            <button className="button"><i className="fal fa-minus minus"></i></button>
                                            <input type="text" className="input" value="01" />
                                            <button className="button plus">+<i className="fal fa-plus plus"></i></button>
                                        </div>
                                    </div>
                                    <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                        <div className="btn-text">
                                            Add To Cart
                                        </div>
                                        <div className="arrow-icon">
                                            <i className="fa-regular fa-cart-shopping"></i>
                                        </div>
                                        <div className="arrow-icon">
                                            <i className="fa-regular fa-cart-shopping"></i>
                                        </div>
                                    </a>
                                    <a href="http://google.com" className="rts-btn btn-primary ml--20"><i className="fa-light fa-heart"></i></a>
                                </div>
                                <div className="product-uniques">
                                    <span className="sku product-unipue"><span>SKU: </span> BO1D0MX8SJ</span>
                                    <span className="catagorys product-unipue"><span>Categories: </span> T-Shirts, Tops, Mens</span>
                                    <span className="tags product-unipue"><span>Tags: </span> fashion, t-shirts, Men</span>
                                </div>
                                <div className="share-social">
                                    <span>Share:</span>
                                    <a className="platform" href="http://facebook.com/" ><i
                                        className="fab fa-facebook-f"></i></a>
                                    <a className="platform" href="http://twitter.com/" ><i
                                        className="fab fa-twitter"></i></a>
                                    <a className="platform" href="http://behance.com/" ><i
                                        className="fab fa-behance"></i></a>
                                    <a className="platform" href="http://youtube.com/" ><i
                                        className="fab fa-youtube"></i></a>
                                    <a className="platform" href="http://linkedin.com/" ><i
                                        className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div className="successfully-addedin-wishlist">
                <div className="d-flex" style={{ alignItems: 'center', gap: '15px' }}>
                    <i className="fa-regular fa-check"></i>
                    <p>Your item has already added in wishlist successfully</p>
                </div>
            </div>



            <div className="d-none modal modal-compare-area-start fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Products Compare</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="compare-main-wrapper-body">
                                <div className="single-compare-elements name">Preview</div>
                                <div className="single-compare-elements">
                                    <div className="thumbnail-preview">
                                        <img src="images/grocery/01.jpg" alt="grocery" />
                                    </div>
                                </div>
                                <div className="single-compare-elements">
                                    <div className="thumbnail-preview">
                                        <img src="images/grocery/02.jpg" alt="grocery" />
                                    </div>
                                </div>
                                <div className="single-compare-elements">
                                    <div className="thumbnail-preview">
                                        <img src="images/grocery/03.jpg" alt="grocery" />
                                    </div>
                                </div>
                            </div>
                            <div className="compare-main-wrapper-body productname spacifiq">
                                <div className="single-compare-elements name">Name</div>
                                <div className="single-compare-elements">
                                    <p>J.Crew Mercantile Women's Short</p>
                                </div>
                                <div className="single-compare-elements">
                                    <p>Amazon Essentials Women's Tanks</p>
                                </div>
                                <div className="single-compare-elements">
                                    <p>Amazon Brand - Daily Ritual Wom</p>
                                </div>
                            </div>
                            <div className="compare-main-wrapper-body productname">
                                <div className="single-compare-elements name">Price</div>
                                <div className="single-compare-elements price">
                                    <p>$25.00</p>
                                </div>
                                <div className="single-compare-elements price">
                                    <p>$39.25</p>
                                </div>
                                <div className="single-compare-elements price">
                                    <p>$12.00</p>
                                </div>
                            </div>
                            <div className="compare-main-wrapper-body productname">
                                <div className="single-compare-elements name">Description</div>
                                <div className="single-compare-elements discription">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                </div>
                                <div className="single-compare-elements discription">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                </div>
                                <div className="single-compare-elements discription">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                </div>
                            </div>
                            <div className="compare-main-wrapper-body productname">
                                <div className="single-compare-elements name">Rating</div>
                                <div className="single-compare-elements">
                                    <div className="rating">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <span>(25)</span>
                                    </div>
                                </div>
                                <div className="single-compare-elements">
                                    <div className="rating">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <span>(19)</span>
                                    </div>
                                </div>
                                <div className="single-compare-elements">
                                    <div className="rating">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <span>(120)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="compare-main-wrapper-body productname">
                                <div className="single-compare-elements name">Weight</div>
                                <div className="single-compare-elements">
                                    <div className="rating">
                                        <p>320 gram</p>
                                    </div>
                                </div>
                                <div className="single-compare-elements">
                                    <p>370 gram</p>
                                </div>
                                <div className="single-compare-elements">
                                    <p>380 gram</p>
                                </div>
                            </div>
                            <div className="compare-main-wrapper-body productname">
                                <div className="single-compare-elements name">Stock status</div>
                                <div className="single-compare-elements">
                                    <div className="instocks">
                                        <span>In Stock</span>
                                    </div>
                                </div>
                                <div className="single-compare-elements">
                                    <div className="outstocks">
                                        <span className="out-stock">Out Of Stock</span>
                                    </div>
                                </div>
                                <div className="single-compare-elements">
                                    <div className="instocks">
                                        <span>In Stock</span>
                                    </div>
                                </div>
                            </div>
                            <div className="compare-main-wrapper-body productname">
                                <div className="single-compare-elements name">Buy Now</div>
                                <div className="single-compare-elements">
                                    <div className="cart-counter-action">
                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                            <div className="btn-text">
                                                Add To Cart
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-regular fa-cart-shopping"></i>
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-regular fa-cart-shopping"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="single-compare-elements">
                                    <div className="cart-counter-action">
                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                            <div className="btn-text">
                                                Add To Cart
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-regular fa-cart-shopping"></i>
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-regular fa-cart-shopping"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="single-compare-elements">
                                    <div className="cart-counter-action">
                                        <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
                                            <div className="btn-text">
                                                Add To Cart
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-regular fa-cart-shopping"></i>
                                            </div>
                                            <div className="arrow-icon">
                                                <i className="fa-regular fa-cart-shopping"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* <!--================= Preloader Section Start Here =================--> */}

            {/* <div id="weiboo-load">
                        <div className="preloader-new">
                            <svg className="cart_preloader" role="img" aria-label="Shopping cart_preloader line animation"
                                viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="8">
                                    <g className="cart__track" stroke="hsla(0,10%,10%,0.1)">
                                        <polyline points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" />
                                        <circle cx="43" cy="111" r="13" />
                                        <circle cx="102" cy="111" r="13" />
                                    </g>
                                    <g className="cart__lines" stroke="currentColor">
                                        <polyline className="cart__top" points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80"
                                            stroke-dasharray="338 338" stroke-dashoffset="-338" />
                                        <g className="cart__wheel1" transform="rotate(-90,43,111)">
                                            <circle className="cart__wheel-stroke" cx="43" cy="111" r="13" stroke-dasharray="81.68 81.68"
                                                stroke-dashoffset="81.68" />
                                        </g>
                                        <g className="cart__wheel2" transform="rotate(90,102,111)">
                                            <circle className="cart__wheel-stroke" cx="102" cy="111" r="13" stroke-dasharray="81.68 81.68"
                                                stroke-dashoffset="81.68" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div> */}

            {/* <!--================= Preloader End Here =================--> */}





            <div className="search-input-area">
                <div className="container">
                    <div className="search-input-inner">
                        <div className="input-div">
                            <input id="searchInput1" className="search-input" type="text" placeholder="Search by keyword or #" />
                            <button><i className="far fa-search"></i></button>
                        </div>
                    </div>
                </div>
                <div id="close" className="search-close-icon"><i className="far fa-times"></i></div>
            </div>
            <div id="anywhere-home" className="anywere"></div>
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{
                        transition: 'stroke-dashoffset 10ms linear 0s',
                        strokeDasharray: '307.919, 307.919',
                        strokeDashoffset: '307.919'
                    }}></path>
                </svg>
            </div>

            {/* </section> */}

            <Footer />
        </div >
    );
};

export default HomePage;
