import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("❌ Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("❌ Required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("❌ Required"),
        password: Yup.string()
          .required("❌ Required")
          .min(8, "Password is too short - should be 8 chars minimum."),
        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("❌ Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="login-form">
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <div className="form-error">
          <ErrorMessage name="firstName" />
        </div>

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <div className="form-error">
          <ErrorMessage name="lastName" />
        </div>

        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <div className="form-error">
          <ErrorMessage name="email" />
        </div>

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" />
        <div className="form-error">
          <ErrorMessage name="password" />
        </div>

        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <Field name="passwordConfirmation" type="password" />
        <div className="form-error">
          <ErrorMessage name="passwordConfirmation" />
        </div>
        <hr />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Login;
