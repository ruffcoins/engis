"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useAnimation from "@/hooks/useAnimation";

const Pis = () => {
  const [currentDiv, setCurrentDiv] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDiv((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 mt-0">
              {currentDiv === 0 && (
                <motion.div
                  key={1}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: 50 },
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.8 }}
                  className="hero-shape"
                >
                  <Image
                    src="/images/hero/pis-hero.jpg"
                    alt="hero"
                    height={822}
                    width={613}
                  />
                </motion.div>
              )}

              {currentDiv === 1 && (
                <motion.div
                  key={2}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: 50 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.8 }}
                  className="hero-shape"
                >
                  <Image
                    src="/images/hero/pis-pay.jpg"
                    alt="hero"
                    height={822}
                    width={613}
                  />
                </motion.div>
              )}

              {currentDiv === 2 && (
                <motion.div
                  key={3}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: 50 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.8 }}
                  className="hero-shape"
                >
                  <Image
                    src="/images/hero/pis-update.jpg"
                    alt="hero"
                    height={822}
                    width={613}
                  />
                </motion.div>
              )}

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
                  {currentDiv === 0 && (
                    <>
                      <motion.h1
                        className="hero-content-title"
                        style={{ color: "white" }}
                        variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { opacity: 1, x: 0 },
                          exit: { opacity: 0, x: -50 },
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 1 }}
                      >
                        Search For Your Property{" "}
                      </motion.h1>

                      <motion.p
                        className="hero-content-description"
                        style={{ color: "white" }}
                        variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { opacity: 1, x: 0 },
                          exit: { opacity: 0, x: -50 },
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 1 }}
                      >
                        Easily locate your property utilizing our sophisticated
                        and user-friendly search features, designed to offer you
                        a seamless and efficient property search experience.
                      </motion.p>
                    </>
                  )}

                  {currentDiv === 1 && (
                    <>
                      <motion.h1
                        className="hero-content-title"
                        style={{ color: "white" }}
                        variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { opacity: 1, x: 0 },
                          exit: { opacity: 0, x: -50 },
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 1 }}
                      >
                        Pay Your Land Use Charge (Property Tax)
                      </motion.h1>

                      <motion.p
                        className="hero-content-description"
                        style={{ color: "white" }}
                        variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { opacity: 1, x: 0 },
                          exit: { opacity: 0, x: -50 },
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 1 }}
                      >
                        Effectively manage your property taxes, providing you
                        with a user-friendly platform that simplifies the
                        process of making payments, viewing your tax history,
                        and staying up-to-date with all your property tax
                        information.
                      </motion.p>
                    </>
                  )}

                  {currentDiv === 2 && (
                    <>
                      <motion.h1
                        className="hero-content-title"
                        style={{ color: "white" }}
                        variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { opacity: 1, x: 0 },
                          exit: { opacity: 0, x: -50 },
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 1 }}
                      >
                        Update Your Property
                      </motion.h1>

                      <motion.p
                        className="hero-content-description"
                        style={{ color: "white" }}
                        variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { opacity: 1, x: 0 },
                          exit: { opacity: 0, x: -50 },
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 1 }}
                      >
                        Update your property information or request changes
                        directly through our portal. This seamless and
                        user-friendly online portal is designed to accommodate
                        all your property management needs, allowing property
                        owners to efficiently make necessary updates or request
                        further modifications to their property records with
                        utmost ease and convenience.
                      </motion.p>
                    </>
                  )}
                </div>

                <Link
                  href="https://main.d36zlokqx4vi02.amplifyapp.com/"
                  className="btn btn-alternate"
                  target="blank"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pis;
