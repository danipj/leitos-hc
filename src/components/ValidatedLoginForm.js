import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Obrigatório"),
      password: Yup.string()
        .required("Senha obrigatória")
        .min(8, "Senha muito curta - mínimo de 8 caracteres")
        .matches(/(?=.*[0-9])/, "Inclua ao menos um número na sua senha")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Digite seu email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label htmlFor="email">Senha</label>
          <input
            name="password"
            type="password"
            placeholder="Digite sua senha"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;
