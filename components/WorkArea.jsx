"use client";
import {
  EnjoyIcon,
  GetIcon,
  SearchLocation,
  VisitIcon,
} from "@/data/svgImages";
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
          <div className="col-xl-6 col-lg-5">
            <div className="work-area--card">
              <h3>Simple &amp; easy way to find and register your lands</h3>
              <p>
                Streamlining land and property transactions for a hassle-free
                experience
              </p>
              <Link href="/services/cofo-application" className="btn btn-small">
                Get Started
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="d-grid work-area--service">
              <div className="work-area--service--items order-2 order-md-1">
                <SearchLocation />
                <h4>Find the right application forms</h4>
              </div>
              <div className="work-area--service--items order-1 order-md-2">
                <VisitIcon />
                <h4>Explore GIS data</h4>
              </div>
              <div className="work-area--service--items order-4 order-md-3">
                <GetIcon />
                <h4>Get 24/7 support</h4>
              </div>
              <div className="work-area--service--items order-3 order-md-4">
                <EnjoyIcon />
                <h4>Attain land legitimacy</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkArea;
