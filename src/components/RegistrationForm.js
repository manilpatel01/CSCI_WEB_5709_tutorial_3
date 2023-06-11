import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./RegistrationForm.css";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .matches(/^[A-Za-z]+$/, "First name should contain only letters")
      .required("Required"),
    lastName: Yup.string()
      .matches(/^[A-Za-z]+$/, "Last name should contain only letters")
      .required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(8, "Password should be at least 8 characters long")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const onSubmit = (values) => {
    if(!values) {
        navigate("/")
    } else {
        navigate("/profile", {state: { user: values}})
    }
  };

  return (
    <div className="form-container">
      <div className="formContentContainer">
        <h2 id="title">Sign Up</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                className="form-control inputField"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                className="form-control"
              />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="form-control"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="form-control"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-control"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error"
              />
            </div>
            <button type="submit" className="submit-btn">
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
