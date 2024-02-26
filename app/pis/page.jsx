"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import useAnimation from "@/hooks/useAnimation";

// export const metadata = {
//   title: "Property Information System | ENGIS",
// };

const Pis = () => {
  const ref = useRef();
  const animation = useAnimation(ref);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 mt-0">
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hero-shape"
              >
                <Image
                  src="/images/hero/hero.jpeg"
                  alt="hero"
                  height={822}
                  width={613}
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="hero-content">
                  <h1 className="hero-content-title" style={{ color: "white" }}>
                    Discover Your Property
                  </h1>
                  <p
                    className="hero-content-description"
                    style={{ color: "white" }}
                  >
                    Find, Pay Taxes, and Make Changes to Your Property
                    Information
                  </p>
                </div>

                <Link
                  href="https://main.d36zlokqx4vi02.amplifyapp.com/"
                  className="btn btn-alternate"
                >
                  Manage your Property
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature">
        <div className="container">
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="row align-items-center feature-top"
          >
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="feature-content">
                <h3>Find Your Property</h3>
                <p>
                  Easily locate your property utilizing our sophisticated and
                  user-friendly search features, designed to offer you a
                  seamless and efficient property search experience.
                </p>
                <Link
                  href="https://main.d36zlokqx4vi02.amplifyapp.com/"
                  className="btn btn-small"
                >
                  Search Now
                </Link>
              </div>
            </div>

            <div className="col-lg-6 order-lg-2 order-1">
              <div className="row">
                <div className="company-history--thumb">
                  <Image
                    src="/images/property-search.jpg"
                    alt="peter mbah"
                    width={589}
                    height={537}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* --------------------------------------------------------- */}

          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="row align-items-center feature-bottom"
          >
            <div className="col-md-6 order-xl-1 order-md-2">
              <div className="feature-content-thumb">
                <Image
                  height={589}
                  width={537}
                  src="/images/property-tax.jpg"
                  alt="feature5"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-5 me-lg-auto ms-xl-auto order-xl-2 order-md-1">
              <div className="feature-content">
                <h3>Pay Your Land Use Charge (Property Tax)</h3>
                <p>
                  Utilize our online system to effectively manage your property
                  taxes, providing you with a user-friendly platform that
                  simplifies the process of making payments, viewing your tax
                  history, and staying up-to-date with all your property tax
                  information. Our platform is designed to ensure that managing
                  your property taxes is not only simple but also convenient,
                  accessible from anywhere at any time.
                </p>
                <a
                  href="https://main.d36zlokqx4vi02.amplifyapp.com/"
                  className="btn btn-small"
                >
                  Pay Taxes
                </a>
              </div>
            </div>
          </motion.div>

          {/* --------------------------------------------------------- */}

          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="row align-items-center feature-top"
          >
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="feature-content">
                <h3>Make Changes</h3>
                <p>
                  Update your property information or request changes directly
                  through our portal. This seamless and user-friendly online
                  portal is designed to accommodate all your property management
                  needs, allowing property owners to efficiently make necessary
                  updates or request further modifications to their property
                  records with utmost ease and convenience.
                </p>
                <Link
                  href="https://main.d36zlokqx4vi02.amplifyapp.com/"
                  className="btn btn-small"
                >
                  Request Changes
                </Link>
              </div>
            </div>

            <div className="col-lg-6 order-lg-2 order-1">
              <div className="row">
                <div className="company-history--thumb">
                  <Image
                    src="/images/feature/peter-mbah.jpeg"
                    alt="peter mbah"
                    width={589}
                    height={537}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Pis;
