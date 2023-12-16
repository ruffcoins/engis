"use client";
import useTitle from "@/hooks/useTitle";
import { EnvelopeSimpleOpen, Phone } from "phosphor-react";

const Contact = () => {
  useTitle("Contact Us | ENGIS");
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-10 mx-auto">
            <div className="contact-title text-center">
              <h1>Get In Touch</h1>
              <p>
                Experience seamless land and property transactions with our
                state-of-the-art GIS technology. Our team of experts is ready to
                assist you every step of the way. Reach out to us today for
                efficient and transparent communication. Let&rsquo;s empower
                development together!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="contact-form">
              <div className="contact-form-address">
                <h6>Office Address</h6>
                <p>
                  CGW9+XRF, Independence Layout, <br />
                  Enugu 400102, Enugu
                </p>

                <a
                  href="tel:+2349030000000"
                  className="phone d-flex align-items-center"
                >
                  <Phone size={24} />
                  <span>+234 903 000 0000</span>
                </a>

                <a
                  href="mailto:enquiries@engis.com.ng"
                  className="mail d-flex align-items-center"
                >
                  <EnvelopeSimpleOpen size={20} />
                  <span>enquiries@engis.com.ng</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
