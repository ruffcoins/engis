"use client";
import React from "react";
import { motion } from "framer-motion";

const ResourcesHero = () => {
  return (
    <section className="about">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container"
      >
        <div className="row">
          <div className="col-12 col-md-8 col-lg-8 mx-auto">
            <div className="about-content text-center">
              <h1>Land Resources Hub</h1>
              <p>
                Explore the following resources to gain valuable insights into
                various aspects of land management and related topics. Whether
                you are a developer, homeowner, or researcher, these resources
                aim to provide valuable information.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-8 col-lg-8 mx-auto">
            <div className="about-content text-center">
              <h4 className="text-decoration-underline">Coming Soon</h4>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ResourcesHero;
