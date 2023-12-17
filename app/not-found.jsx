"use client";
import Image from "next/image";
import { ArrowRight, WarningOctagon } from "phosphor-react";

export const metadata = { title: "404 | ENGIS" };

const NotFound = () => {
  return (
    <section className="error">
      <div className="container">
        <div className="row error-content align-items-center">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <div className="error-content-item text-center">
                <WarningOctagon color="#013328" width={265} height={281} />
                <h4>Something went wrong!</h4>
                <a href="/" className="btn btn-small btn-outline ">
                  <span>Homepage</span>
                  <ArrowRight size={16} weight="bold" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
