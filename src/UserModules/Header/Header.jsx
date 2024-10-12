import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../ApiService/apiService';
import NotificationCenter from '../../CommonModule/Notification/Notification';
import './header.scss';

export const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [wishlistItems, setWishlistItems] = useState([]);
    const [cartData, setmyCart] = useState([]);
    const [cartDataLength, setcartlength] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isLogged, setisLogged] = useState('');
    const [FilterData, setFilterData] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);
    // const [cartLength, setCartLength] = useState(0);
    // const [cartData1, setCartData] = useState([]);
    const [cartLength, setCartLength] = useState(0);
    // Function to toggle the sidebar
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navigate = useNavigate();

    const RouteTo = (data) => {
        navigate('/' + data);
    };

    const Filter = () => {
        api.getAllProducts()
            .then(res => {
                console.log(res.data);
                setFilterData(res.data)
            })
    }


    const getwishlist = () => {
        let post = {
            "userId": localStorage.getItem('userId')
        };
        api.GetwishList(post)
            .then((res) => {
                console.log(res.data);
                setWishlistItems(res.data.items);
            })
            .catch((error) => {
                console.error('Error fetching wishlist:', error);
            });
    };


    const [openCategories, setOpenCategories] = useState({});

    const toggleCategory = (category) => {
        setOpenCategories((prevState) => ({
            ...prevState,
            [category]: !prevState[category], // Toggle the state for the clicked category
        }));
    };


    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    const Route = (data) => {
        navigate('/' + data);
    }


    const routeCart = (data) => {
        if (data == 1) {
            navigate('/cart');
        }
        else if (data == 2 && cartData.length > 0) {
            navigate('/checkout');
        }
        else if (data == 'account') {
            navigate('/Dashboard');
        }
        else if (data == 'wishlist') {
            navigate('/Wishlist');
        }
        else {
            triggerNotification('warning', 'Warning', 'No Cart data !', null, 'Add cart')
        }
    }


    const getSearchproduct = (data) => {
        console.log(data);
        navigate('/Search?query=' + data)
    }


    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        getSearchproduct(searchTerm);
    };


    const RemoveCart = (productId) => {
        let post = {
            "userId": localStorage.getItem("userId"),
            "productId": productId
        }
        api.removecart(post)
            .then(res => {
                console.log(res);
                setmyCart([])
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
                const storedCart = JSON.parse(localStorage.getItem('cartlength')) || [];
        console.log(storedCart);
        // setmyCart(storedCart);
        setCartLength(storedCart);
                setcartlength(response.data.items.length)
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
            });
    };

    useEffect(() => {
        

        Filter()
        const loggedStatus = localStorage.getItem('login');
        setisLogged(loggedStatus);
        if (loggedStatus) {
            getcartdata();
            handleClick();
        }
    }, []);

    useEffect(() => {
        if (isLogged) {
            getcartdata();
            handleClick();
            getwishlist()
        }
    }, [isLogged]);


    const notificationRef = useRef();

    const triggerNotification = (type, title, subtitle, button, path) => {
        if (notificationRef.current && isLogged == 'success') {
            notificationRef.current.spawnNotification(type, title, subtitle, button, path);
        } else {
            navigate('/login')
        }
    };

    const productByCategory = (data) => {
        const formattedCategory = encodeURIComponent(data.productCategory.trim())
        navigate('/ProductCategory?category=' + formattedCategory);
    }

    const ProductDetail = (data) => {
        console.log(data);
        navigate('/productDetail?productId=' + data);
    };

    return (
        <div>

            <NotificationCenter ref={notificationRef} />

            {loading && (
                <div className='LoaderView' style={{ position: 'fixed', width: '100%', height: '100%', background: 'white', zIndex: '111' }}>
                    <div className="container">
                        <section>
                            <div className="loader loader-20" style={{ fontsize: '40px' }}>
                            </div>
                        </section>

                    </div>
                </div>
            )}


            <div className="rts-header-one-area-one">
                <div className="search-header-area-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="logo-search-category-wrapper">
                                    <a href="" className="logo-area">
                                        <img src="images/logo/logo-01.svg" alt="logo-main" className="logo" style={{ width: '260px', borderRadius: '10px' }} />
                                    </a>
                                    <div className="category-search-wrapper">
                                        <div className="category-btn category-hover-header filterCategory">
                                            <img className="parent" src="images/icons/bar-1.svg" alt="icons" />
                                            <span>Categories</span>
                                            <ul className="category-sub-menu" id="category-active-four">
                                                {FilterData.reduce((acc, curr) => {
                                                    const categoryExists = acc.find(item => item.productCategory === curr.productCategory);

                                                    if (!categoryExists) {
                                                        acc.push(curr);
                                                    }

                                                    return acc;
                                                }, []).map((res, index) => (
                                                    <li key={index} onClick={() => productByCategory(res)}>
                                                        <a className="menu-item">
                                                            <img src="images/icons/01.svg" alt="icons" />
                                                            <span>{res.productCategory}</span>
                                                            {/* <i
                                                                className={`fa-regular fa-${openCategories[res.productCategory] ? 'minus' : 'plus'}`}
                                                                onClick={() => toggleCategory(res.productCategory)}
                                                                style={{ cursor: 'pointer' }}
                                                            ></i> */}

                                                            <i class="bi bi-chevron-right pointer" onClick={() => toggleCategory(res.productCategory)}></i>
                                                        </a>

                                                        {/* {openCategories[res.productCategory] && (
                                                            <ul className="submenu mm-collapse">
                                                                {FilterData.filter(item => item.productCategory === res.productCategory)
                                                                    .map((filteredProduct, i) => (
                                                                        <li key={i}>
                                                                            <a className="mobile-menu-link" onClick={() => ProductDetail(res._id)}>{filteredProduct.productName}</a>
                                                                        </li>
                                                                    ))}
                                                            </ul>
                                                        )} */}
                                                    </li>
                                                ))}
                                            </ul>



                                        </div>
                                        <form className="search-header" onSubmit={handleSubmit}>
                                            <input
                                                type="text"
                                                value={searchTerm}
                                                onChange={handleInputChange}
                                                placeholder="Search for products"
                                                required
                                            />
                                            <button type="submit" className="rts-btn btn-primary radious-sm with-icon">
                                                <div className="btn-text">
                                                    Search
                                                </div>
                                                <div className="arrow-icon">
                                                    <i className="fa-light fa-magnifying-glass"></i>
                                                </div>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="actions-area">
                                        <div className="search-btn" id="searchs" >

                                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.75 14.7188L11.5625 10.5312C12.4688 9.4375 12.9688 8.03125 12.9688 6.5C12.9688 2.9375 10.0312 0 6.46875 0C2.875 0 0 2.9375 0 6.5C0 10.0938 2.90625 13 6.46875 13C7.96875 13 9.375 12.5 10.5 11.5938L14.6875 15.7812C14.8438 15.9375 15.0312 16 15.25 16C15.4375 16 15.625 15.9375 15.75 15.7812C16.0625 15.5 16.0625 15.0312 15.75 14.7188ZM1.5 6.5C1.5 3.75 3.71875 1.5 6.5 1.5C9.25 1.5 11.5 3.75 11.5 6.5C11.5 9.28125 9.25 11.5 6.5 11.5C3.71875 11.5 1.5 9.28125 1.5 6.5Z" fill="#1F1F25"></path>
                                            </svg>

                                        </div>
                                        <div className="menu-btn" id="menu-btn" onClick={toggleMenu}>

                                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="14" width="20" height="2" fill="#1F1F25"></rect>
                                                <rect y="7" width="20" height="2" fill="#1F1F25"></rect>
                                                <rect width="20" height="2" fill="#1F1F25"></rect>
                                            </svg>

                                        </div>



                                    </div>
                                    <div className="accont-wishlist-cart-area-header">
                                        <a className="btn-border-only account" onClick={() => routeCart('account')} style={{ cursor: 'pointer' }}>
                                            <i className="fa-light fa-user"></i>
                                            <span>Account</span>
                                        </a>
                                        <a className="btn-border-only wishlist" onClick={() => routeCart('wishlist')}>
                                            <i className="fa-regular fa-heart"></i>
                                            <span className="text">Wishlist</span>
                                            <span className="number">{wishlistItems.length}</span>
                                        </a>



                                        <div className="btn-border-only cart category-hover-header">
                                            <i className="fa-sharp fa-regular fa-cart-shopping"></i>
                                            <span className="text">Cart</span>
                                            <span className="number">{cartDataLength|cartLength}</span>
                                            <div className="category-sub-menu card-number-show">
                                                <h5 className="shopping-cart-number">Shopping Cart ({cartDataLength} {cartDataLength > 1 ? 'items' : 'item'})</h5>
                                                {cartData.map((cart) => (
                                                    <div className="cart-item-1 border-top" key={cart.productId.productName}>
                                                        <div className="img-name">
                                                            <div className="thumbanil">
                                                                <img src={cart.productId.productImage} alt="" />
                                                            </div>
                                                            <div className="details">
                                                                <a >
                                                                    <h5 className="title">{cart.productId.productName}</h5>
                                                                </a>
                                                                <div className="number">
                                                                    {cart.quantity}<i className="fa-regular fa-x"></i>
                                                                    <span>₹{cart.productId.productCurrentRate}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="close-c1" onClick={() => RemoveCart(cart.productId._id)}>
                                                            <i className="fa-regular fa-x"></i>
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="sub-total-cart-balance">
                                                    <div className="bottom-content-deals mt--10">
                                                        <div className="top">
                                                            <span>Sub Total:</span>
                                                            {/* Subtotal Calculation */}
                                                            <span className="number-c">₹{cartData.reduce((total, cart) => total + (cart.productId.productCurrentRate * cart.quantity), 0)}</span>
                                                        </div>
                                                        <div className="single-progress-area-incard">
                                                            <div className="progress">
                                                                <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                        <p>Spend <span>₹ 1000.00</span> above to reach <span>Free Shipping</span></p>
                                                    </div>
                                                    <div className="button-wrapper d-flex align-items-center justify-content-between">
                                                        <a className="rts-btn btn-primary " onClick={() => routeCart('1')}>View Cart</a>
                                                        <a className="rts-btn btn-primary border-only" onClick={() => routeCart('2')}>CheckOut</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <a className="btn-border-only wishlist" style={{ cursor: 'pointer' }} onClick={() => triggerNotification('warning', 'Warning', 'Sure to Logout', 'Sure', 'logout')}>
                                            <i className="fa fa-sign-in" aria-hidden="true"></i>
                                            <span className="text">
                                                {isLogged === 'success' ? 'Logout' : 'Login'}
                                            </span>
                                        </a>


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
                                    {/* <div className="nav-area">
                                        <nav>
                                            <ul className="parent-nav">
                                                <li className="parent has-dropdown">
                                                    <a className="pointer" onClick={() => RouteTo('home')}>Home</a>
                                                  
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
                                                <li className="parent" onClick={() => triggerNotification('warning', 'Warning', 'Sure to Logout', 'Sure', 'logout')}><a className='pointer'>{isLogged == 'success' ? 'Logout' : 'Login'}</a></li>
                                            </ul>
                                        </nav>
                                    </div> */}

                                    {/* <div className="right-btn-area">
                                        <a href="http://google.com" className="btn-narrow">Trending Products</a>
                                        <button className="rts-btn btn-primary">
                                            Get 30% Discount Now
                                            <span>Sale</span>
                                        </button>
                                    </div> */}

                                </div>
                            </div>
                            <div className="col-lg-12 " >
                                <div className="logo-search-category-wrapper after-md-device-header">
                                    <a className="logo-area">
                                        <img src="images/logo/logo-01.svg" alt="logo-main" className="logo" style={{ width: '260px', borderRadius: '10px' }} />
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
                                            <a className="btn-border-only account" onClick={() => routeCart('account')}>
                                                <i className="fa-light fa-user"></i>
                                                Account
                                            </a>
                                            <a className="btn-border-only wishlist">
                                                <i className="fa-regular fa-heart"></i>
                                                Wishlist
                                            </a>
                                            <div className="btn-border-only cart category-hover-header">
                                                <i className="fa-sharp fa-regular fa-cart-shopping"></i>
                                                <span className="text">Cart</span>
                                                <div className="category-sub-menu card-number-show">
                                                    <h5 className="shopping-cart-number">Shopping Cart ({cartDataLength} {cartDataLength > 1 ? 'items' : 'item'})</h5>
                                                    {cartData.map((cart) => (
                                                        <div className="cart-item-1 border-top" key={cart.productId.productName}>
                                                            <div className="img-name">
                                                                <div className="thumbanil">
                                                                    <img src={cart.productId.productImage} alt="" />
                                                                </div>
                                                                <div className="details">
                                                                    <a >
                                                                        <h5 className="title">{cart.productId.productName}</h5>
                                                                    </a>
                                                                    <div className="number">
                                                                        {cart.quantity}<i className="fa-regular fa-x"></i>
                                                                        <span>₹{cart.productId.productCurrentRate}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="close-c1" onClick={() => RemoveCart(cart.productId._id)}>
                                                                <i className="fa-regular fa-x"></i>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    <div className="sub-total-cart-balance">
                                                        <div className="bottom-content-deals mt--10">
                                                            <div className="top">
                                                                <span>Sub Total:</span>
                                                                <span className="number-c">₹{cartData.reduce((total, cart) => total + (cart.productId.productCurrentRate * cart.quantity), 0)}</span>
                                                            </div>
                                                            <div className="single-progress-area-incard">
                                                                <div className="progress">
                                                                    <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                            <p>Spend More <span>₹ 1000.00</span> to reach <span>Free Shipping</span></p>
                                                        </div>
                                                        <div className="button-wrapper d-flex align-items-center justify-content-between">
                                                            <a className="rts-btn btn-primary " onClick={() => routeCart('1')}>View Cart</a>
                                                            <a className="rts-btn btn-primary border-only" onClick={() => routeCart('2')}>CheckOut</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a className="over_link"></a>
                                            </div>
                                        </div>
                                        <div className="actions-area">
                                            <div className="search-btn" id="search">

                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.75 14.7188L11.5625 10.5312C12.4688 9.4375 12.9688 8.03125 12.9688 6.5C12.9688 2.9375 10.0312 0 6.46875 0C2.875 0 0 2.9375 0 6.5C0 10.0938 2.90625 13 6.46875 13C7.96875 13 9.375 12.5 10.5 11.5938L14.6875 15.7812C14.8438 15.9375 15.0312 16 15.25 16C15.4375 16 15.625 15.9375 15.75 15.7812C16.0625 15.5 16.0625 15.0312 15.75 14.7188ZM1.5 6.5C1.5 3.75 3.71875 1.5 6.5 1.5C9.25 1.5 11.5 3.75 11.5 6.5C11.5 9.28125 9.25 11.5 6.5 11.5C3.71875 11.5 1.5 9.28125 1.5 6.5Z" fill="#1F1F25"></path>
                                                </svg>

                                            </div>
                                            <div className="menu-btn" onClick={toggleMenu}>

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

            <div className="search-input-area">
                <div className="container">
                    <div className="search-input-inner">
                        <div className="input-div">
                            <input id="searchInput1" className="search-input" type="text" placeholder="Search"
                                value={searchTerm}
                                onChange={handleInputChange} />
                            <button onClick={() => getSearchproduct(searchTerm)}><i className="far fa-search"></i></button>
                        </div>
                    </div>
                </div>
                <div id="close" className="search-close-icon"><i className="far fa-times"></i></div>
            </div>


            <div className={`side-bar header-two ${menuOpen ? 'show' : ''}`}>
                {/* Close Button */}
                <button className="close-icon-menu" onClick={toggleMenu}>
                    <i className="far fa-times"></i>
                </button>

                {/* Search Form */}
                <form className="search-input-area-menu mt--30">
                    <input type="text" placeholder="Search..." required="" />
                    <button><i className="fa-light fa-magnifying-glass"></i></button>
                </form>

                {/* Navigation Menu */}
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
                                    <ul className="mainmenu metismenu" id="mobile-menu-active" style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        flexDirection: 'column'
                                    }}>
                                        <li className="" onClick={() => Route('home')}>
                                            <a className="main">Home</a>
                                            {/* <ul className="submenu mm-collapse">
                        <li><a className="mobile-menu-link" href="index-2.html">Home One</a></li>
                        <li><a className="mobile-menu-link" href="index-two.html">Home Two</a></li>
                        <li><a className="mobile-menu-link" href="index-three.html">Home Three</a></li>
                        <li><a className="mobile-menu-link" href="index-four.html">Home Four</a></li>
                        <li><a className="mobile-menu-link"> Home Five</a></li>
                      </ul> */}
                                        </li>
                                        <li onClick={() => Route('about')}>
                                            <a className="main">About</a>
                                        </li>
                                        {/* <li className="has-droupdown">
                      <a href="#" className="main">Pages</a>
                      <ul className="submenu mm-collapse">
                        <li><a className="mobile-menu-link">About</a></li>
                        <li><a className="mobile-menu-link" >Faq's</a></li>
                        <li><a className="mobile-menu-link">Invoice</a></li>
                        <li><a className="mobile-menu-link" >Contact</a></li>
                        <li><a className="mobile-menu-link" >Register</a></li>
                        <li><a className="mobile-menu-link" >Login</a></li>
                        <li><a className="mobile-menu-link" >Privacy Policy</a></li>
                        <li><a className="mobile-menu-link" >Cookies Policy</a></li>
                        <li><a className="mobile-menu-link" >Terms Condition</a></li>
                        <li><a className="mobile-menu-link" >Error Page</a></li>
                      </ul>
                    </li> */}
                                        <li className="" onClick={() => Route('Dashboard')}>
                                            <a className="main">Account</a>
                                            {/* <ul className="submenu mm-collapse">
                        <li className="has-droupdown third-lvl">
                          <a className="main" href="#">Shop Layout</a>
                          <ul className="submenu-third-lvl mm-collapse">
                            <li><a></a>Shop Grid Sidebar</li>
                            <li><a></a>Shop List Sidebar</li>
                            <li><a ></a>Shop Grid Top Filter</li>
                            <li><a ></a>Shop List Top Filter</li>
                          </ul>
                        </li>
                        <li className="has-droupdown third-lvl">
                          <a className="main" href="#">Shop Details</a>
                          <ul className="submenu-third-lvl mm-collapse">
                            <li><a></a>Shop Details</li>
                            <li><a></a>Shop Details 2</li>
                          </ul>
                        </li>
                        <li className="has-droupdown third-lvl">
                          <a className="main" href="#">Product Feature</a>
                          <ul className="submenu-third-lvl mm-collapse">
                            <li><a ></a>Shop Details Variable</li>
                            <li><a ></a>Shop Details Affiliats</li>
                            <li><a ></a>Shop Details Group</li>
                            <li><a ></a>Shop Compare</li>
                          </ul>
                        </li>
                        <li className="has-droupdown third-lvl">
                          <a className="main" href="#">Shop Others</a>
                          <ul className="submenu-third-lvl mm-collapse">
                            <li><a ></a>Cart</li>
                            <li><a ></a>Checkout</li>
                            <li><a ></a>Trackorder</li>
                          </ul>
                        </li>
                      </ul> */}
                                        </li>
                                        {/* <li className="has-droupdown">
                      <a href="#" className="main">Blog</a>
                      <ul className="submenu mm-collapse">
                        <li><a className="mobile-menu-link" >Blog</a></li>
                        <li><a className="mobile-menu-link" >Blog Left Sidebar</a></li>
                        <li><a className="mobile-menu-link" >Blog Right Sidebar</a></li>
                      </ul>
                    </li> */}
                                        <li onClick={() => Route('contact')}>
                                            <a className="main">Contact Us</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                            <div className="category-btn category-hover-header menu-category">
                                <ul className="category-sub-menu" id="category-active-four">
                                    {FilterData.reduce((acc, curr) => {
                                        const categoryExists = acc.find(item => item.productCategory === curr.productCategory);

                                        if (!categoryExists) {
                                            acc.push(curr);
                                        }

                                        return acc;
                                    }, []).map((res, index) => (
                                        <li key={index} onClick={() => productByCategory(res)}>
                                            <a className="menu-item">
                                                <img src="images/icons/01.svg" alt="icons" />
                                                <span>{res.productCategory}</span>
                                                {/* <i
                                                                className={`fa-regular fa-${openCategories[res.productCategory] ? 'minus' : 'plus'}`}
                                                                onClick={() => toggleCategory(res.productCategory)}
                                                                style={{ cursor: 'pointer' }}
                                                            ></i> */}

                                                <i class="bi bi-chevron-right pointer" onClick={() => toggleCategory(res.productCategory)}></i>
                                            </a>

                                            {/* {openCategories[res.productCategory] && (
                                                            <ul className="submenu mm-collapse">
                                                                {FilterData.filter(item => item.productCategory === res.productCategory)
                                                                    .map((filteredProduct, i) => (
                                                                        <li key={i}>
                                                                            <a className="mobile-menu-link" onClick={() => ProductDetail(res._id)}>{filteredProduct.productName}</a>
                                                                        </li>
                                                                    ))}
                                                            </ul>
                                                        )} */}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="button-area-main-wrapper-menuy-sidebar mt--50">

                    <div class="contact-area">
                        <div class="phone">
                            <i class="fa-light fa-headset"></i>
                            <a href="#">02345697871</a>
                        </div>
                        <div class="phone">
                            <i class="fa-light fa-envelope"></i>
                            <a href="#">02345697871</a>
                        </div>
                    </div>
                    <div class="buton-area-bottom">
                        <a class="rts-btn btn-primary" style={{ cursor: 'pointer' }} onClick={() => triggerNotification('warning', 'Warning', 'Sure to Logout', 'Sure', 'logout')}>

                            <span className="text">
                                {isLogged === 'success' ? 'Logout' : 'Login'}
                            </span></a>



                        <a class="rts-btn btn-primary" onClick={() => routeCart('account')} style={{ cursor: 'pointer' }}>Account</a>
                        <a class="rts-btn btn-primary" onClick={() => routeCart('wishlist')}>Wishlist</a>
                    </div>

                </div> */}
            </div>


        </div>




    )
}