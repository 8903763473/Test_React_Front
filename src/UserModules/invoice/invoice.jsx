import React, { useState, useEffect, useRef } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import api from '../../ApiService/apiService';
import html2pdf from 'html2pdf.js';

const InVoice = ({ setLoading }) => {
    const [myOrdersFullData, setmyOrdersFullData] = useState({})
    const [myOrders, setmyOrders] = useState([])
    const [subTotal, setSubTotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    const receiptRef = useRef();

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('orderId');

    const getInvoiceData = (invoiceId) => {
        setLoading(true)
        api.getOrdersById(invoiceId)
            .then(res => {
                console.log("Invoice Responce",res.data);
                setmyOrdersFullData(res.data);
                setmyOrders(res.data.products);
                const calculatedSubTotal = res.data.products.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);
                setSubTotal(calculatedSubTotal);

                const calculatedTax = calculatedSubTotal * 0.05;
                setTax(calculatedTax);
                const calculatedGrandTotal = calculatedSubTotal + calculatedTax;
                setGrandTotal(calculatedGrandTotal);
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
            });
    };

    useEffect(() => {
        if (id) {
            getInvoiceData(id);
        }
    }, [id]);

    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const formattedTime = `${hours}:${minutes} ${ampm}`;
        return `${formattedDate} - ${formattedTime}`;
    };


    const downloadInvoice = () => {
        const element = receiptRef.current;
        html2pdf()
            .from(element)
            .save();
    }

    const navigate = useNavigate();

    const Gohome = () => {
        navigate('/home');
    };

    return (

        <div>
            <Header />

            <div className="rts-invoice-style-one">
                <div className="container-2">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="invoice-main-wrapper-1" ref={receiptRef}>
                                <div className="logo-top-area">
                                    <div className="logo">
                                        <img src="images/logo/logo-01.svg" alt="logo" style={{ width: '260px', borderRadius: '10px' }} />
                                    </div>
                                    <div className="invoice-location">
                                        <h6 className="title">{myOrdersFullData.name}</h6>
                                        <span className="number">{myOrdersFullData.phone}</span>
                                        <span className="email">{myOrdersFullData.email}</span>
                                        <span className="website">{formatDateTime(myOrdersFullData.createdAt)}</span>

                                        <span style={{ maxWidth: '300px' }}>{`${myOrdersFullData.street}, ${myOrdersFullData.city}, ${myOrdersFullData.state}, ${myOrdersFullData.zipCode}, ${myOrdersFullData.country}`}</span>
                                    </div>
                                </div>
                                <div className="invoice-banner bg_image">

                                </div>
                                <div className="invoice-center-rts">
                                    <div className="table-responsive">
                                        <table className="table table-striped invoice-table">
                                            <thead className="bg-active">
                                                <tr>
                                                    <th>Item Item</th>
                                                    <th className="text-center">Unit Price</th>
                                                    <th className="text-center">Quantity</th>
                                                    <th className="text-right">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    myOrders.map(prod => (
                                                        <tr key={prod.id}>
                                                            <td>
                                                                <div className="item-desc-1">
                                                                    <span>{prod.productId.productName}</span>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">₹ {prod.price}</td>
                                                            <td className="text-center">{prod.quantity}</td>
                                                            <td className="text-right">₹ {(prod.price * prod.quantity).toFixed(2)}</td>
                                                        </tr>
                                                    ))
                                                }

                                                <tr>
                                                    <td colSpan="3" className="text-end f-w-600">SubTotal</td>
                                                    <td className="text-right">₹ {subTotal.toFixed(2)}</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="3" className="text-end f-w-600">Tax</td>
                                                    <td className="text-right">₹ {tax.toFixed(2)}</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="3" className="text-end f-w-600">Grand Total</td>
                                                    <td className="text-right f-w-600">₹ {grandTotal.toFixed(2)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="buttons-area-invoice no-print mb--30 pointer" style={{display:'flex',alignContent:'center',justifyContent:'center',flexWrap:'wrap'}}>    
 
                                <a href="javascript:window.print()" className="rts-btn btn-primary radious-sm with-icon">
                                    <div className="btn-text">
                                        Print Now
                                    </div>
                                    <div className="arrow-icon">
                                        <i className="fa-regular fa-print"></i>
                                    </div>
                                    <div className="arrow-icon">
                                        <i className="fa-regular fa-print"></i>
                                    </div>
                                </a>
                                <a className="rts-btn btn-primary radious-sm with-icon pointer" onClick={downloadInvoice}>
                                    <div className="btn-text">
                                        Download
                                    </div>
                                    <div className="arrow-icon">
                                        <i className="fa-thin fa-download"></i>
                                    </div>
                                    <div className="arrow-icon">
                                        <i className="fa-thin fa-download"></i>
                                    </div>
                                </a>

                                <a className="rts-btn btn-primary radious-sm with-icon pointer" onClick={Gohome}>
                                <div className="arrow-icon">
                                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                                                        </div>
                                    <div className="arrow-icon">
                                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                                                        </div>
                                    <div className="btn-text">
                                        Go Back
                                    </div>
                                   
                                </a>

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
                                    <div className="product-thumb zoom" onmousemove="zoom(event)"
                                        style={{ backgroundImage: 'url(assets/images/products/product-details.jpg)' }}>
                                        <img
                                            src="assets/images/products/product-details.jpg" alt="product-thumb" />
                                    </div>
                                </div>
                                <div className="thumb-wrapper two filterd-items hide">
                                    <div className="product-thumb zoom" onmousemove="zoom(event)"
                                        style={{ backgroundImage: 'url(assets/images/products/product-filt2.jpg)' }}><img
                                            src="assets/images/products/product-filt2.jpg" alt="product-thumb" />
                                    </div>
                                </div>
                                <div className="thumb-wrapper three filterd-items hide">
                                    <div className="product-thumb zoom" onmousemove="zoom(event)"
                                        style={{ backgroundImage: 'url(assets/images/products/product-filt3.jpg)' }}><img
                                            src="assets/images/products/product-filt3.jpg" alt="product-thumb" />
                                    </div>
                                </div>
                                <div className="product-thumb-filter-group">
                                    <div className="thumb-filter filter-btn active" data-show=".one"><img
                                        src="assets/images/products/product-filt1.jpg" alt="product-thumb-filter" /></div>
                                    <div className="thumb-filter filter-btn" data-show=".two"><img
                                        src="assets/images/products/product-filt2.jpg" alt="product-thumb-filter" /></div>
                                    <div className="thumb-filter filter-btn" data-show=".three"><img
                                        src="assets/images/products/product-filt3.jpg" alt="product-thumb-filter" /></div>
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
                                    <a href="#" className="rts-btn btn-primary radious-sm with-icon">
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
                                    <a href="javascript:void(0);" className="rts-btn btn-primary ml--20"><i className="fa-light fa-heart"></i></a>
                                </div>
                                <div className="product-uniques">
                                    <span className="sku product-unipue"><span>SKU: </span> BO1D0MX8SJ</span>
                                    <span className="catagorys product-unipue"><span>Categories: </span> T-Shirts, Tops, Mens</span>
                                    <span className="tags product-unipue"><span>Tags: </span> fashion, t-shirts, Men</span>
                                </div>
                                <div className="share-social">
                                    <span>Share:</span>
                                    <a className="platform" href="http://facebook.com/" target="_blank"><i
                                        className="fab fa-facebook-f"></i></a>
                                    <a className="platform" href="http://twitter.com/" target="_blank"><i
                                        className="fab fa-twitter"></i></a>
                                    <a className="platform" href="http://behance.com/" target="_blank"><i
                                        className="fab fa-behance"></i></a>
                                    <a className="platform" href="http://youtube.com/" target="_blank"><i
                                        className="fab fa-youtube"></i></a>
                                    <a className="platform" href="http://linkedin.com/" target="_blank"><i
                                        className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="successfully-addedin-wishlist">
    <div className="d-flex" style={{alignitems: 'center', gap: '15px'}}>
        <i className="fa-regular fa-check"></i>
        <p>Your item has already added in wishlist successfully</p>
    </div>
</div> */}



            <div className="modal modal-compare-area-start fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                        <img src="assets/images/grocery/01.jpg" alt="grocery" />
                                    </div>
                                </div>
                                <div className="single-compare-elements">
                                    <div className="thumbnail-preview">
                                        <img src="assets/images/grocery/02.jpg" alt="grocery" />
                                    </div>
                                </div>
                                <div className="single-compare-elements">
                                    <div className="thumbnail-preview">
                                        <img src="assets/images/grocery/03.jpg" alt="grocery" />
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
                                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
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
                                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
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
                                        <a href="#" className="rts-btn btn-primary radious-sm with-icon">
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
                    <path
                        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                        style={{
                            transition: 'stroke-dashoffset 10ms linear 0s',
                            strokeDasharray: '307.919, 307.919',
                            strokeDashoffset: '307.919',
                        }}
                    ></path>
                </svg>
            </div>




            <Footer />
        </div >


    )
}
export default InVoice;