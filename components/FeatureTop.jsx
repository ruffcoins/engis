"use client";
import Image from "next/image";
import Link from "next/link";
import useAnimation from "@/hooks/useAnimation";
import { useRef } from "react";
import { motion } from "framer-motion";

const FeatureTop = () => {
  const ref = useRef();
  const animation = useAnimation(ref);
  return (
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
          <h3>Simple &amp; easy way to register for your land C of O</h3>
          <p>
            Simplify the C of O registration process with our user-friendly
            system. Easy steps, seamless experience. Register effortlessly for
            your Certificate of Occupancy and navigate the paperwork
            hassle-free. Your convenience is our priority.
          </p>
          <Link href="/services/cofo-application" className="btn btn-small">
            Register
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
  );
};

export default FeatureTop;
