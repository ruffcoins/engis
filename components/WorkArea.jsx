"use client";
import useAnimation from "@/hooks/useAnimation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
const WorkArea = () => {
  const ref = useRef();
  const animation = useAnimation(ref);
  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={animation}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="work-area"
    >
      <div className="container">
        <div className="row g-3">
          <div className="col-xl-6 col-lg-6">
            <div className="work-area--card">
              <h3>Pay your land use charge (property tax)</h3>
              <p>
                Effectively manage your property taxes, providing you with a
                user-friendly platform that simplifies the process of making
                payments, viewing your tax history.
              </p>
              <Link
                href="https://main.d36zlokqx4vi02.amplifyapp.com/"
                className="btn btn-small"
                target="blank"
              >
                Visit PIS Website
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="work-area--service">
              <div
                className="work-area--service--items order-2 order-md-1"
                style={{ padding: "2.5rem 4rem 2.5rem 2.5rem" }}
              >
                <h3 style={{ marginBottom: "1rem" }}>
                  Locate Land Ownership Documents
                </h3>
                <p style={{ marginBottom: "3.125rem" }}>
                  Make enquiries, search land documentation, surveys and land
                  parcels to facilitate the ease of filing and retrieval of land
                  ownership records.
                </p>
                <Link
                  href="#"
                  className="btn btn-small"
                  style={{ marginBottom: "3.125rem" }}
                >
                  Visit LIS Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkArea;
