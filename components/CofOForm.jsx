"use client";
import React from "react";
import { motion } from "framer-motion";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const CofOForm = () => {
  const initialValues = {
    title: "",
    surname: "",
    firstName: "",
    middleName: "",
    dob: "",
    age: "",
    sex: "",
    nationality: "",
    residentialAddress: "",
    postalAddress: "",
    phone: "",
    lga: "",
    town: "",
    occupation: "",
    occupancyType: "",
    landPurpose: "",
    townLayout: "",
    landOwnerAddress: "",
    landOwnerName: "",
    landDescription: "",
    leaseLength: "",
    company: "",
    companyRegistrationNo: "",
    companyRegistrationYear: "",
    headOffice: "",
    directors: [
      {
        name: "",
        dob: "",
      },
      {
        name: "",
        dob: "",
      },
      {
        name: "",
        dob: "",
      },
      {
        name: "",
        dob: "",
      },
      {
        name: "",
        dob: "",
      },
    ],
    companyRegistrationNumber: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    surname: Yup.string().required("Required"),
    firstName: Yup.string().required("Required"),
    middleName: Yup.string().required("Required"),
    dob: Yup.date().required("Required"),
    age: Yup.number().required("Required"),
    sex: Yup.string().required("Required"),
    nationality: Yup.string().required("Required"),
    residentialAddress: Yup.string().required("Required"),
    postalAddress: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    lga: Yup.string().required("Required"),
    town: Yup.string().required("Required"),
    occupation: Yup.string().required("Required"),
    occupancyType: Yup.string().required("Required"),
    landPurpose: Yup.string().required("Required"),
    townLayout: Yup.string().required("Required"),
    landOwnerAddress: Yup.string().required("Required"),
    landOwnerName: Yup.string().required("Required"),
    landDescription: Yup.string().required("Required"),
    leaseLength: Yup.string().required("Required"),
    company: Yup.string(),
    companyRegistrationNo: Yup.string(),
    companyRegistrationYear: Yup.number(),
    headOffice: Yup.string(),
    directors: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("Required"),
        dob: Yup.string().required("Required"),
      })
    ),
    companyRegistrationNumber: Yup.string().nullable(),
  });

  return (
    <section
      className="about py-5"
      style={{
        paddingTop:
          typeof window !== "undefined" && window.innerWidth <= 768
            ? "1rem"
            : "4rem",
        backgroundColor: "#f9fdff",
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
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
            validationSchema={validationSchema}
          >
            {({ errors, isSubmitting }) => {
              return (
                <Form>
                  <div className="col">
                    <h4 className="text-decoration-underline my-5">
                      Personal Details
                    </h4>

                    <div className="row mb-2">
                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* Title */}
                        <label
                          htmlFor="title"
                          className="font-weight-bold"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Title{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="title"
                          name="title"
                          placeholder="Enter Title"
                          className="p-1 px-2"
                        />
                        <ErrorMessage
                          name="title"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* Surname */}
                        <label
                          htmlFor="surname"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Surname{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="surname"
                          name="surname"
                          placeholder="Enter Surname"
                          className="p-1 px-2"
                        />
                        <ErrorMessage
                          name="surname"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* firstName */}
                        <label
                          htmlFor="firstName"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          First Name{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="firstName"
                          name="firstName"
                          placeholder="Enter First Name"
                          className="p-1 px-2"
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* middleName */}
                        <label
                          htmlFor="middleName"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Middle Name{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="middleName"
                          name="middleName"
                          placeholder="Enter Middle Name"
                          className="p-1 px-2"
                        />
                        <ErrorMessage
                          name="middleName"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                        />
                      </div>
                    </div>

                    <div className="row mb-lg-2 mb-0">
                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* DOB */}
                        <label
                          htmlFor="dob"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Date of Birth{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="dob"
                          name="dob"
                          placeholder="Enter Date of Birth"
                          className="p-1 px-2"
                          type="date"
                        />
                        <ErrorMessage
                          name="dob"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                          className=""
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* age */}
                        <label
                          htmlFor="age"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Age{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="age"
                          name="age"
                          placeholder="Enter Age"
                          className="p-1 px-2"
                          type="number"
                        />
                        <ErrorMessage
                          name="age"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* sex */}
                        <label
                          htmlFor="sex"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Sex{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="sex"
                          name="sex"
                          placeholder="Enter Sex"
                          className="p-1 px-2"
                        />
                        <ErrorMessage
                          name="sex"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* nationality */}
                        <label
                          htmlFor="nationality"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Nationality{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="nationality"
                          name="nationality"
                          placeholder="Enter nationality"
                          className="p-1 px-2"
                        />
                        <ErrorMessage
                          name="nationality"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                        />
                      </div>
                    </div>

                    <div className="row mb-lg-2 mb-0">
                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* residentialAddress */}
                        <label
                          htmlFor="residentialAddress"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Residential Address{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="residentialAddress"
                          name="residentialAddress"
                          placeholder="Enter Residential Address"
                          className="p-1 px-2"
                          type="residentialAddress"
                        />
                        <ErrorMessage
                          name="residentialAddress"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                          className=""
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* postalAddress */}
                        <label
                          htmlFor="postalAddress"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Postal Address{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="postalAddress"
                          name="postalAddress"
                          placeholder="Enter Postal Address"
                          className="p-1 px-2"
                          type="address"
                        />
                        <ErrorMessage
                          name="postalAddress"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                          className=""
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* Phone Number */}
                        <label
                          htmlFor="phone"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Phone Number{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="phone"
                          name="phone"
                          placeholder="Enter Phone Number"
                          className="p-1 px-2"
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* LGA */}
                        <label
                          htmlFor="lga"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          LGA{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="lga"
                          name="lga"
                          placeholder="Enter LGA"
                          className="p-1 px-2"
                        />
                        <ErrorMessage
                          name="lga"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                        />
                      </div>
                    </div>

                    <div className="row mb-lg-2 mb-0">
                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* town */}
                        <label
                          htmlFor="town"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Town{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="town"
                          name="town"
                          placeholder="Enter Town"
                          className="p-1 px-2"
                          type="address"
                        />
                        <ErrorMessage
                          name="town"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                          className=""
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* occupation */}
                        <label
                          htmlFor="occupation"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Occupation{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="occupation"
                          name="occupation"
                          placeholder="Enter Occupation"
                          className="p-1 px-2"
                        />
                        <ErrorMessage
                          name="occupation"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* townLayout */}
                        <label
                          htmlFor="townLayout"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Town and Layout Applied For{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="townLayout"
                          name="townLayout"
                          placeholder="Enter Town and Layout"
                          className="p-1 px-2"
                        />
                        <ErrorMessage
                          name="townLayout"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                        />
                      </div>
                    </div>

                    <div className="row mb-lg-2 mb-0">
                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* Vendor/Guarantor's /Initial Land owner's Name */}
                        <label
                          htmlFor="landOwnerName"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Vendor / Guarantor&rsquo;s / Initial Land
                          Owner&rsquo;s Name{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="landOwnerName"
                          name="landOwnerName"
                          placeholder="Enter Land Owner Name"
                          className="p-1 px-2"
                        />
                        <ErrorMessage
                          name="landOwnerName"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* Vendor/Guarantor's /Initial Land owner's Name */}
                        <label
                          htmlFor="landOwnerAddress"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Vendor&rsquo;s /Guarantor&rsquo;s / Initial Land
                          Owner&rsquo;s Address{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="landOwnerAddress"
                          name="landOwnerAddress"
                          placeholder="Enter Land Owner Address"
                          className="p-1 px-2"
                        />
                        <ErrorMessage
                          name="landOwnerAddress"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* land description */}
                        <label
                          htmlFor="landDescription"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Land Description{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="landDescription"
                          name="landDescription"
                          placeholder="Enter Land Description"
                          className="p-1 px-2"
                        />
                        <ErrorMessage
                          name="landDescription"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                        />
                      </div>
                    </div>

                    <div className="row mb-lg-2 mb-0">
                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* Occupancy Type */}
                        <label
                          htmlFor="occupancyType"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Occupancy Type
                          <span style={{ fontSize: "12px" }}>
                            {" "}
                            (Statutory / Customary)
                          </span>{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="occupancyType"
                          name="occupancyType"
                          placeholder="Enter Occupancy Type"
                          className="p-1 px-2"
                        />
                        <ErrorMessage
                          name="occupancyType"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* land purpose */}
                        <label
                          htmlFor="landPurpose"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Land Purpose
                          <span style={{ fontSize: "12px" }}>
                            {" "}
                            (Commercial / Agricultural / Residential)
                          </span>
                          {""}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="landPurpose"
                          name="landPurpose"
                          placeholder="Enter Land Purpose"
                          className="p-1 px-2"
                        />
                        <ErrorMessage
                          name="landPurpose"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* lease Length */}
                        <label
                          htmlFor="leaseLength"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Length of Lease{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          type="number"
                          id="leaseLength"
                          name="leaseLength"
                          placeholder="Enter Length of Lease"
                          className="p-1 px-2"
                        />
                        <ErrorMessage
                          name="leaseLength"
                          component="div"
                          style={{ color: "red", fontSize: "0.75rem" }}
                        />
                      </div>
                    </div>

                    <h4 className="text-decoration-underline my-5">
                      For Companies and Organisations (If Applicable)
                    </h4>

                    <div className="row mb-2">
                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* Company Registration Number */}
                        <label
                          htmlFor="companyRegistrationNumber"
                          className="font-weight-bold"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Company Registration Number{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="companyRegistrationNumber"
                          name="companyRegistrationNumber"
                          placeholder="Enter Registration Number"
                          className="p-1 px-2"
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* Company Registration Year */}
                        <label
                          htmlFor="companyRegistrationYear"
                          className="font-weight-bold"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Company Registration Year{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="companyRegistrationYear"
                          name="companyRegistrationYear"
                          placeholder="Enter Registration Year"
                          className="p-1 px-2"
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* Registered Head Office */}
                        <label
                          htmlFor="registeredHeadOffice"
                          className="font-weight-bold"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Registered Head Office{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="registeredHeadOffice"
                          name="registeredHeadOffice"
                          placeholder="Enter Address"
                          className="p-1 px-2"
                        />
                      </div>
                    </div>

                    <div className="row mb-2">
                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* Company Name */}
                        <label
                          htmlFor="companyName"
                          className="font-weight-bold"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Company Name{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="companyName"
                          name="companyName"
                          placeholder="Enter Company Name"
                          className="p-1 px-2"
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* Company Registration Year */}
                        <label
                          htmlFor="companyRegistrationYear"
                          className="font-weight-bold"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Company Registration Year{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="companyRegistrationYear"
                          name="companyRegistrationYear"
                          placeholder="Enter Registration Year"
                          className="p-1 px-2"
                        />
                      </div>

                      <div className="col d-flex flex-column my-lg-0 my-2">
                        {/* Registered Head Office */}
                        <label
                          htmlFor="registeredHeadOffice"
                          className="font-weight-bold"
                          style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          Registered Head Office{" "}
                          <span style={{ color: "red", fontSize: "0.75rem" }}>
                            *
                          </span>
                        </label>
                        <Field
                          id="registeredHeadOffice"
                          name="registeredHeadOffice"
                          placeholder="Enter Address"
                          className="p-1 px-2"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary mt-4"
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

export default CofOForm;
