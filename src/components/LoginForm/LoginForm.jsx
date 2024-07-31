import { Formik , Form ,  Field , ErrorMessage} from "formik";
import { useId } from "react";
import * as Yup from "yup";

import css from './LoginForm.module.css'
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispach = useDispatch();
  const initialValue = {
    email: "",
    password: "",
  };
  const formId = useId()
  function handleSubmit(value , actions) {
    dispach(login(value));
    actions.resetForm();
  }

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
    password: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form className={css.form}>
        <div className={css.wrapInput}>
          <label htmlFor={`email-${formId}`} className={css.label}>
            Email
          </label>
          <Field
            className={css.input}
            type="email"
            placeholder="email"
            name="email"
            id={`email-${formId}`}
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div className={css.wrapInput}>
          <label htmlFor={`password-${formId}`} className={css.label}>
            Password
          </label>
          <Field
            className={css.input}
            type="text"
            placeholder="password"
            name="password"
            id={`password-${formId}`}
          />
          <ErrorMessage className={css.error} name="password" component="span" />
        </div>
        <button className={css.butSubmit} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}