import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import { login } from '../api.js';

const ValidatedLoginForm = (props) => (
  <Formik
    initialValues={{ username: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(true);
      login(values)
        .then((res) => {
          props.onLogin(res.data.access_token);
        })
        .catch((e) => {
          console.log('deu erro');
          setSubmitting(false);
        })
    }}

    validationSchema={Yup.object().shape({
      username: Yup.string()
        .email()
        .required("Obrigatório"),
      password: Yup.string()
        .required("Senha obrigatória")
        .min(6, "Senha muito curta - mínimo de 6 caracteres")
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
            name="username"
            type="text"
            placeholder="Digite seu email"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.username && touched.username && "error"}
          />
          {errors.username && touched.username && (
            <div className="input-feedback">{errors.username}</div>
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
