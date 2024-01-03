"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
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
                  Pioneering Progress through Spatial Intelligence
                </h1>
                <p
                  className="hero-content-description"
                  style={{ color: "white" }}
                >
                  Transforming Enugu&rsquo;s Landscape through Geographic
                  Information Services
                </p>
              </div>

              <Link href="/about" className="btn btn-alternate">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
