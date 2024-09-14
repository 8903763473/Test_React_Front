import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

export const ProductDetail = ({ setLoading }) => {
    return (
        <div>
            <Header />



            <div class="rts-chop-details-area rts-section-gap bg_light-1">
                <div class="container">
                    <div class="shopdetails-style-1-wrapper">
                        <div class="row g-5">
                            <div class="col-xl-8 col-lg-8 col-md-12">
                                <div class="product-details-popup-wrapper in-shopdetails">
                                    <div class="rts-product-details-section rts-product-details-section2 product-details-popup-section">
                                        <div class="product-details-popup">
                                            <div class="details-product-area">
                                                <div class="product-thumb-area">
                                                    <div class="cursor"></div>
                                                    <div class="thumb-wrapper one filterd-items figure">
                                                        <div class="product-thumb zoom" onmousemove="zoom(event)" style={{ backgroundImage: `url(images/shop/01.jpg)` }}><img src="images/shop/01.jpg" alt="product-thumb" />
                                                        </div>
                                                    </div>
                                                    <div class="thumb-wrapper two filterd-items hide">
                                                        <div class="product-thumb zoom" onmousemove="zoom(event)" style={{ backgroundImage: `url(images/shop/02.jpg)` }}><img src="images/shop/02.jpg" alt="product-thumb" />
                                                        </div>
                                                    </div>
                                                    <div class="thumb-wrapper three filterd-items hide">
                                                        <div class="product-thumb zoom" onmousemove="zoom(event)" style={{ backgroundImage: `url(images/shop/03.jpg)` }}><img src="images/shop/03.jpg" alt="product-thumb" />
                                                        </div>
                                                    </div>
                                                    <div class="thumb-wrapper four filterd-items hide">
                                                        <div class="product-thumb zoom" onmousemove="zoom(event)" style={{ backgroundImage: `url(images/shop/04.jpg)` }}><img src="images/shop/04.jpg" alt="product-thumb" />
                                                        </div>
                                                    </div>
                                                    <div class="thumb-wrapper five filterd-items hide">
                                                        <div class="product-thumb zoom" onmousemove="zoom(event)" style={{ backgroundImage: `url(images/shop/05.jpg)` }}><img src="images/shop/05.jpg" alt="product-thumb" />
                                                        </div>
                                                    </div>
                                                    <div class="product-thumb-filter-group">
                                                        <div class="thumb-filter filter-btn active" data-show=".one"><img src="images/shop/01.jpg" alt="product-thumb-filter" /></div>
                                                        <div class="thumb-filter filter-btn" data-show=".two"><img src="images/shop/02.jpg" alt="product-thumb-filter" /></div>
                                                        <div class="thumb-filter filter-btn" data-show=".three"><img src="images/shop/03.jpg" alt="product-thumb-filter" /></div>
                                                        <div class="thumb-filter filter-btn" data-show=".four"><img src="images/shop/04.jpg" alt="product-thumb-filter" /></div>
                                                        <div class="thumb-filter filter-btn" data-show=".five"><img src="images/shop/05.jpg" alt="product-thumb-filter" /></div>
                                                    </div>
                                                </div>
                                                <div class="contents">
                                                    <div class="product-status">
                                                        <span class="product-catagory">Dress</span>
                                                        <div class="rating-stars-group">
                                                            <div class="rating-star"><i class="fas fa-star"></i></div>
                                                            <div class="rating-star"><i class="fas fa-star"></i></div>
                                                            <div class="rating-star"><i class="fas fa-star-half-alt"></i></div>
                                                            <span>10 Reviews</span>
                                                        </div>
                                                    </div>
                                                    <h2 class="product-title">Kitchen Fade Defy PLUG Air Freshener</h2>
                                                    <p class="mt--20 mb--20">
                                                        Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. It is a
                                                        completely modern design and you feel comfortable to put on this hijab.
                                                        Buy it at the best price.
                                                    </p>
                                                    <span class="product-price mb--15 d-block" style={{ color: '#DC2626', fontWeight: 600 }}> $36.25<span class="old-price ml--15">$69.35</span></span>
                                                    <div class="product-bottom-action">
                                                        <div class="cart-edits">
                                                            <div class="quantity-edit action-item">
                                                                <button class="button"><i class="fal fa-minus minus"></i></button>
                                                                <input type="text" class="input" value="01" />
                                                                <button class="button plus">+<i class="fal fa-plus plus"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                            <div class="btn-text">
                                                                Add To Cart
                                                            </div>
                                                            <div class="arrow-icon">
                                                                <i class="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div class="arrow-icon">
                                                                <i class="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                        <a href="javascript:void(0);" class="rts-btn btn-primary ml--20"><i class="fa-light fa-heart"></i></a>
                                                    </div>
                                                    <div class="product-uniques">
                                                        <span class="sku product-unipue mb--10"><span className='prodDetailText'>SKU: </span> BO1D0MX8SJ</span>
                                                        <span class="catagorys product-unipue mb--10"><span className='prodDetailText'>Categories: </span> T-Shirts, Tops, Mens</span>
                                                        <span class="tags product-unipue mb--10"><span className='prodDetailText'>Tags: </span> fashion, t-shirts, Men</span>
                                                        <span class="tags product-unipue mb--10"><span className='prodDetailText'>LIFE: </span> 6 Months</span>
                                                        <span class="tags product-unipue mb--10"><span className='prodDetailText'>Type: </span> original</span>
                                                        <span class="tags product-unipue mb--10"><span className='prodDetailText'>Category: </span> Beverages, Dairy & Bakery</span>
                                                    </div>
                                                    <div class="share-option-shop-details">
                                                        <div class="single-share-option">
                                                            <div class="icon">
                                                                <i class="fa-regular fa-heart"></i>
                                                            </div>
                                                            <span>Add To Wishlist</span>
                                                        </div>
                                                        <div class="single-share-option">
                                                            <div class="icon">
                                                                <i class="fa-solid fa-share"></i>
                                                            </div>
                                                            <span>Share On social</span>
                                                        </div>
                                                        <div class="single-share-option">
                                                            <div class="icon">
                                                                <i class="fa-light fa-code-compare"></i>
                                                            </div>
                                                            <span>Compare</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="product-discription-tab-shop mt--50">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Product Details</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Additional Information</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="profile-tabt" data-bs-toggle="tab" data-bs-target="#profile-tab-panes" type="button" role="tab" aria-controls="profile-tab-panes" aria-selected="false">Customer Reviews (01)</button>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade   show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                            <div class="single-tab-content-shop-details">
                                                <p class="disc">
                                                    Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
                                                </p>
                                                <div class="details-row-2">
                                                    <div class="left-area">
                                                        <img src="images/shop/06.jpg" alt="shop" />
                                                    </div>
                                                    <div class="right">
                                                        <h4 class="title">All Natural Italian-Style Chicken Meatballs</h4>
                                                        <p class="mb--25">
                                                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. ibero sit amet quam egestas semperAenean ultricies mi vitae est Mauris placerat eleifend.
                                                        </p>
                                                        <ul class="bottom-ul">
                                                            <li>Elementum sociis rhoncus aptent auctor urna justo</li>
                                                            <li>Habitasse venenatis gravida nisl, sollicitudin posuere</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                            <div class="single-tab-content-shop-details">
                                                <p class="disc">
                                                    Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
                                                </p>
                                                <div class="table-responsive table-shop-details-pd">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Kitchen Fade Defy</th>
                                                                <th>5KG</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>PRAN Full Cream Milk Powder</td>
                                                                <td>3KG</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Net weight</td>
                                                                <td>8KG</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Brand</td>
                                                                <td>Reactheme</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Item code</td>
                                                                <td>4000000005</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Product type</td>
                                                                <td>Powder milk</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <p class="cansellation mt--20">
                                                    <span> Return/cancellation:</span> No change will be applicable which are already delivered to customer. If product quality or quantity problem found then customer can return/cancel their order on delivery time with presence of delivery person.
                                                </p>
                                                <p class="note">
                                                    <span>Note:</span> Product delivery duration may vary due to product availability in stock.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="profile-tab-panes" role="tabpanel" aria-labelledby="profile-tabt" tabindex="0">
                                            <div class="single-tab-content-shop-details">
                                                <div class="product-details-review-product-style">
                                                    <div class="average-stars-area-left">
                                                        <div class="top-stars-wrapper">
                                                            <h4 class="review">
                                                                5.0
                                                            </h4>
                                                            <div class="rating-disc">
                                                                <span>Average Rating</span>
                                                                <div class="stars">
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <span>(1 Reviews & 0 Ratings)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="average-stars-area">
                                                            <h4 class="average">66.7%</h4>
                                                            <span>Recommended
                                                                (2 of 3)</span>
                                                        </div>
                                                        <div class="review-charts-details">
                                                            <div class="single-review">
                                                                <div class="stars">
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-solid fa-star"></i>
                                                                </div>
                                                                <div class="single-progress-area-incard">
                                                                    <div class="progress">
                                                                        <div class="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                                <span class="pac">100%</span>
                                                            </div>
                                                            <div class="single-review">
                                                                <div class="stars">
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-regular fa-star"></i>
                                                                </div>
                                                                <div class="single-progress-area-incard">
                                                                    <div class="progress">
                                                                        <div class="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                                <span class="pac">80%</span>
                                                            </div>
                                                            <div class="single-review">
                                                                <div class="stars">
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-regular fa-star"></i>
                                                                    <i class="fa-regular fa-star"></i>
                                                                </div>
                                                                <div class="single-progress-area-incard">
                                                                    <div class="progress">
                                                                        <div class="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '60%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                                <span class="pac">60%</span>
                                                            </div>
                                                            <div class="single-review">
                                                                <div class="stars">
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-regular fa-star"></i>
                                                                    <i class="fa-regular fa-star"></i>
                                                                    <i class="fa-regular fa-star"></i>
                                                                </div>
                                                                <div class="single-progress-area-incard">
                                                                    <div class="progress">
                                                                        <div class="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                                <span class="pac">40%</span>
                                                            </div>
                                                            <div class="single-review">
                                                                <div class="stars">
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-regular fa-star"></i>
                                                                    <i class="fa-regular fa-star"></i>
                                                                    <i class="fa-regular fa-star"></i>
                                                                    <i class="fa-regular fa-star"></i>
                                                                </div>
                                                                <div class="single-progress-area-incard">
                                                                    <div class="progress">
                                                                        <div class="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                                <span class="pac">30%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="submit-review-area">
                                                        <form action="#" class="submit-review-area">
                                                            <h5 class="title">Submit Your Review</h5>
                                                            <div class="your-rating">
                                                                <span>Your Rating Of This Product :</span>
                                                                <div class="stars">
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-solid fa-star"></i>
                                                                    <i class="fa-solid fa-star"></i>
                                                                </div>
                                                            </div>
                                                            <div class="half-input-wrapper">
                                                                <div class="half-input">
                                                                    <input type="text" placeholder="Your Name*" />
                                                                </div>
                                                                <div class="half-input">
                                                                    <input type="text" placeholder="Your Email *" />
                                                                </div>
                                                            </div>
                                                            <textarea name="#" id="#" placeholder="Write Your Review" required></textarea>
                                                            <button class="rts-btn btn-primary">SUBMIT REVIEW</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-12 offset-xl-1  rts-sticky-column-item">
                                <div class="theiaStickySidebar">
                                    <div class="shop-sight-sticky-sidevbar  mb--20">
                                        <h6 class="title">Available offers</h6>
                                        <div class="single-offer-area">
                                            <div class="icon">
                                                <img src="images/shop/01.svg" alt="icon" />
                                            </div>
                                            <div class="details">
                                                <p>Get %5 instant discount for the 1st Flipkart Order using Ekomart UPI T&C</p>
                                            </div>
                                        </div>
                                        <div class="single-offer-area">
                                            <div class="icon">
                                                <img src="images/shop/02.svg" alt="icon" />
                                            </div>
                                            <div class="details">
                                                <p>Flat $250 off on Citi-branded Credit Card EMI Transactions on orders of $30 and above T&C</p>
                                            </div>
                                        </div>
                                        <div class="single-offer-area">
                                            <div class="icon">
                                                <img src="images/shop/03.svg" alt="icon" />
                                            </div>
                                            <div class="details">
                                                <p>Free Worldwide Shipping on all
                                                    orders over $100</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="our-payment-method">
                                        <h5 class="title">Guaranteed Safe Checkout</h5>
                                        <img src="images/shop/03.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="rts-grocery-feature-area rts-section-gap bg_light-1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="title-area-between">
                                <h2 class="title-left">
                                    Related Product
                                </h2>
                                <div class="next-prev-swiper-wrapper">
                                    <div class="swiper-button-prev"><i class="fa-regular fa-chevron-left"></i></div>
                                    <div class="swiper-button-next"><i class="fa-regular fa-chevron-right"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="category-area-main-wrapper-one">
                                <div class="swiper mySwiper-category-1 swiper-data" data-swiper='{
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
                            "380":{
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
                            "1540":{
                                "slidesPerView":6,
                                "spaceBetween":16}
                            }
                        }'>
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="single-shopping-card-one">
                                                <div class="image-and-action-area-wrapper">
                                                    <a href="#" class="thumbnail-preview">
                                                        <div class="badge">
                                                            <span>25% <br />
                                                                Off
                                                            </span>
                                                            <i class="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/01.jpg" alt="grocery" />
                                                    </a>
                                                    <div class="action-share-option">
                                                        <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i class="fa-light fa-heart"></i>
                                                        </div>
                                                        <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i class="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i class="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="body-content">
                                                    <div class="time-tag">
                                                        <i class="fa-light fa-clock"></i>
                                                        9 MINS
                                                    </div>
                                                    <a href="#">
                                                        <h4 class="title">Nestle Cerelac Mixed Fruits &
                                                            Wheat with Milk</h4>
                                                    </a>
                                                    <span class="availability">500g Pack</span>
                                                    <div class="price-area">
                                                        <span class="current">$36.00</span>
                                                        <div class="previous">$36.00</div>
                                                    </div>
                                                    <div class="cart-counter-action">
                                                        <div class="quantity-edit">
                                                            <input type="text" class="input" value="1" />
                                                            <div class="button-wrapper-action">
                                                                <button class="button"><i class="fa-regular fa-chevron-down"></i></button>
                                                                <button class="button plus">+<i class="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                            <div class="btn-text">
                                                                Add To Cart
                                                            </div>
                                                            <div class="arrow-icon">
                                                                <i class="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div class="arrow-icon">
                                                                <i class="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="single-shopping-card-one">
                                                <div class="image-and-action-area-wrapper">
                                                    <a href="#" class="thumbnail-preview">
                                                        <div class="badge">
                                                            <span>25% <br />
                                                                Off
                                                            </span>
                                                            <i class="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/02.jpg" alt="grocery" />
                                                    </a>
                                                    <div class="action-share-option">
                                                        <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i class="fa-light fa-heart"></i>
                                                        </div>
                                                        <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i class="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i class="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="body-content">
                                                    <div class="time-tag">
                                                        <i class="fa-light fa-clock"></i>
                                                        9 MINS
                                                    </div>
                                                    <a href="#">
                                                        <h4 class="title">Peysan Full Fat Fresh Cottage Cheese</h4>
                                                    </a>
                                                    <span class="availability">500g Pack</span>
                                                    <div class="price-area">
                                                        <span class="current">$36.00</span>
                                                        <div class="previous">$36.00</div>
                                                    </div>
                                                    <div class="cart-counter-action">
                                                        <div class="quantity-edit">
                                                            <input type="text" class="input" value="1" />
                                                            <div class="button-wrapper-action">
                                                                <button class="button"><i class="fa-regular fa-chevron-down"></i></button>
                                                                <button class="button plus">+<i class="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                            <div class="btn-text">
                                                                Add To Cart
                                                            </div>
                                                            <div class="arrow-icon">
                                                                <i class="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div class="arrow-icon">
                                                                <i class="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="single-shopping-card-one">
                                                <div class="image-and-action-area-wrapper">
                                                    <a href="#" class="thumbnail-preview">
                                                        <div class="badge">
                                                            <span>25% <br />
                                                                Off
                                                            </span>
                                                            <i class="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/03.jpg" alt="grocery" />
                                                    </a>
                                                    <div class="action-share-option">
                                                        <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i class="fa-light fa-heart"></i>
                                                        </div>
                                                        <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i class="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i class="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="body-content">
                                                    <div class="time-tag">
                                                        <i class="fa-light fa-clock"></i>
                                                        9 MINS
                                                    </div>
                                                    <a href="#">
                                                        <h4 class="title">Aptamil Gold+ ProNutra Biotik Stage 1 Infant Formula...</h4>
                                                    </a>
                                                    <span class="availability">500g Pack</span>
                                                    <div class="price-area">
                                                        <span class="current">$36.00</span>
                                                        <div class="previous">$36.00</div>
                                                    </div>
                                                    <div class="cart-counter-action">
                                                        <div class="quantity-edit">
                                                            <input type="text" class="input" value="1" />
                                                            <div class="button-wrapper-action">
                                                                <button class="button"><i class="fa-regular fa-chevron-down"></i></button>
                                                                <button class="button plus">+<i class="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                            <div class="btn-text">
                                                                Add To Cart
                                                            </div>
                                                            <div class="arrow-icon">
                                                                <i class="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div class="arrow-icon">
                                                                <i class="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="single-shopping-card-one">
                                                <div class="image-and-action-area-wrapper">
                                                    <a href="#" class="thumbnail-preview">
                                                        <div class="badge">
                                                            <span>25% <br />
                                                                Off
                                                            </span>
                                                            <i class="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/04.jpg" alt="grocery" />
                                                    </a>
                                                    <div class="action-share-option">
                                                        <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i class="fa-light fa-heart"></i>
                                                        </div>
                                                        <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i class="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i class="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="body-content">
                                                    <div class="time-tag">
                                                        <i class="fa-light fa-clock"></i>
                                                        9 MINS
                                                    </div>
                                                    <a href="#">
                                                        <h4 class="title">Abbott Pediasure Chocolate Refill Pack</h4>
                                                    </a>
                                                    <span class="availability">500g Pack</span>
                                                    <div class="price-area">
                                                        <span class="current">$36.00</span>
                                                        <div class="previous">$36.00</div>
                                                    </div>
                                                    <div class="cart-counter-action">
                                                        <div class="quantity-edit">
                                                            <input type="text" class="input" value="1" />
                                                            <div class="button-wrapper-action">
                                                                <button class="button"><i class="fa-regular fa-chevron-down"></i></button>
                                                                <button class="button plus">+<i class="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                            <div class="btn-text">
                                                                Add To Cart
                                                            </div>
                                                            <div class="arrow-icon">
                                                                <i class="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div class="arrow-icon">
                                                                <i class="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="single-shopping-card-one">
                                                <div class="image-and-action-area-wrapper">
                                                    <a href="#" class="thumbnail-preview">
                                                        <div class="badge">
                                                            <span>25% <br />
                                                                Off
                                                            </span>
                                                            <i class="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/05.jpg" alt="grocery" />
                                                    </a>
                                                    <div class="action-share-option">
                                                        <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i class="fa-light fa-heart"></i>
                                                        </div>
                                                        <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i class="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i class="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="body-content">
                                                    <div class="time-tag">
                                                        <i class="fa-light fa-clock"></i>
                                                        9 MINS
                                                    </div>
                                                    <a href="#">
                                                        <h4 class="title">Pastine Mellin Filid Angelo 100% Di Grano Tenero</h4>
                                                    </a>
                                                    <span class="availability">500g Pack</span>
                                                    <div class="price-area">
                                                        <span class="current">$36.00</span>
                                                        <div class="previous">$36.00</div>
                                                    </div>
                                                    <div class="cart-counter-action">
                                                        <div class="quantity-edit">
                                                            <input type="text" class="input" value="1" />
                                                            <div class="button-wrapper-action">
                                                                <button class="button"><i class="fa-regular fa-chevron-down"></i></button>
                                                                <button class="button plus">+<i class="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                            <div class="btn-text">
                                                                Add To Cart
                                                            </div>
                                                            <div class="arrow-icon">
                                                                <i class="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div class="arrow-icon">
                                                                <i class="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="single-shopping-card-one">
                                                <div class="image-and-action-area-wrapper">
                                                    <a href="#" class="thumbnail-preview">
                                                        <div class="badge">
                                                            <span>25% <br />
                                                                Off
                                                            </span>
                                                            <i class="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/06.jpg" alt="grocery" />
                                                    </a>
                                                    <div class="action-share-option">
                                                        <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i class="fa-light fa-heart"></i>
                                                        </div>
                                                        <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i class="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i class="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="body-content">
                                                    <div class="time-tag">
                                                        <i class="fa-light fa-clock"></i>
                                                        9 MINS
                                                    </div>
                                                    <a href="#">
                                                        <h4 class="title">Aussie Bubs Goat Milk Infant Formula Stage 1,</h4>
                                                    </a>
                                                    <span class="availability">500g Pack</span>
                                                    <div class="price-area">
                                                        <span class="current">$36.00</span>
                                                        <div class="previous">$36.00</div>
                                                    </div>
                                                    <div class="cart-counter-action">
                                                        <div class="quantity-edit">
                                                            <input type="text" class="input" value="1" />
                                                            <div class="button-wrapper-action">
                                                                <button class="button"><i class="fa-regular fa-chevron-down"></i></button>
                                                                <button class="button plus">+<i class="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                            <div class="btn-text">
                                                                Add To Cart
                                                            </div>
                                                            <div class="arrow-icon">
                                                                <i class="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div class="arrow-icon">
                                                                <i class="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="single-shopping-card-one">
                                                <div class="image-and-action-area-wrapper">
                                                    <a href="#" class="thumbnail-preview">
                                                        <div class="badge">
                                                            <span>25% <br />
                                                                Off
                                                            </span>
                                                            <i class="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <img src="images/grocery/15.jpg" alt="grocery" />
                                                    </a>
                                                    <div class="action-share-option">
                                                        <div class="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                                            <i class="fa-light fa-heart"></i>
                                                        </div>
                                                        <div class="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <i class="fa-solid fa-arrows-retweet"></i>
                                                        </div>
                                                        <div class="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                                            <i class="fa-regular fa-eye"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="body-content">
                                                    <div class="time-tag">
                                                        <i class="fa-light fa-clock"></i>
                                                        9 MINS
                                                    </div>
                                                    <a href="#">
                                                        <h4 class="title">Nestle Cerelac Mixed Fruits &
                                                            Wheat with Milk</h4>
                                                    </a>
                                                    <span class="availability">500g Pack</span>
                                                    <div class="price-area">
                                                        <span class="current">$36.00</span>
                                                        <div class="previous">$36.00</div>
                                                    </div>
                                                    <div class="cart-counter-action">
                                                        <div class="quantity-edit">
                                                            <input type="text" class="input" value="1" />
                                                            <div class="button-wrapper-action">
                                                                <button class="button"><i class="fa-regular fa-chevron-down"></i></button>
                                                                <button class="button plus">+<i class="fa-regular fa-chevron-up"></i></button>
                                                            </div>
                                                        </div>
                                                        <a href="#" class="rts-btn btn-primary radious-sm with-icon">
                                                            <div class="btn-text">
                                                                Add To Cart
                                                            </div>
                                                            <div class="arrow-icon">
                                                                <i class="fa-regular fa-cart-shopping"></i>
                                                            </div>
                                                            <div class="arrow-icon">
                                                                <i class="fa-regular fa-cart-shopping"></i>
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
        </div >
    )
}
