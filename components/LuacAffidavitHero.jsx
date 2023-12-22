"use client";
import React from "react";
import { motion } from "framer-motion";

const LuacAffidavitHero = () => {
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
              <h1>LUAC Affidavit of Honour and Undertaking</h1>
              <p>
                Ensure accurate details to facilitate the processing of your
                application.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LuacAffidavitHero;
