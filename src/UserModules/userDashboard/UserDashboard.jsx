import React, { useEffect, useState, useRef } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import api from '../../ApiService/apiService'
import { useNavigate } from 'react-router-dom';
import NotificationCenter from '../../CommonModule/Notification/Notification';
import './UserDashboard.scss';

const UserDashboard = ({ setLoading }) => {
    const [myOrdersList, setmyOrdersList] = useState([])
    const [orderTrackedData, setorderTrackedData] = useState([])
    const [AccountDetails, setAccountDetails] = useState({})
    const [copiedOrderId, setcopiedOrderId] = useState(0);
    const [isCopied, setisCopied] = useState(false);
    const [isLogged, setisLogged] = useState('');
    const [viewOrderId, setviewOrderId] = useState(0);
    const [totalAmount, settotalAmount] = useState(0);

    const navigate = useNavigate();

    const copyOrderId = (orderId) => {
        navigator.clipboard.writeText(orderId)
            .then(() => {
                setcopiedOrderId(orderId);
                setisCopied(true)
            })
            .catch(err => {
                console.error('Error copying text: ', err);
            });
    }

    useEffect(() => {
        if (copiedOrderId) {
            const timer = setTimeout(() => {
                // setcopiedOrderId(0);
                setisCopied(false)
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [copiedOrderId]);

    useEffect(() => {
        myOrders();
    }, [])

    const myOrders = () => {
        api.myOrdersByUserId(localStorage.getItem('userId'))
            .then(res => {
                console.log(res);
                setmyOrdersList(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const trackOrder = (e) => {
        e.preventDefault()
        console.log(copiedOrderId);
        navigate('/TrackMyOrder?orderId=' + copiedOrderId)
    };

    useEffect(() => {
        const loggedStatus = localStorage.getItem('login');
        setisLogged(loggedStatus);
        getAccountDetails();
    }, [isLogged]);

    const getAccountDetails = () => {
        setLoading(true)
        api.GetAccountDetail(localStorage.getItem('userId'))
            .then(res => {
                console.log(res);
                setAccountDetails(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
            })
    };

    const notificationRef = useRef();

    const triggerNotification = (type, title, subtitle, button, path) => {
        if (notificationRef.current && isLogged == 'success') {
            notificationRef.current.spawnNotification(type, title, subtitle, button, path);
        } else {
            navigate('/login')
        }
    };

    const ViewOrderDetails = (data) => {
        setviewOrderId(data.orderId);
        api.TrackOrder(data.orderId)
            .then(res => {
                console.log(res);
                const products = res.data.products;
                setorderTrackedData(products)

                const total = products && products.length > 0
                    ? products.reduce((acc, product) => acc + product.price * product.quantity, 0)
                    : 0;
                console.log(total);

                settotalAmount(total)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const closeOpenedOrder = () => {
        setviewOrderId(0);
    }

    const TrackOrder = (OrderId) => {
        navigate('/TrackMyOrder?orderId=' + OrderId)
    };


    return (
        <div >
            <NotificationCenter ref={notificationRef} />
            <Header />

            <div className="account-tab-area-start rts-section-gap">
                <div className="container-2">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="nav accout-dashborard-nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    <i className="fa-regular fa-chart-line"></i> Dashboard
                                </button>
                                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                    <i className="fa-regular fa-bag-shopping"></i> Order
                                </button>
                                <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                    <i className="fa-sharp fa-regular fa-tractor"></i> Track Your Order
                                </button>
                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                    <i className="fa-sharp fa-regular fa-location-dot"></i> My Address
                                </button>
                                <button className="nav-link" id="v-pills-settingsa-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settingsa" type="button" role="tab" aria-controls="v-pills-settingsa" aria-selected="false">
                                    <i className="fa-light fa-user"></i> Account Details
                                </button>
                                <button className="nav-link" id="v-pills-settingsb-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settingsb" type="button" role="tab" aria-controls="v-pills-settingsb" aria-selected="false" onClick={() => triggerNotification('warning', 'Warning', 'Sure to Logout', 'Sure', 'logout')}>
                                    <a href="/login"><i className="fa-light fa-right-from-bracket"></i> Log Out</a>
                                </button>
                            </div>
                        </div>


                        <div className="col-lg-9 pl--50 pl_md--10 pl_sm--10 pt_md--30 pt_sm--30">
                            <div className="tab-content" id="v-pills-tabContent">

                                {/* ********************************************01***************************************** */}

                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0">
                                    <div className="dashboard-account-area">
                                        <h2 className="title">Hello Raisa! (Not Raisa?) <a href="/login">Log Out.</a></h2>
                                        <p className="disc">
                                            From your account dashboard, you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
                                        </p>
                                    </div>
                                </div>

                                {/* ********************************************02***************************************** */}

                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                                    <div className="order-table-account">
                                        <h2 className="title">My Orders</h2>
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Order</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                        <th>Total</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        myOrdersList.map(data => (
                                                            <tr key={data._id}>
                                                                <td>
                                                                    {data.orderId}
                                                                    <i
                                                                        className={copiedOrderId === data.orderId && isCopied === true ? "bi bi-clipboard-check-fill copyIcon pointer" : "bi bi-clipboard copyIcon pointer"}
                                                                        onClick={() => copyOrderId(data.orderId)}
                                                                    ></i>
                                                                </td>
                                                                <td>{new Date(data.createdAt).toLocaleDateString('en-GB')}</td>
                                                                <td>Processing</td>
                                                                <td>₹ 250 for {data.products.length} items</td>
                                                                <td><button className="btn-small d-block" onClick={() => ViewOrderDetails(data)}>View</button></td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>

                                {/* ********************************************03***************************************** */}

                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0">
                                    <div className="tracing-order-account">
                                        <h2 className="title">Orders tracking</h2>
                                        <p>
                                            To keep up with the status of your order, kindly copy your Order ID paste in the fields below and click the "Track" button to track your Order.
                                        </p>
                                        <form className="order-tracking">
                                            <div className="single-input">
                                                <label htmlFor="order-id">Order Id</label>
                                                <input type="text" placeholder="Paste Order Id" required />
                                            </div>
                                            {/* <div className="single-input">
                                                <label htmlFor="billing-email">Billing email</label>
                                                <input type="text" placeholder="Email you used during checkout" />
                                            </div> */}
                                            <button className="rts-btn btn-primary" onClick={trackOrder}>Track</button>
                                        </form>
                                    </div>
                                </div>

                                {/* ********************************************04***************************************** */}

                                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex="0">
                                    <div className="shipping-address-billing-address-account">
                                        <div className="half">
                                            <h2 className="title">Billing Address</h2>
                                            <p className="address start">
                                                3522 Interstate <br />
                                                75 Business Spur, <br />
                                                Sault Ste. <br />
                                                Marie, MI 49783 <br />
                                                New York
                                            </p>
                                            <a className='start d-flex width-100'>Edit</a>
                                        </div>
                                        {/* <div className="half">
                                            <h2 className="title">Shipping Address</h2>
                                            <p className="address start">
                                                3522 Interstate <br />
                                                75 Business Spur, <br />
                                                Sault Ste. <br />
                                                Marie, MI 49783 <br />
                                                New York
                                            </p>
                                            <a className='start d-flex width-100'>Edit</a>
                                        </div> */}
                                    </div>
                                </div>

                                {/* ********************************************05***************************************** */}

                                <div className="tab-pane fade" id="v-pills-settingsa" role="tabpanel" aria-labelledby="v-pills-settingsa-tab" tabIndex="0">
                                    <form className="account-details-area">
                                        <h2 className="title">Account Details</h2>
                                        {/* <div className="input-half-area">
                                            <div className="single-input">
                                                <input type="text" placeholder="First Name" />
                                            </div>
                                            <div className="single-input">
                                                <input type="text" placeholder="Last Name" />
                                            </div>
                                        </div> */}

                                        <input type="text" placeholder="Display Name" required value={AccountDetails.name} readonly />
                                        <input type="email" placeholder="Email Address *" required value={AccountDetails.email} readonly />
                                        <input type="number" placeholder="Mobile Number *" required value={AccountDetails.mobile} readonly />
                                        {/* <input type="password" placeholder="New Password *" />
                                        <input type="password" placeholder="Confirm Password *" /> */}
                                        <button className="rts-btn btn-primary">Save Change</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* *****************************************VIEW ORDER***************************** */}

            <div className={`ViewOrderInfo ${viewOrderId !== 0 ? 'd-block' : 'd-none'}`}>
                <div className={`order-detail ${viewOrderId !== 0 ? 'left-shown' : 'left-hidden'}`}>
                    <i class="bi bi-x-octagon color-white pointer closeIcon" onClick={closeOpenedOrder}></i>
                    <nav>
                        <img src="images/Grocery.png" alt="KFC Logo" />
                    </nav>
                    <div class="caption">
                        <p></p>
                        <h5>Welcome Grocery</h5>
                    </div>
                    <div class="orders-box">
                        {
                            orderTrackedData.map(res => (
                                <div className="order-item" key={res._id}>
                                    <p className="order-title">{res.productId.productName}</p>
                                    {/* <span>|</span> */}
                                    <p className="order-size">{res.productId.productCategory}</p>
                                    <div className="order-quantity">
                                        <p>{res.quantity} Qty</p>
                                    </div>
                                    <p className="order-price">₹ {res.price}</p>
                                </div>
                            ))
                        }
                        {/* <div class="beverage-section">
                            <img src="https://static.thenounproject.com/png/209029-200.png" alt="Beverage Icon" />
                            <h5 class="beverage-title">Add a beverage</h5>
                        </div> */}
                        <div class="billing-summary">
                            <div class="info">
                                <p>Subtotal</p>
                                <p>Shipping</p>
                                <p className='font-bold'>Total (TVA Incl.)</p>
                            </div>
                            <div class="money">
                                <p>₹ {totalAmount}</p>
                                <p>₹ 40</p>
                                <p className='font-bold'>₹ {totalAmount + 40}</p>
                            </div>
                        </div>
                        <div class="checkout-button" onClick={() => TrackOrder(viewOrderId)}>Track Order</div>
                    </div>
                </div>
            </div>


            <Footer />
        </div >
    )
}
export default UserDashboard;