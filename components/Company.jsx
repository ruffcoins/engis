"use client";
import Image from "next/image";
import useAnimation from "@/hooks/useAnimation";
import { useRef } from "react";
import { motion } from "framer-motion";

const Company = () => {
  const ref1 = useRef();
  const animation1 = useAnimation(ref1);
  const ref2 = useRef();
  const animation2 = useAnimation(ref2);
  return (
    <section className="company">
      <div className="container">
        <motion.div
          ref={ref1}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="row"
        >
          <div className="col-md-6 order-2 order-md-1">
            <div className="company-history">
              <div className="company-history--header">
                <h3>About ENGIS</h3>
              </div>
              <ol className="company-history--list">
                <li>
                  <div className="company-history--details">
                    {/* <h6>It all started in 1995</h6> */}
                    <p>
                      Establish and regulate the standards to be applied in the
                      compilation of data relating to land and its
                      administration in the Enugu state.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="company-history--details">
                    {/* <h6>It all started in 1995</h6> */}
                    <p>
                      Undertake registration of all land titles and instruments
                      in the State including but not limited to issuance of
                      certificates and recertification of land instruments in
                      cases where certification had been carried out before the
                      coming into force of this law
                    </p>
                  </div>
                </li>
                <li>
                  <div className="company-history--details">
                    {/* <h6> Donate launches in 2007</h6> */}
                    <p>
                      Processing and grant of Certificates of Occupancy, Rights
                      of Occupancy and grants of Consent to land transactions as
                      required by Law.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="company-history--details">
                    {/* <h6>
                      RealStatic holds its initial public offering in 2008
                    </h6> */}
                    <p>
                      These various titles including C of O&rsquo;s are endorsed
                      and ratified by the Enugu State Government and provide the
                      protection of the state to land and property owners.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div className="col-lg-5 col-md-6  order-1 order-md-2">
            <div className="company-history--thumb">
              <Image
                src="/images/about/company-history1.jpg"
                alt="company-details1"
                width={589}
                height={537}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation2}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="row align-items-center"
        >
          <div className="col-md-6 order-lg-1 order-md-2">
            <div className="company-vision--thumb">
              <Image
                src="/images/about/company-history2.jpg"
                alt="company-details2"
                width={589}
                height={537}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-5 ms-lg-auto  order-lg-2 order-md-1">
            <div className="company-vision--content">
              <h3>Our vision is simple.</h3>
              <p>
                Enugu State GIS is committed to embracing emerging technologies
                and advancing the field of spatial analysis in administering
                land and property usage. By leveraging these innovations, we can
                unlock new insights, improve data accuracy, and provide
                real-time monitoring of our environment.
                <br />
                <br />
                Through interactive maps, visualizations, and analysis tools,
                users can gain valuable insights into the dynamics of Enugu
                State.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Company;
