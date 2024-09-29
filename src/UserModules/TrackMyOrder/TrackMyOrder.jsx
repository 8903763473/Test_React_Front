import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../../ApiService/apiService';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import './TrackMyOrder.scss';

export const TrackMyOrder = ({ setLoading }) => {
    const [OrderedData, setOrderedData] = useState([])
    const [OrderedDataProducts, setOrderedDataProducts] = useState([])
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const OrderId = searchParams.get('orderId');
    const navigate = useNavigate()

    const steps = [
        { status: 'Confirmed', icon: 'fa-check', text: 'Order confirmed' },
        { status: 'Couriered', icon: 'fa-user', text: 'Picked by courier' },
        { status: 'Shipped', icon: 'fa-truck', text: 'On the way' },
        { status: 'Delivered', icon: 'fa-box', text: 'Delivered' },
    ];

    useEffect(() => {
        const getOrderTracked = () => {
            api.TrackOrder(OrderId)
                .then(res => {
                    console.log(res.data);
                    setOrderedData(res.data)
                    setOrderedDataProducts(res.data.products);
                })
                .catch(err => {
                    console.log(err);
                });
        };

        getOrderTracked();
    }, [OrderId]);

    const navigateTo = (data) => {
        navigate('/home')
    }

    return (
        <div>
            <Header />

            <div className="container">
                <article className="card">
                    <header className="card-header start"> My Orders / Tracking </header>
                    <div className="card-body">
                        <h6 className='start'>Order ID: OD45345345435</h6>
                        <article className="card">
                            <div className="card-body row">
                                <div className="col">
                                    <strong>Estimated Delivery time:</strong> <br />29 nov 2019
                                </div>
                                <div className="col">
                                    <strong>Shipping BY:</strong> <br /> BLUEDART, | <i className="fa fa-phone"></i> +1598675986
                                </div>
                                <div className="col">
                                    <strong>Status:</strong> <br /> {OrderedData.orderStatus}
                                </div>
                                <div className="col">
                                    <strong>Tracking #:</strong> <br /> BD045903594059
                                </div>
                            </div>
                        </article>
                        {/* <div className="track">
                            <div className="step active">
                                <span className="icon"> <i className="fa fa-check"></i> </span>
                                <span className="text">Order confirmed</span>
                            </div>
                            <div className="step active">
                                <span className="icon"> <i className="fa fa-user"></i> </span>
                                <span className="text"> Picked by courier</span>
                            </div>
                            <div className="step">
                                <span className="icon"> <i className="fa fa-truck"></i> </span>
                                <span className="text"> On the way </span>
                            </div>
                            <div className="step">
                                <span className="icon"> <i className="fa fa-box"></i> </span>
                                <span className="text">Ready for pickup</span>
                            </div>
                        </div> */}

                        <div className="track">
                            {steps.map((step, index) => (
                                <div key={step.status} className={`step ${OrderedData.orderStatus === step.status || index < steps.findIndex(s => s.status === OrderedData.orderStatus) ? 'active' : ''}`}>
                                    <span className="icon"> <i className={`fa ${step.icon}`}></i> </span>
                                    <span className="text">{step.text}</span>
                                </div>
                            ))}
                        </div>

                        <hr />
                        <ul className="row">
                            {OrderedDataProducts.map(result => (
                                <li className="col-md-4" key={result.productId}>
                                    <figure className="itemside mb-3">
                                        <div className="aside">
                                            <img src={result.productId.productImage} className="img-sm border contain" alt="product" />
                                        </div>
                                        <figcaption className="info align-self-center">
                                            <p className="title">
                                                {result.productId.productName} <br /> {result.productId.productCategory}
                                            </p>
                                            <span className="text-muted">₹ {result.productId.productCurrentRate}</span>
                                        </figcaption>
                                    </figure>
                                </li>
                            ))}
                            {/* <li className="col-md-4">
                                <figure className="itemside mb-3">
                                    <div className="aside"><img src="https://i.imgur.com/tVBy5Q0.png" className="img-sm border" alt="product" /></div>
                                    <figcaption className="info align-self-center">
                                        <p className="title">HP Laptop with 500GB HDD <br /> 8GB RAM</p>
                                        <span className="text-muted">$850 </span>
                                    </figcaption>
                                </figure>
                            </li>
                            <li className="col-md-4">
                                <figure className="itemside mb-3">
                                    <div className="aside"><img src="https://i.imgur.com/Bd56jKH.png" className="img-sm border" alt="product" /></div>
                                    <figcaption className="info align-self-center">
                                        <p className="title">ACER Laptop with 500GB HDD <br /> 8GB RAM</p>
                                        <span className="text-muted">$650 </span>
                                    </figcaption>
                                </figure>
                            </li> */}
                        </ul>
                        <a className="btn btn-warning" data-abc="true" onClick={navigateTo}>
                            <i className="fa fa-chevron-left"></i> Back to Home
                        </a>
                    </div>
                </article>
            </div>

            <Footer />
        </div>
    );
};


export default TrackMyOrder;