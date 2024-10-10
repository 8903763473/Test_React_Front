import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import '../about/About.scss'

export const About = ({ setLoading }) => {
    return (
        <div>
            <Header />

            <div class="about-banner-area-bg rts-section-gap bg_iamge">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="inner-content-about-area">
                        <h1 class="title">Do You Want To Know Us?</h1>
                        <p class="disc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu finibus nunc ullamcorper et.
                        </p>
                        <a class="rts-btn btn-primary">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="rts-counter-area">
        <div class="container-3">
            <div class="row">
                <div class="col-lg-12">
                    <div class="counter-area-main-wrapper">
                        <div class="single-counter-area">
                            <h2 class="title"><span class="counter">60</span>M+</h2>
                            <p>
                                Happy <br/>
                                Customers
                            </p>
                        </div>
                        <div class="single-counter-area">
                            <h2 class="title"><span class="counter">105</span>M+</h2>
                            <p>
                                Grocery <br/>
                                Products
                            </p>
                        </div>
                        <div class="single-counter-area">
                            <h2 class="title"><span class="counter">80</span>K+</h2>
                            <p>
                                Active <br/>
                                Salesman
                            </p>
                        </div>
                        <div class="single-counter-area">
                            <h2 class="title"><span class="counter">60</span>K+</h2>
                            <p>
                                Store <br/>
                                Worldwide
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="rts-about-area rts-section-gap2">
        <div class="container-3">
            <div class="row align-items-center">
                <div class="col-lg-4">
                    <div class="thumbnail-left">
                        <img src="images/about/02.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-lg-8 pl--60 pl_md--10 pt_md--30 pl_sm--10 pt_sm--30">
                    <div class="about-content-area-1">
                        <h2 class="title">
                            Your Destination for Quality Produce <br/> and Pantry Essentials
                        </h2>
                        <p class="disc">
                            Venenatis augue consequat class magnis sed purus, euismod ligula nibh congue quis vestibulum nostra, cubilia varius velit vitae rhoncus. Turpis malesuada fringilla urna dui est torquent aliquet, mi nec fermentum placerat nisi venenatis sapien, mattis nunc nullam rutrum feugiat porta. Pharetra mi nisl consequat semper quam litora aenean eros conubia molestie erat, et cursus integer rutrum sollicitudin auctor curae inceptos senectus sagittis est,
                        </p>
                        <div class="check-main-wrapper">
                            <div class="single-check-area">
                                Elementum sociis rhoncus aptent auctor urna justo
                            </div>
                            <div class="single-check-area">
                                Habitasse venenatis gravida nisl, sollicitudin posuere
                            </div>
                            <div class="single-check-area">
                                Uisque cum convallis nostra in sapien nascetur, netus
                            </div>
                            <div class="single-check-area">
                                Class nunc aliquet nulla dis senectus lputate porta
                            </div>
                            <div class="single-check-area">
                                Aenean gravida a est ante nisl nostra dui hendrerit
                            </div>
                            <div class="single-check-area">
                                Bibendum venenatis dignissim non himenaeos eget
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="section-seperator">
        <div class="container-3">
            <hr class="section-seperator"/>
        </div>
    </div>

    <div class="meet-our-expart-team rts-section-gap2">
        <div class="container-3">
            <div class="row">
                <div class="col-lg-12">
                    <div class="title-center-area-main">
                        <h2 class="title">
                            Meet Our Expert Team
                        </h2>
                        <p class="disc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit...
                        </p>
                    </div>
                </div>
            </div>
            <div class="row g-5 mt--40">
                <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="single-team-style-one">
                        <a  class="thumbnail">
                            <img src="images/team/01.jpg" alt="team_single"/>
                        </a>
                        <div class="bottom-content-area">
                            <div class="top">
                                <h3 class="title">
                                    Samuel Alexander
                                </h3>
                                <span class="designation">Design Director</span>
                            </div>
                            <div class="bottom">
                                <a  class="number">
                                    <i class="fa-solid fa-phone-rotary"></i>
                                    +25896 3158 3228
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="single-team-style-one">
                        <a class="thumbnail">
                            <img src="images/team/02.jpg" alt="team_single"/>
                        </a>
                        <div class="bottom-content-area">
                            <div class="top">
                                <h3 class="title">
                                    Isabella Charlotte
                                </h3>
                                <span class="designation">Design Director</span>
                            </div>
                            <div class="bottom">
                                <a  class="number">
                                    <i class="fa-solid fa-phone-rotary"></i>
                                    +25896 3158 3228
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="single-team-style-one">
                        <a class="thumbnail">
                            <img src="images/team/03.jpg" alt="team_single"/>
                        </a>
                        <div class="bottom-content-area">
                            <div class="top">
                                <h3 class="title">
                                    William Ethan
                                </h3>
                                <span class="designation">Design Director</span>
                            </div>
                            <div class="bottom">
                                <a  class="number">
                                    <i class="fa-solid fa-phone-rotary"></i>
                                    +25896 3158 3228
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                    <div class="single-team-style-one">
                        <a  class="thumbnail">
                            <img src="images/team/04.jpg" alt="team_single"/>
                        </a>
                        <div class="bottom-content-area">
                            <div class="top">
                                <h3 class="title">
                                    Sophia Amelia
                                </h3>
                                <span class="designation">Design Director</span>
                            </div>
                            <div class="bottom">
                                <a  class="number">
                                    <i class="fa-solid fa-phone-rotary"></i>
                                    +25896 3158 3228
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="rts-service-area rts-section-gap2 bg_light-1">
        <div class="container-3">
            <div class="row">
                <div class="col-lg-12">
                    <div class="title-center-area-main">
                        <h2 class="title">
                            Why You Choose Us?
                        </h2>
                        <p class="disc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit...
                        </p>
                    </div>
                </div>
            </div>
            <div class="row mt--30 g-5">
                <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="single-service-area-style-one">
                        <div class="icon-area">
                            <span class="bg-text">01</span>
                            <img src="images/service/01.svg" alt="service"/>
                        </div>
                        <div class="bottom-content">
                            <h3 class="title">
                                Organic Food Services
                            </h3>
                            <p class="disc">
                                When an unknown printer took a galley of type and scrambled it to make follow type specimen area book.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="single-service-area-style-one">
                        <div class="icon-area">
                            <span class="bg-text">02</span>
                            <img src="images/service/02.svg" alt="service"/>
                        </div>
                        <div class="bottom-content">
                            <h3 class="title">
                                Organic Food Services
                            </h3>
                            <p class="disc">
                                When an unknown printer took a galley of type and scrambled it to make follow type specimen area book.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="single-service-area-style-one">
                        <div class="icon-area">
                            <span class="bg-text">03</span>
                            <img src="images/service/03.svg" alt="service"/>
                        </div>
                        <div class="bottom-content">
                            <h3 class="title">
                                Organic Food Services
                            </h3>
                            <p class="disc">
                                When an unknown printer took a galley of type and scrambled it to make follow type specimen area book.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

            <Footer />
        </div>
    )
}
