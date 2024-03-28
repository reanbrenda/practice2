import Link from 'next/link'
import React from "react";
import Nav from "../components/Nav";
import Image from 'next/image';


export default function Home() {
  return (
  <>

<Nav />
  
  <main>
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12 m-auto">
            <div className="heroText">
              <h1 className="text-white mb-lg-5 mb-3">Delicious Steaks</h1>
              <div className="c-reviews my-3 d-flex flex-wrap align-items-center">
                <div className="d-flex flex-wrap align-items-center">
                  <h4 className="text-white mb-0 me-3">4.4/5</h4>
                  <div className="reviews-stars">
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star reviews-icon" />
                  </div>
                </div>
                <p className="text-white w-100">
                  From <strong>1,206+</strong> Customer Reviews
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12">
            <div
              id="carouselExampleCaptions"
              className="carousel carousel-fade hero-carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-image-wrap">
                    <Image
                      src="/images/slide/jay-wennington-N_Y88TWmGwA-unsplash.jpg"
                      className="img-fluid carousel-image"
                      alt=""
                      loading="lazy"
                      width={600} height={400} 
                    />
                  </div>
                  <div className="carousel-caption">
                    <span className="text-white">
                      <i className="bi-geo-alt me-2" />
                      Manhattan, New York
                    </span>
                    <h4 className="hero-text">Fine Dining Restaurant</h4>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-image-wrap">
                    <img
                      src="images/slide/jason-leung-O67LZfeyYBk-unsplash.jpg"
                      className="img-fluid carousel-image"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="carousel-caption">
                    <div className="d-flex align-items-center">
                      <h4 className="hero-text">Steak</h4>
                      <span className="price-tag ms-4">
                        <small>$</small>26.50
                      </span>
                    </div>
                    <div className="d-flex flex-wrap align-items-center">
                      <h5 className="reviews-text mb-0 me-3">3.8/5</h5>
                      <div className="reviews-stars">
                        <i className="bi-star-fill reviews-icon" />
                        <i className="bi-star-fill reviews-icon" />
                        <i className="bi-star-fill reviews-icon" />
                        <i className="bi-star reviews-icon" />
                        <i className="bi-star reviews-icon" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-image-wrap">
                    <img
                      src="images/slide/ivan-torres-MQUqbmszGGM-unsplash.jpg"
                      className="img-fluid carousel-image"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="carousel-caption">
                    <div className="d-flex align-items-center">
                      <h4 className="hero-text">Sausage Pasta</h4>
                      <span className="price-tag ms-4">
                        <small>$</small>18.25
                      </span>
                    </div>
                    <div className="d-flex flex-wrap align-items-center">
                      <h5 className="reviews-text mb-0 me-3">4.2/5</h5>
                      <div className="reviews-stars">
                        <i className="bi-star-fill reviews-icon" />
                        <i className="bi-star-fill reviews-icon" />
                        <i className="bi-star-fill reviews-icon" />
                        <i className="bi-star-fill reviews-icon" />
                        <i className="bi-star reviews-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="video-wrap">
            <video
              autoPlay={true}
              loop={false}
              muted={false}
              className="custom-video"
              poster=""
            >
              <source src="/video/production_ID_3769033.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
      
      <div className="overlay" />
    </section>
    <section className="menu section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-lg-5 mb-4">Special Menus</h2>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="menu-thumb">
              <div className="menu-image-wrap">
                <img
                  src="images/breakfast/brett-jordan-8xt8-HIFqc8-unsplash.jpg"
                  className="img-fluid menu-image"
                  alt=""
                  loading="lazy"
                />
                <span className="menu-tag bg-warning">Breakfast</span>
              </div>
              <div className="menu-info d-flex flex-wrap align-items-center">
                <h4 className="mb-0">Morning Fresh</h4>
                <span className="price-tag bg-white shadow-lg ms-4">
                  <small>$</small>12.50
                </span>
                <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                  <h6 className="reviews-text mb-0 me-3">4.3/5</h6>
                  <div className="reviews-stars">
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star reviews-icon" />
                  </div>
                  <p className="reviews-text mb-0 ms-4">102 Reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="menu-thumb">
              <div className="menu-image-wrap">
                <img
                  src="images/lunch/farhad-ibrahimzade-MGKqxm6u2bc-unsplash.jpg"
                  className="img-fluid menu-image"
                  alt=""
                  loading="lazy"
                />
                <span className="menu-tag bg-warning">Lunch</span>
              </div>
              <div className="menu-info d-flex flex-wrap align-items-center">
                <h4 className="mb-0">Tooplate Soup</h4>
                <span className="price-tag bg-white shadow-lg ms-4">
                  <small>$</small>24.50
                </span>
                <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                  <h6 className="reviews-text mb-0 me-3">3/5</h6>
                  <div className="reviews-stars">
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star reviews-icon" />
                    <i className="bi-star reviews-icon" />
                  </div>
                  <p className="reviews-text mb-0 ms-4">50 Reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="menu-thumb">
              <div className="menu-image-wrap">
                <img
                  src="images/dinner/keriliwi-c3mFafsFz2w-unsplash.jpg"
                  className="img-fluid menu-image"
                  alt=""
                  loading="lazy"
                />
                <span className="menu-tag bg-warning">Dinner</span>
              </div>
              <div className="menu-info d-flex flex-wrap align-items-center">
                <h4 className="mb-0">Premium Steak</h4>
                <span className="price-tag bg-white shadow-lg ms-4">
                  <small>$</small>45
                </span>
                <del className="ms-4">
                  <small>$</small>150
                </del>
                <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                  <h6 className="reviews-text mb-0 me-3">3/5</h6>
                  <div className="reviews-stars">
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star reviews-icon" />
                    <i className="bi-star reviews-icon" />
                  </div>
                  <p className="reviews-text mb-0 ms-4">86 Reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="menu-thumb">
              <div className="menu-image-wrap">
                <img
                  src="images/dinner/farhad-ibrahimzade-ZipYER3NLhY-unsplash.jpg"
                  className="img-fluid menu-image"
                  alt=""
                  loading="lazy"
                />
                <span className="menu-tag bg-warning">Dinner</span>
              </div>
              <div className="menu-info d-flex flex-wrap align-items-center">
                <h4 className="mb-0">Seafood Set</h4>
                <span className="price-tag bg-white shadow-lg ms-4">
                  <small>$</small>86
                </span>
                <del className="ms-4">
                  <small>$</small>124
                </del>
                <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                  <h6 className="reviews-text mb-0 me-3">3/5</h6>
                  <div className="reviews-stars">
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star reviews-icon" />
                    <i className="bi-star reviews-icon" />
                  </div>
                  <p className="reviews-text mb-0 ms-4">44 Reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="menu-thumb">
              <div className="menu-image-wrap">
                <img
                  src="images/breakfast/louis-hansel-dphM2U1xq0U-unsplash.jpg"
                  className="img-fluid menu-image"
                  alt=""
                  loading="lazy"
                />
                <span className="menu-tag bg-warning">Breakfast</span>
              </div>
              <div className="menu-info d-flex flex-wrap align-items-center">
                <h4 className="mb-0">Burger Set</h4>
                <span className="price-tag bg-white shadow-lg ms-4">
                  <small>$</small>20.50
                </span>
                <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                  <h6 className="reviews-text mb-0 me-3">4.3/5</h6>
                  <div className="reviews-stars">
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star reviews-icon" />
                  </div>
                  <p className="reviews-text mb-0 ms-4">102 Reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="menu-thumb">
              <div className="menu-image-wrap">
                <img
                  src="images/lunch/farhad-ibrahimzade-D5c9ZciQy_I-unsplash.jpg"
                  className="img-fluid menu-image"
                  alt=""
                  loading="lazy"
                />
                <span className="menu-tag bg-warning">Lunch</span>
              </div>
              <div className="menu-info d-flex flex-wrap align-items-center">
                <h4 className="mb-0">Healthy Soup</h4>
                <span className="price-tag bg-white shadow-lg ms-4">
                  <small>$</small>34.20
                </span>
                <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                  <h6 className="reviews-text mb-0 me-3">3/5</h6>
                  <div className="reviews-stars">
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star-fill reviews-icon" />
                    <i className="bi-star reviews-icon" />
                    <i className="bi-star reviews-icon" />
                  </div>
                  <p className="reviews-text mb-0 ms-4">64 Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="BgImage" />
    <section className="news section-padding">
      <div className="container">
        <div className="row">
          <h2 className="text-center mb-lg-5 mb-4">News &amp; Events</h2>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="news-thumb mb-4">
              <a href="news-detail.html">
                <img
                  src="images/news/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg"
                  className="img-fluid news-image"
                  alt=""
                  loading="lazy"
                />
              </a>
              <div className="news-text-info news-text-info-large">
                <span className="category-tag bg-danger">Featured</span>
                <h5 className="news-title mt-2">
                  <a href="news-detail.html" className="news-title-link">
                    Healthy Lifestyle and happy living tips
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="news-thumb mb-4">
              <a href="news-detail.html">
                <img
                  src="images/news/stefan-johnson-xIFbDeGcy44-unsplash.jpg"
                  className="img-fluid news-image"
                  alt=""
                  loading="lazy"
                />
              </a>
              <div className="news-text-info news-text-info-large">
                <span className="category-tag bg-danger">Featured</span>
                <h5 className="news-title mt-2">
                  <a href="news-detail.html" className="news-title-link">
                    How to make a healthy meal
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="news-thumb mb-lg-0 mb-lg-4 mb-0">
              <a href="news-detail.html">
                <img
                  src="images/news/gilles-lambert-S_LhjpfIdm4-unsplash.jpg"
                  className="img-fluid news-image"
                  alt=""
                  loading="lazy"
                />
              </a>
              <div className="news-text-info">
                <span className="category-tag me-3 bg-info">Promotions</span>
                <strong>8 April 2022</strong>
                <h5 className="news-title mt-2">
                  <a href="news-detail.html" className="news-title-link">
                    Is Coconut good for you?
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="news-thumb mb-lg-0 mb-lg-4 mb-2">
              <a href="news-detail.html">
                <img
                  src="images/news/caroline-attwood-bpPTlXWTOvg-unsplash.jpg"
                  className="img-fluid news-image"
                  alt=""
                  loading="lazy"
                />
              </a>
              <div className="news-text-info">
                <span className="category-tag">News</span>
                <h5 className="news-title mt-2">
                  <a href="news-detail.html" className="news-title-link">
                    Salmon Steak Noodle
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="news-thumb mb-4">
            <a href="news-detail.html">
                <img
                  src="images/news/louis-hansel-GiIiRV0FjwU-unsplash.jpg"
                  className="img-fluid news-image"
                  alt=""
                  loading="lazy"
                />
              </a>
              <div className="news-text-info">
                <span className="category-tag me-3 bg-info">Meeting</span>
                <strong>30 April 2022</strong>
                <h5 className="news-title mt-2">
                  <a href="news-detail.html" className="news-title-link">
                    Making a healthy salad
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer className="site-footer section-padding">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h4 className="text-white mb-4 me-5">Crispy Kitchen</h4>
        </div>
        <div className="col-lg-4 col-md-7 col-xs-12 tooplate-mt30">
          <h6 className="text-white mb-lg-4 mb-3">Location</h6>
          <p>121 Einstein Loop N, Bronx, NY 10475, United States</p>
          <a
            href="https://goo.gl/maps/wZVGLA7q64uC1s886"
            className="custom-btn btn btn-dark mt-2"
          >
            Directions
          </a>
        </div>
        <div className="col-lg-4 col-md-5 col-xs-12 tooplate-mt30">
          <h6 className="text-white mb-lg-4 mb-3">Opening Hours</h6>
          <p className="mb-2">Monday - Friday</p>
          <p>10:00 AM - 08:00 PM</p>
          <p>
            Tel:{" "}
            <a href="tel: 010-02-0340" className="tel-link">
              010-02-0340
            </a>
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-xs-12 tooplate-mt30">
          <h6 className="text-white mb-lg-4 mb-3">Social</h6>
          <ul className="social-icon">
            <li>
              <a href="#" className="social-icon-link bi-facebook" />
            </li>
            <li>
              <a href="#" className="social-icon-link bi-instagram" />
            </li>
            <li>
              <a
                href="https://twitter.com/search?q=tooplate.com&src=typed_query&f=live"
                target="_blank"
                className="social-icon-link bi-twitter"
              />
            </li>
            <li>
              <a href="#" className="social-icon-link bi-youtube" />
            </li>
          </ul>
          <p className="copyright-text tooplate-mt60">
            Copyright © 2022 Crispy Kitchen Co., Ltd.
            <br />
            Design:{" "}
            <a rel="nofollow" href="https://www.tooplate.com/" target="_blank">
              Tooplate
            </a>
          </p>
        </div>
      </div>
      {/* row ending */}
    </div>
    {/* container ending */}
    </footer>
  {/* Modal */}
  <div
    className="modal fade"
    id="BookingModal"
    tabIndex={-1}
    aria-labelledby="BookingModal"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="mb-0">Reserve a table</h3>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body d-flex flex-column justify-content-center">
          <div className="booking">
            <form
              className="booking-form row"
              role="form"
              action="#"
              method="post"
            >
              <div className="col-lg-6 col-12">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Your Name"
                  required={true}
                />
              </div>
              <div className="col-lg-6 col-12">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  pattern="[^ @]*@[^ @]*"
                  className="form-control"
                  placeholder="your@email.com"
                  required={true}
                />
              </div>
              <div className="col-lg-6 col-12">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="telephone"
                  name="phone"
                  id="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  className="form-control"
                  placeholder="123-456-7890"
                />
              </div>
              <div className="col-lg-6 col-12">
                <label htmlFor="people" className="form-label">
                  Number of persons
                </label>
                <input
                  type="text"
                  name="people"
                  id="people"
                  className="form-control"
                  placeholder="12 persons"
                />
              </div>
              <div className="col-lg-6 col-12">
                <label htmlFor="date" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  defaultValue=""
                  className="form-control"
                />
              </div>
              <div className="col-lg-6 col-12">
                <label htmlFor="time" className="form-label">
                  Time
                </label>
                <select
                  className="form-select form-control"
                  name="time"
                  id="time"
                >
                  <option value={5} >
                    5:00 PM
                  </option>
                  <option value={6}>6:00 PM</option>
                  <option value={7}>7:00 PM</option>
                  <option value={8}>8:00 PM</option>
                  <option value={9}>9:00 PM</option>
                </select>
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">
                  Special Request
                </label>
                <textarea
                  className="form-control"
                  rows={4}
                  id="message"
                  name="message"
                  placeholder=""
                  defaultValue={""}
                />
              </div>
              <div className="col-lg-4 col-12 ms-auto">
                <button type="submit" className="form-control">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer" />
      </div>
    </div>
  </div>
  {/* JAVASCRIPT FILES */}

 </>
 )
}
