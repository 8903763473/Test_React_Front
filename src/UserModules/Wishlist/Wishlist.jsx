import React, { useState, useEffect, useRef } from 'react';
import api from "../../ApiService/apiService";
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import NotificationCenter from '../../CommonModule/Notification/Notification';
import './Wishlist.scss';
export const Wishlist = ({ setLoading }) => {

    const [wishlistItems, setWishlistItems] = useState([]);
    const [loading, setLoad] = useState(false);

    const notificationRef = useRef();
    const triggerNotification = (type, title, subtitle, button, path) => {
        if (notificationRef.current) {
            notificationRef.current.spawnNotification(type, title, subtitle, button, path);
        }
    };

    const addCart = (data) => {
        const isLogged = localStorage.getItem('login')
        if (isLogged == 'success') {
            let post = {
                "productId": data._id,
                "quantity": data.quantity,
                "userId": localStorage.getItem('userId')
            }
            api.AddToCart(post)
                .then(response => {
                    setLoad(true);
                    setTimeout(() => {
                        setLoad(false);
                    }, 3000);
                    triggerNotification('success', 'Success', 'Successfully Added in cart', 'x', null)
                }).catch(error => {
                    triggerNotification('error', 'Error', error.response.data.message, 'x', null)
                })
        } else {
            triggerNotification('warning', 'Warning', 'Login to continue !', null, 'login')
        }
    };

    const getwishlist = () => {
        let post = {
            "userId": localStorage.getItem('userId')
        };
        api.GetwishList(post)
            .then((res) => {
                setWishlistItems(res.data.items);
            })
            .catch((error) => {
                console.error('Error fetching wishlist:', error);
            });
    };

    const Removewishlist = (data) => {
        console.log(data);
        const userId = localStorage.getItem('userId');
        api.RemoveWishlist(data.productId._id, userId)
            .then((res) => {
                setWishlistItems([])
                getwishlist()
            })
            .catch((error) => {
                console.error('Error removing wishlist item:', error);
            });
    };

    const ClearAll = () => {
        const userId = localStorage.getItem('userId');
        api.ClearAll(userId)
            .then(res => {
                setWishlistItems([])
                getwishlist()
            })
            .catch((error) => {
                console.error('Error removing All wishlist item:', error);
            });
    }

    useEffect(() => {
        getwishlist();
    }, []);


    const IncreaseQuantity = (index) => {
        const updatedCart = [...wishlistItems];
        console.log(updatedCart[index]);
        updatedCart[index].quantity += 1;
        setWishlistItems(updatedCart);
    };

    const DecreaseQuantity = (index) => {
        const updatedCart = [...wishlistItems];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
            setWishlistItems(updatedCart);
        }
    };


    return (
        <div>
            <NotificationCenter ref={notificationRef} />
            <Header />
            <div className="rts-cart-area rts-section-gap bg_light-1">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="rts-cart-list-area wishlist">
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
                                    <div className="button-area">
                                        <div className="button-area">
                                            <a className="rts-btn btn-primary radious-sm with-icon" onClick={() => ClearAll()} style={{ cursor: 'pointer' }}>
                                                <div className="btn-text">
                                                    Clear All
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {wishlistItems.length > 0 ? (
                                    wishlistItems.map((Wishlist, index) => (
                                        <div className="single-cart-area-list main item-parent" key={Wishlist._id}>
                                            <div className="product-main-cart">
                                                <div className="close section-activation">
                                                    <img src="images/shop/01.png" alt="shop" onClick={() => Removewishlist(Wishlist)} />
                                                </div>
                                                <div className="thumbnail">
                                                    <img src={Wishlist.productId.productImage} alt={Wishlist.productId.productName} />
                                                </div>
                                                <div className="information">
                                                    <h6 className="title">{Wishlist.productId.productName}</h6>
                                                    <span>{Wishlist.productId.productCategory}</span>
                                                </div>
                                            </div>
                                            <div className="price">
                                                <p>₹{Wishlist.productId.productCurrentRate || 'N/A'}</p>
                                            </div>
                                            <div className="quantity">
                                                <div className="quantity-edit">
                                                    <input type="text" className="input" value={Wishlist.quantity || 1} readOnly />
                                                    <div className="button-wrapper-action">
                                                        <button className="button" onClick={() => DecreaseQuantity(index)}><i className="fa-regular fa-chevron-down"></i></button>
                                                        <button className="button plus" onClick={() => IncreaseQuantity(index)}>+<i className="fa-regular fa-chevron-up"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="subtotal">
                                                <p>₹{Wishlist.productId.productCurrentRate ? Wishlist.productId.productCurrentRate * Wishlist.quantity : 'N/A'}</p>
                                            </div>
                                            <div className="button-area">
                                                <a className="rts-btn btn-primary radious-sm with-icon" onClick={() => addCart(Wishlist)} style={{ cursor: 'pointer' }}>
                                                    <div className="btn-text">
                                                        Add To Cart
                                                    </div>
                                                    <div className="arrow-icon">
                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p style={{ fontSize: '20px', padding: '22px 20px', display: 'block', fontWeight: '600', color: '#629d23' }}>No Wishlist Item</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="rts-shorts-service-area rts-section-gap bg_primary">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div class="single-short-service-area-start">
                                <div class="icon-area">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="40" cy="40" r="40" fill="white"></circle>
                                        <path d="M55.7029 25.2971C51.642 21.2363 46.2429 19 40.5 19C34.7571 19 29.358 21.2363 25.2971 25.2971C21.2364 29.358 19 34.7571 19 40.5C19 46.2429 21.2364 51.642 25.2971 55.7029C29.358 59.7637 34.7571 62 40.5 62C46.2429 62 51.642 59.7637 55.7029 55.7029C59.7636 51.642 62 46.2429 62 40.5C62 34.7571 59.7636 29.358 55.7029 25.2971ZM40.5 59.4805C30.0341 59.4805 21.5195 50.9659 21.5195 40.5C21.5195 30.0341 30.0341 21.5195 40.5 21.5195C50.9659 21.5195 59.4805 30.0341 59.4805 40.5C59.4805 50.9659 50.9659 59.4805 40.5 59.4805Z" fill="#629D23"></path>
                                        <path d="M41.8494 39.2402H39.1506C37.6131 39.2402 36.3623 37.9895 36.3623 36.452C36.3623 34.9145 37.6132 33.6638 39.1506 33.6638H44.548C45.2438 33.6638 45.8078 33.0997 45.8078 32.404C45.8078 31.7083 45.2438 31.1442 44.548 31.1442H41.7598V28.3559C41.7598 27.6602 41.1957 27.0962 40.5 27.0962C39.8043 27.0962 39.2402 27.6602 39.2402 28.3559V31.1442H39.1507C36.2239 31.1442 33.8429 33.5253 33.8429 36.452C33.8429 39.3787 36.224 41.7598 39.1507 41.7598H41.8495C43.3869 41.7598 44.6377 43.0106 44.6377 44.548C44.6377 46.0855 43.3869 47.3363 41.8495 47.3363H36.452C35.7563 47.3363 35.1923 47.9004 35.1923 48.5961C35.1923 49.2918 35.7563 49.8559 36.452 49.8559H39.2402V52.6442C39.2402 53.34 39.8043 53.904 40.5 53.904C41.1957 53.904 41.7598 53.34 41.7598 52.6442V49.8559H41.8494C44.7761 49.8559 47.1571 47.4747 47.1571 44.548C47.1571 41.6214 44.7761 39.2402 41.8494 39.2402Z" fill="#629D23"></path>
                                    </svg>

                                </div>
                                <div class="information">
                                    <h4 class="title">Best Prices &amp; Offers</h4>
                                    <p class="disc">
                                        We prepared special discounts you on grocery products.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div class="single-short-service-area-start">
                                <div class="icon-area">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="40" cy="40" r="40" fill="white"></circle>
                                        <path d="M55.5564 24.4436C51.4012 20.2884 45.8763 18 40 18C34.1237 18 28.5988 20.2884 24.4436 24.4436C20.2884 28.5988 18 34.1237 18 40C18 45.8763 20.2884 51.4012 24.4436 55.5564C28.5988 59.7116 34.1237 62 40 62C45.8763 62 51.4012 59.7116 55.5564 55.5564C59.7116 51.4012 62 45.8763 62 40C62 34.1237 59.7116 28.5988 55.5564 24.4436ZM40 59.4219C29.2907 59.4219 20.5781 50.7093 20.5781 40C20.5781 29.2907 29.2907 20.5781 40 20.5781C50.7093 20.5781 59.4219 29.2907 59.4219 40C59.4219 50.7093 50.7093 59.4219 40 59.4219Z" fill="#629D23"></path>
                                        <path d="M42.4009 34.7622H35.0294L36.295 33.4966C36.7982 32.9934 36.7982 32.177 36.295 31.6738C35.7914 31.1703 34.9753 31.1703 34.4718 31.6738L31.0058 35.1398C30.5022 35.6434 30.5022 36.4594 31.0058 36.9626L34.4718 40.429C34.7236 40.6808 35.0536 40.8067 35.3832 40.8067C35.7132 40.8067 36.0432 40.6808 36.295 40.429C36.7982 39.9255 36.7982 39.1094 36.295 38.6059L35.0291 37.3403H42.4009C44.8229 37.3403 46.7934 39.3108 46.7934 41.7328C46.7934 44.1549 44.8229 46.1254 42.4009 46.1254H37.8925C37.1805 46.1254 36.6035 46.7028 36.6035 47.4145C36.6035 48.1265 37.1805 48.7035 37.8925 48.7035H42.4009C46.2446 48.7035 49.3716 45.5765 49.3716 41.7328C49.3716 37.8892 46.2446 34.7622 42.4009 34.7622Z" fill="#629D23"></path>
                                    </svg>

                                </div>
                                <div class="information">
                                    <h4 class="title">100% Return Policy</h4>
                                    <p class="disc">
                                        We prepared special discounts you on grocery products.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div class="single-short-service-area-start">
                                <div class="icon-area">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="40" cy="40" r="40" fill="white"></circle>
                                        <path d="M26.2667 26.2667C29.935 22.5983 34.8122 20.5781 40 20.5781C43.9672 20.5781 47.8028 21.7849 51.0284 24.0128L48.5382 24.2682L48.8013 26.8328L55.5044 26.1453L54.8169 19.4422L52.2522 19.7053L52.4751 21.8787C48.8247 19.3627 44.4866 18 40 18C34.1236 18 28.5989 20.2884 24.4437 24.4437C20.2884 28.5989 18 34.1236 18 40C18 44.3993 19.2946 48.6457 21.7437 52.28L23.8816 50.8393C23.852 50.7952 23.8232 50.7508 23.7939 50.7065C21.69 47.5289 20.5781 43.8307 20.5781 40C20.5781 34.8123 22.5983 29.935 26.2667 26.2667Z" fill="#629D23"></path>
                                        <path d="M58.2564 27.72L56.1184 29.1607C56.148 29.2047 56.1768 29.2493 56.2061 29.2935C58.3099 32.4711 59.4219 36.1693 59.4219 40C59.4219 45.1878 57.4017 50.065 53.7333 53.7333C50.0651 57.4017 45.1879 59.4219 40 59.4219C36.0328 59.4219 32.1972 58.2151 28.9716 55.9872L31.4618 55.7318L31.1987 53.1672L24.4956 53.8547L25.1831 60.5578L27.7478 60.2947L27.5249 58.1213C31.1754 60.6373 35.5135 62 40 62C45.8764 62 51.4011 59.7116 55.5564 55.5563C59.7117 51.4011 62 45.8764 62 40C62 35.6007 60.7055 31.3543 58.2564 27.72Z" fill="#629D23"></path>
                                        <path d="M28.7407 42.7057L30.4096 41.1632C31.6739 40 31.9142 39.2161 31.9142 38.3564C31.9142 36.7127 30.5108 35.6633 28.4753 35.6633C26.7305 35.6633 25.4788 36.3966 24.8087 37.5093L26.6673 38.546C27.0213 37.9771 27.6029 37.6863 28.2477 37.6863C29.0063 37.6863 29.3856 38.0276 29.3856 38.5966C29.3856 38.9633 29.2845 39.3679 28.5764 40.0254L25.2639 43.123V44.6907H32.1544V42.7057L28.7407 42.7057Z" fill="#629D23"></path>
                                        <path d="M40.1076 42.9965H41.4224V41.0115H40.1076V39.507H37.7433V41.0115H35.948L39.5512 35.8404H36.9594L32.9894 41.3655V42.9965H37.6674V44.6906H40.1076V42.9965Z" fill="#629D23"></path>
                                        <path d="M43.6986 45.955L47.8708 34.045H45.7341L41.5618 45.955H43.6986Z" fill="#629D23"></path>
                                        <path d="M49.995 39.1908V37.8254H52.3213L49.3375 44.6906H52.0685L55.1913 37.4081V35.8404H47.8582V39.1908H49.995Z" fill="#629D23"></path>
                                    </svg>

                                </div>
                                <div class="information">
                                    <h4 class="title">Support 24/7</h4>
                                    <p class="disc">
                                        We prepared special discounts you on grocery products.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div class="single-short-service-area-start">
                                <div class="icon-area">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="40" cy="40" r="40" fill="white"></circle>
                                        <path d="M57.0347 37.5029C54.0518 29.3353 48.6248 23.7668 48.3952 23.5339L46.2276 21.3333V29.6016C46.2276 30.3124 45.658 30.8906 44.9578 30.8906C44.2577 30.8906 43.688 30.3124 43.688 29.6016C43.688 23.2045 38.5614 18 32.26 18H30.9902V19.2891C30.9902 25.3093 27.0988 29.646 24.1414 35.2212C21.1581 40.8449 21.3008 47.7349 24.5138 53.2021C27.7234 58.6637 33.5291 62 39.7786 62H40.3686C46.1822 62 51.6369 59.1045 54.9597 54.2545C58.2819 49.4054 59.056 43.0371 57.0347 37.5029ZM52.8748 52.7824C50.0265 56.9398 45.3513 59.4219 40.3686 59.4219H39.7786C34.4416 59.4219 29.4281 56.5325 26.6947 51.8813C23.9369 47.1886 23.8153 41.2733 26.3773 36.4436C29.1752 31.1691 32.9752 26.8193 33.4744 20.662C37.803 21.265 41.1483 25.0441 41.1483 29.6015C41.1483 31.7338 42.8572 33.4687 44.9577 33.4687C47.0581 33.4687 48.767 31.7338 48.767 29.6015V27.9161C50.54 30.2131 53.0138 33.9094 54.6534 38.399C56.3856 43.1416 55.704 48.653 52.8748 52.7824Z" fill="#629D23"></path>
                                        <path d="M38.6089 40C38.6089 37.8676 36.9 36.1328 34.7996 36.1328C32.6991 36.1328 30.9902 37.8676 30.9902 40C30.9902 42.1324 32.6991 43.8672 34.7996 43.8672C36.9 43.8672 38.6089 42.1324 38.6089 40ZM33.5298 40C33.5298 39.2892 34.0994 38.7109 34.7996 38.7109C35.4997 38.7109 36.0693 39.2892 36.0693 40C36.0693 40.7108 35.4997 41.2891 34.7996 41.2891C34.0994 41.2891 33.5298 40.7108 33.5298 40Z" fill="#629D23"></path>
                                        <path d="M44.9578 46.4453C42.8573 46.4453 41.1485 48.1801 41.1485 50.3125C41.1485 52.4449 42.8573 54.1797 44.9578 54.1797C47.0583 54.1797 48.7672 52.4449 48.7672 50.3125C48.7672 48.1801 47.0583 46.4453 44.9578 46.4453ZM44.9578 51.6016C44.2577 51.6016 43.688 51.0233 43.688 50.3125C43.688 49.6017 44.2577 49.0234 44.9578 49.0234C45.658 49.0234 46.2276 49.6017 46.2276 50.3125C46.2276 51.0233 45.658 51.6016 44.9578 51.6016Z" fill="#629D23"></path>
                                        <path d="M32.5466 52.0632L45.2407 36.599L47.1911 38.249L34.4969 53.7132L32.5466 52.0632Z" fill="#629D23"></path>
                                    </svg>
                                </div>
                                <div class="information">
                                    <h4 class="title">Great Offer Daily Deal</h4>
                                    <p class="disc">
                                        We prepared special discounts you on grocery products.
                                    </p>
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
export default Wishlist;