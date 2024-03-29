"use client";
import useAnimation from "@/hooks/useAnimation";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const FeatureBottom = () => {
  const ref = useRef();
  const animation = useAnimation(ref);
  return (
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
            src="/images/feature/1.jpg"
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
          <h3>Find necessary land related resources</h3>
          <p>
            Simplify resource discovery and access vital information seamlessly.
            Our user-friendly interface ensures an efficient and hassle-free
            experience, empowering you to find all necessary land-related
            resources with ease and precision.
          </p>
          <a href="/resources" className="btn btn-small">
            Explore Resources
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureBottom;
