"use client";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Logo from "../public/images/logo.svg";

const Footer = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <section className="footer d-none d-xl-block">
        <div className="container-fluid footer-container">
          <div className="row">
            <div className="offset-xl-1 col-xl-3">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link className="navbar-brand" href="/">
                    <Image src={Logo} alt="engis logo" width={250} />
                  </Link>
                </div>
                <div className="footer-address">
                  <p>
                    CGW9+XRF, Independence Layout, <br />
                    Enugu 400102, Enugu
                  </p>
                  <p className="contact-number mb-0">
                    <a href="tel:+2349030000000">+234 903 000 0000</a>
                  </p>
                  <p className="contact-email mb-0">
                    <a href="mailto:enquiries@engis.com.ng">
                      enquiries@engis.com.ng
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="footer-widget">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/" className="footer-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="footer-link">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="footer-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="footer-widget">
                <h5>Services</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      href="/services/luac-affidavit"
                      className="footer-link"
                    >
                      LUAC Affidavit
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/cofo-application"
                      className="footer-link"
                    >
                      C of O Application
                    </Link>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="footer-widget">
                <h5>Resources</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link href="#" className="footer-link">
                      Coming Soon...
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="offset-1 col-11">
              <p className="footer-copyright">
                ENGIS © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*For Tablet */}
      <section className="footer d-none d-sm-block d-xl-none">
        <div className="container-fluid footer-container">
          <div className="row">
            <div className="col-sm-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link className="navbar-brand" href="/">
                    <Image src={Logo} alt="engis logo" width={250} />
                  </Link>
                </div>
                <div className="footer-address">
                  <p>
                    CGW9+XRF, Independence Layout, <br />
                    Enugu 400102, Enugu
                  </p>
                  <p className="contact-number mb-0">
                    <a href="tel:+2349030000000">+234 903 000 0000</a>
                  </p>
                  <p className="contact-email mb-0">
                    <a href="mailto:enquiries@engis.com.ng">
                      enquiries@engis.com.ng
                    </a>
                  </p>
                </div>
                <div className="footer-social">
                  <p className="footer-copyright">
                    ENGIS © {new Date().getFullYear()}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row row-cols-2 gutter-5">
                <div className="col">
                  <div className="footer-widget">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link href="/" className="footer-link">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="footer-link">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="footer-link">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget">
                    <h5>Services</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link
                          href="/services/luac-affidavit"
                          className="footer-link"
                        >
                          LUAC Affidavit
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/cofo-application"
                          className="footer-link"
                        >
                          C of O Application
                        </Link>
                      </li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget">
                    <h5>Resources</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link href="#" className="footer-link">
                          Coming Soon...
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*For Mobile */}
      <section className="footer d-block d-sm-none ">
        <div className="container-fluid footer-container">
          <div className="row gutter-5">
            <div className="col-12">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link className="navbar-brand" href="/">
                    <Image src={Logo} alt="engis logo" width={250} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row row-cols-2 gutter-5">
                <div className="col">
                  <div className="footer-widget">
                    <h5>Quick Links </h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link href="/" className="footer-link">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="footer-link">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="footer-link">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget">
                    <h5>Services</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link
                          href="/services/luac-affidavit"
                          className="footer-link"
                        >
                          LUAC Affidavit
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/cofo-application"
                          className="footer-link"
                        >
                          C of O Application
                        </Link>
                      </li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget">
                    <h5>Resources</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link href="#" className="footer-link">
                          Coming Soon...
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="footer-widget">
                <div className="footer-address">
                  <p>
                    CGW9+XRF, Independence Layout, <br />
                    Enugu 400102, Enugu
                  </p>
                  <p className="contact-number mb-0">
                    <a href="tel:+2349030000000">+234 903 000 0000</a>
                  </p>
                  <p className="contact-email mb-0">
                    <a href="mailto:enquiries@engis.com.ng">
                      enquiries@engis.com.ng
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="footer-copyright">ENGIS © {new Date().getFullYear()}</p>
      </section>
    </>
  );
};

export default Footer;
