"use client";
import React from "react";
import { motion } from "framer-motion";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const LuacAffidavitForm = () => {
  return (
    <section
      className="about"
      style={{
        paddingTop:
          typeof window !== "undefined" && window.innerWidth <= 768
            ? "1rem"
            : "4rem",
      }}
    >
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
          <Formik
            initialValues={{
              fullName: "",
              organization: "",
              address: "",
              planNo: "",
              beaconNo: "",
              totalArea: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
            validationSchema={Yup.object({
              fullName: Yup.string().required("Required"),
              organization: Yup.string().required("Required"),
              address: Yup.string().required("Required"),
              planNo: Yup.string().required("Required"),
              beaconNo: Yup.string().required("Required"),
              totalArea: Yup.string().required("Required"),
            })}
          >
            {({ errors, isSubmitting }) => {
              return (
                <Form>
                  <div className="col">
                    <div className="row mb-2">
                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* Full Name */}
                        <label
                          htmlFor="fullName"
                          className="font-weight-bold"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Full Name{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="fullName"
                          name="fullName"
                          placeholder="Enter Full Name"
                          className="p-1"
                        />
                        <ErrorMessage
                          name="fullName"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* Organization */}
                        <label
                          htmlFor="organization"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Organization{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="organization"
                          name="organization"
                          placeholder="Enter Organization"
                          className="p-1"
                        />
                        <ErrorMessage
                          name="organization"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                          className=""
                        />
                      </div>
                    </div>

                    <div className="row mb-lg-2 mb-0">
                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* Address */}
                        <label
                          htmlFor="address"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Address{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="address"
                          name="address"
                          placeholder="Enter Address"
                          className="p-1"
                          type="address"
                        />
                        <ErrorMessage
                          name="address"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                          className=""
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* Plan Number */}
                        <label
                          htmlFor="planNo"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Plan Number{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="planNo"
                          name="planNo"
                          placeholder="Enter Plan Number"
                          className="p-1"
                        />
                        <ErrorMessage
                          name="planNo"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                          className=""
                        />
                      </div>
                    </div>

                    <div className="row mb-4">
                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* Beacon Number */}
                        <label
                          htmlFor="beaconNo"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Beacon Number{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="beaconNo"
                          name="beaconNo"
                          placeholder="Enter Beacon Number"
                          className="p-1"
                        />
                        <ErrorMessage
                          name="beaconNo"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* Total Area */}
                        <label
                          htmlFor="totalArea"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Total Area{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="totalArea"
                          name="totalArea"
                          placeholder="Enter Total Area"
                          className="p-1"
                        />
                        <ErrorMessage
                          name="totalArea"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting || Object.keys(errors).length > 0}
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </motion.div>
    </section>
  );
};

export default LuacAffidavitForm;
