import { Formik , Form ,  Field , ErrorMessage} from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";

import css from './RegisterForm.module.css'

export default function RegisterForm() {
  const dispach = useDispatch();

  const initialValue = {
    name: "",
    email: "",
    password: "",
  };
  const formId = useId();

  function handleSubmit(values , action) {
    dispach(register(values));
    action.resetForm();
  }

  const LoginSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
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
          <label htmlFor={`name-${formId}`} className={css.label}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            placeholder="name"
            name="name"
            id={`name-${formId}`}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
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
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>
        <button className={css.butSubmit} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}