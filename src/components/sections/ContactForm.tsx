import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import Button from "../atoms/Button";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <section className={styles.contactForm}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Por favor ingrese un nombre"),
          email: Yup.string()
            .email("Por favor ingrese un correo válido")
            .required("Por favor ingrese un correo"),
          message: Yup.string().required("Por favor ingrese un mensaje"),
        })}
      >
        {formik => (
          <Form className={styles.contactForm__form}>
            <div className={styles.contactForm__inputBox}>
              <div className={styles.contactForm__formControlContainer}>
                <label className={styles.contactForm__label} htmlFor="name">
                  Nombre:
                </label>
                <Field
                  name="name"
                  type="text"
                  autoComplete="off"
                  className={`${styles.contactForm__formControl} ${
                    formik.errors.name && formik.touched.name
                      ? styles["contactForm__formControl-error"]
                      : ""
                  }`}
                  id="name"
                  placeholder="Jair Tello"
                />
                <ErrorMessage name="name">
                  {msg => (
                    <span className={styles.contactForm__text}>{msg}</span>
                  )}
                </ErrorMessage>
              </div>
              <div className={styles.contactForm__formControlContainer}>
                <label className={styles.contactForm__label} htmlFor="email">
                  Correo:
                </label>
                <Field
                  name="email"
                  type="email"
                  autoComplete="off"
                  className={`${styles.contactForm__formControl} ${
                    formik.errors.email && formik.touched.email
                      ? styles["contactForm__formControl-error"]
                      : ""
                  }`}
                  id="email"
                  placeholder="jairdeyner730791@gmail.com"
                />
                <ErrorMessage name="email">
                  {msg => (
                    <span className={styles.contactForm__text}>{msg}</span>
                  )}
                </ErrorMessage>
              </div>
            </div>
            <div className={styles.contactForm__formControlContainer}>
              <label className={styles.contactForm__label} htmlFor="message">
                Mensaje:
              </label>
              <Field
                name="message"
                as="textarea"
                autoComplete="off"
                className={`${styles.contactForm__formControl} ${
                  formik.errors.message && formik.touched.message
                    ? styles["contactForm__formControl-error"]
                    : ""
                }`}
                id="message"
                placeholder="Mensaje :)"
                rows={5}
              />
              <ErrorMessage name="message">
                {msg => <span className={styles.contactForm__text}>{msg}</span>}
              </ErrorMessage>
            </div>
            <div className={styles.contactForm__buttonBox}>
              <Button
                model="ghost"
                size="normal"
                type="submit"
                value="Enviar Mensaje"
              />
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm;
