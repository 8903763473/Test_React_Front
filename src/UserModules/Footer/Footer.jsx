import React from 'react'

export const Footer = () => {
    return (
        <div>
            <div className="rts-footer-area pt--80 bg_light-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-main-content-wrapper pb--70 pb_sm--30">
                                <div className="single-footer-wized">
                                    <h3 className="footer-title d-flex">About Company</h3>
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
                                    <h3 className="footer-title d-flex">Our Stores</h3>
                                    <div className="footer-nav">
                                        <ul>
                                            <li className='d-flex'><a href="http://google.com">Delivery Information</a></li>
                                            <li className='d-flex'><a href="http://google.com">Privacy Policy</a></li>
                                            <li className='d-flex'><a href="http://google.com">Terms & Conditions</a></li>
                                            <li className='d-flex'><a href="http://google.com">Support Center</a></li>
                                            <li className='d-flex'><a href="http://google.com">Careers</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-footer-wized">
                                    <h3 className="footer-title d-flex">Shop Categories</h3>
                                    <div className="footer-nav">
                                        <ul>
                                            <li className='d-flex'><a href="http://google.com">Contact Us</a></li>
                                            <li className='d-flex'><a href="http://google.com">Information</a></li>
                                            <li className='d-flex'><a href="http://google.com">About Us</a></li>
                                            <li className='d-flex'><a href="http://google.com">Careers</a></li>
                                            <li className='d-flex'><a href="http://google.com">Nest Stories</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-footer-wized">
                                    <h3 className="footer-title d-flex">Useful Links</h3>
                                    <div className="footer-nav">
                                        <ul>
                                            <li className='d-flex'><a href="http://google.com">Cancellation & Returns</a></li>
                                            <li className='d-flex'><a href="http://google.com">Report Infringement</a></li>
                                            <li className='d-flex'><a href="http://google.com">Payments</a></li>
                                            <li className='d-flex'><a href="http://google.com">Shipping</a></li>
                                            <li className='d-flex'><a href="http://google.com">FAQ</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-footer-wized">
                                    <h3 className="footer-title d-flex">Our Newsletter</h3>
                                    <p className="disc-news-letter d-flex text-align-start">
                                        Subscribe to the mailing list to receive updates one   <br /> the new arrivals and other discounts
                                    </p>
                                    <form className="footersubscribe-form" action="#">
                                        <input type="email" placeholder="Your email address" required />
                                        <button className="rts-btn btn-primary">Subscribe</button>
                                    </form>

                                    <p className="dsic d-flex">
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

                {/* <!-- <div id="myModal-1" className="modal fade" role="dialog">
                        <div className="modal-dialog bg_image">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-bs-dismiss="modal"><i className="fa-light fa-x"></i></button>
                                </div>
                                <div className="modal-body text-center">
                                    <div className="inner-content">
                                        <div className="content">
                                            <span className="pre-title">Get up to 30% off on your first $150 purchase</span>
                                            <h1 className="title">Feed Your Family at the    <br />
                                                Best Price</h1>
                                            <p className="disc">
                                                We have prepared special discounts for you on grocery products. Don't   <br /> miss these opportunities...
                                            </p>
                                            <div className="rts-btn-banner-area">
                                                <a href="http://google.com" className="rts-btn btn-primary radious-sm with-icon">
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
                                                <div className="price-area">
                                                    <span>
                                                        from
                                                    </span>
                                                    <h3 className="title animated fadeIn">$80.99</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> --> */}
                {/* </div> */}
            </div>
        </div>
    )
}
