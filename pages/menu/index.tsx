import React from "react";
import dynamic from 'next/dynamic';
import Nav from "../../components/Nav";
import Image from 'next/image';

const Link = dynamic(() => import('next/link'));

export default function Menu() {
    return (
        <>
        <title>Crispy Kitchen Menu</title>
        <Nav />
        <main>
            <header className="site-header site-menu-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-12 mx-auto">
                            <h1 className="text-white">Our Menus</h1>
                            <strong className="text-white">Perfect for all Breakfast, Lunch and Dinner</strong>
                        </div>
                    </div>
                </div>
                <div className="overlay" />
            </header>

            <section className="menu section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-lg-5 mb-4">Breakfast Menu</h2>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="menu-thumb">
                                <Image src="/images/breakfast/brett-jordan-8xt8-HIFqc8-unsplash.jpg" alt="" width={600} height={400} />
                                <div className="menu-info d-flex flex-wrap align-items-center">
                                    <h4 className="mb-0">Fresh Start</h4>
                                    <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>24.50</span>
                                    <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                        <h6 className="reviews-text mb-0 me-3">4.4/5</h6>
                                        <div className="reviews-stars">
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                        </div>
                                        <p className="reviews-text mb-0 ms-4">128 Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="menu-thumb">
                                <Image src="/images/breakfast/lucas-swennen-1W_MyJSRLuQ-unsplash.jpg" alt="" width={600} height={400} />
                                <div className="menu-info d-flex flex-wrap align-items-center">
                                    <h4 className="mb-0">Baked Creamy</h4>
                                    <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>16.50</span>
                                    <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                        <h6 className="reviews-text mb-0 me-3">3/5</h6>
                                        <div className="reviews-stars">
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                        </div>
                                        <p className="reviews-text mb-0 ms-4">64 Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="menu-thumb">
                                <Image src="/images/breakfast/louis-hansel-dphM2U1xq0U-unsplash.jpg" alt="" width={600} height={400} />
                                <div className="menu-info d-flex flex-wrap align-items-center">
                                    <h4 className="mb-0">Burger Set</h4>
                                    <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>24.50</span>
                                    <del className="ms-4"><small>$</small>36.50</del>
                                    <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                        <h6 className="reviews-text mb-0 me-3">3/5</h6>
                                        <div className="reviews-stars">
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                        </div>
                                        <p className="reviews-text mb-0 ms-4">32 Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="menu section-padding bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-lg-5 mb-4">Lunch Menu</h2>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="menu-thumb">
                                <Image src="/images/lunch/louis-hansel-cH5IPjaAYyo-unsplash.jpg" alt="" width={600} height={400} />
                                <div className="menu-info d-flex flex-wrap align-items-center">
                                    <h4 className="mb-0">Super Steak Set</h4>
                                    <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>32.75</span>
                                    <del className="ms-4"><small>$</small>55</del>
                                    <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                        <h6 className="reviews-text mb-0 me-3">4.2/5</h6>
                                        <div className="reviews-stars">
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon
                                  "></i>
                                  <i className="bi-star reviews-icon"></i>
                                  </div>
                                  <p className="reviews-text mb-0 ms-4">66 Reviews</p>
                                  </div>
                                  </div>
                                  </div>
                                  </div>                    <div className="col-lg-6 col-12">
                        <div className="menu-thumb">
                            <Image src="/images/lunch/louis-hansel-rheOvfxOlOA-unsplash.jpg" alt="" width={600} height={400} />
                            <div className="menu-info d-flex flex-wrap align-items-center">
                                <h4 className="mb-0">Bread &amp; Steak Set</h4>
                                <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>42.50</span>
                                <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                    <h6 className="reviews-text mb-0 me-3">3/5</h6>
                                    <div className="reviews-stars">
                                        <i className="bi-star-fill reviews-icon"></i>
                                        <i className="bi-star-fill reviews-icon"></i>
                                        <i className="bi-star-fill reviews-icon"></i>
                                        <i className="bi-star reviews-icon"></i>
                                        <i className="bi-star reviews-icon"></i>
                                    </div>
                                    <p className="reviews-text mb-0 ms-4">84 Reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section className="menu section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="mb-lg-5 mb-4">Dinner Menu</h2>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="menu-thumb">
                            <Image src="/images/dinner/farhad-ibrahimzade-ZipYER3NLhY-unsplash.jpg" alt="" width={600} height={400} />
                            <div className="menu-info d-flex flex-wrap align-items-center">
                                <h4 className="mb-0">Seafood Set</h4>
                                <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>65.50</span>
                                <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                    <h6 className="reviews-text mb-0 me-3">4.4/5</h6>
                                    <div className="reviews-stars">
                                        <i className="bi-star-fill reviews-icon"></i>
                                        <i className="bi-star-fill reviews-icon"></i>
                                        <i className="bi-star-fill reviews-icon"></i>
                                        <i className="bi-star-fill reviews-icon"></i>
                                        <i className="bi-star reviews-icon"></i>
                                    </div>
                                    <p className="reviews-text mb-0 ms-4">102 Reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="menu-thumb">
                            <Image src="/images/dinner/keriliwi-c3mFafsFz2w-unsplash.jpg" alt="" width={600} height={400} />
                            <div className="menu-info d-flex flex-wrap align-items-center">
                                <h4 className="mb-0">Premium Steak</h4>
                                <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>74.25</span>
                                <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                    <h6 className="reviews-text mb-0 me-3">3/5</h6>
                                    <div className="reviews-stars">
                                        <i className="bi-star-fill reviews-icon"></i>
                                        <i className="bi-star-fill reviews-icon"></i>
                                        <i className="bi-star-fill reviews-icon"></i>
                                        <i className="bi-star reviews-icon"></i>
                                        <i className="bi-star reviews-icon"></i>
                                    </div>
                                    <p className="reviews-text mb-0 ms-4">56 Reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="menu-thumb">
                            <Image src="/images/dinner/farhad-ibrahimzade-isHUj3N0194-unsplash.jpg" alt="" width={600} height={400} />
                            <div className="menu-info d-flex flex-wrap align-items-center">
                                <h4 className="mb-0">Salmon Set</h4>
                                <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>60</span>
                                <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                    <h6 className="reviews-text mb-0 me-3">3/5</h6>
                                    <div className="reviews-stars">
                                        <i className="bi-star-fill reviews-icon"></i>
                                        <i className="bi-star-fill reviews-icon"></i>
                                        <i className="bi-star-fill reviews-icon"></i>
                                        <i className="bi-star reviews-icon"></i>
                                        <i className="bi-star reviews-icon"></i>
                                    </div>
                                    <p className="reviews-text mb-0 ms-4">76 Reviews</p>
                                </div>
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
              <a href="#" className="social-icon-link bi-twitter" />
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
                  <option value={5} selected={true}>
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