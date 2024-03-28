import React from 'react';
import Nav from '../../components/Nav';

export default function About() {
    return (
        <>
            <title>About Crispy Kitchen HTML Template</title>
            <Nav />

            <main>
                <header className="site-header site-about-header">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-10 col-12 mx-auto">
    <h1 className="text-white">Kitchen&apos;s Story</h1>


                                <strong className="text-white">
                                    this is how our kitchen evolved in the new digital era
                                </strong>
                            </div>
                        </div>
                    </div>
                    <div className="overlay" />
                </header>
                <section className="about section-padding bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12 mb-2">
                                <h4 className="mb-3">
                                    Crispy Kitchen is the latest Bootstrap 5 HTML template provided by Tooplate website.
                                </h4>
                                <a href="news.html" className="custom-btn btn btn-dark mt-3">
                                    Check out News
                                </a>
                                <a href="contact.html" className="custom-btn btn btn-danger mt-3 ms-3">
                                    Say Hi
                                </a>
                            </div>
                            <div className="col-lg-6 col-12">
                            <p>
    Since this website template is 100% free to use, you can edit and apply it for your commercial restaurant websites. There are 6 HTML pages included in this template. Please <strong>click &quot;Reservation&quot; button</strong> on the top right to see the pop-up reservation form.
</p>
<p>
    You are NOT allowed to redistribute the template ZIP file on any template download website. Please <a href="https://www.tooplate.com/contact" target="_blank">contact us</a> for more information.
</p>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="about section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="mb-5">Team Members</h2>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="team-thumb">
                                    <img src="images/team/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg" className="img-fluid team-image" alt="" />
                                    <div className="team-info">
                                        <h4 className="mt-3 mb-0">Sophia</h4>
                                        <p>CEO & Founder</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 my-lg-0 my-4">
                                <div className="team-thumb">
                                    <img src="images/team/nicolas-horn-MTZTGvDsHFY-unsplash.jpg" className="img-fluid team-image" alt="" />
                                    <div className="team-info">
                                        <h4 className="mt-3 mb-0">Benjamin W.</h4>
                                        <p>Restaurant Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="team-thumb">
                                    <img src="images/team/rc-cf-FMh5o5m5N9E-unsplash.jpg" className="img-fluid team-image" alt="" />
                                    <div className="team-info">
                                        <h4 className="mt-3 mb-0">Muchen Jack</h4>
                                        <p>Senior Chef</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="newsletter section-padding bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <img src="images/charles-deluvio-FdDkfYFHqe4-unsplash.jpg" className="img-fluid newsletter-image" alt="" />
                            </div>
                            <div className="col-lg-6 col-12 d-flex align-items-center mt-5 mt-lg-0 mx-auto">
                                <div className="subscribe-form-wrap">
                                    <h4 className="mb-0">Our Newsletter</h4>
                                    <p>The food news every day</p>
                                    <form className="custom-form subscribe-form mt-4" role="form">
                                        <input type="email" name="subscribe-email" id="subscribe-email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Your email address" required={true} />
                                        <button type="submit" className="form-control mb-3" id="subscribe">
                                            Subscribe
                                        </button>
                                        <small>
                                            By signing up, you agree to our Privacy Notice and the data policy
                                        </small>
                                    </form>
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
                            <a href="https://goo.gl/maps/wZVGLA7q64uC1s886" className="custom-btn btn btn-dark mt-2">
                                Directions
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-5 col-xs-12 tooplate-mt30">
                            <h6 className="text-white mb-lg-4 mb-3">Opening Hours</h6>
                            <p className="mb-2">Monday - Friday</p>
                            <p>10:00 AM - 08:00 PM</p>
                            <p>
                                Tel: <a href="tel: 010-02-0340" className="tel-link">010-02-0340</a>
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
                                    <a href="https://twitter.com/search?q=tooplate.com&src=typed_query&f=live" target="_blank" className="social-icon-link bi-twitter" />
                                </li>
                                <li>
                                    <a href="#" className="social-icon-link bi-youtube" />
                                </li>
                            </ul>
                            <p className="copyright-text tooplate-mt60">
                                Copyright © 2022 Crispy Kitchen Co., Ltd.
                                <br />
                                Design: <a rel="nofollow" href="https://www.tooplate.com/" target="_blank">Tooplate</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="modal fade" id="BookingModal" tabIndex={-1} aria-labelledby="BookingModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="mb-0">Reserve a table</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body d-flex flex-column justify-content-center">
                            <div className="booking">
                                <form className="booking-form row" role="form" action="#" method="post">
                                    <div className="col-lg-6 col-12">
                                        <label htmlFor="name" className="form-label">Full Name</label>
                                        <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" required={true} />
                                    </div>
                                    {/* Other form fields */}
                                    <div className="col-12">
                                        <button type="submit" className="form-control">Submit Request</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer" />
                    </div>
                </div>
            </div>
        </>
    );
}
