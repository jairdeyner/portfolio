import emailjs from "@emailjs/browser";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";
import { useModal } from "../../hooks/useModal";

import Button from "../atoms/Button";
import Modal from "../molecules/Modal";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [isOpenModalSuccess, openModalSuccess, closeModalSuccess] =
    useModal(false);
  const [isOpenModalError, openModalError, closeModalError] = useModal(false);

  return (
    <section className={styles.contactForm}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={(values, { resetForm }) => {
          setIsSendingEmail(true);
          emailjs
            .sendForm(
              import.meta.env.VITE_EMAILJS_SERVICE_ID,
              import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
              formRef.current as HTMLFormElement,
              import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
              () => {
                openModalSuccess();
                resetForm();
              },
              () => {
                openModalError();
              }
            )
            .finally(() => {
              setIsSendingEmail(false);
            });
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
          <Form ref={formRef} className={styles.contactForm__form}>
            <div className={styles.contactForm__inputBox}>
              <div className={styles.contactForm__formControlContainer}>
                <label className={styles.contactForm__label} htmlFor="name">
                  Nombre:
                </label>
                <Field
                  disabled={isSendingEmail}
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
                  disabled={isSendingEmail}
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
                disabled={isSendingEmail}
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
                disabled={isSendingEmail}
                value={isSendingEmail ? "Enviando..." : "Enviar Mensaje"}
              />
            </div>
          </Form>
        )}
      </Formik>

      {isOpenModalSuccess && (
        <Modal
          type="success"
          title="Éxito"
          text="Mensaje enviado correctamente"
          closeModal={closeModalSuccess}
        />
      )}
      {isOpenModalError && (
        <Modal
          type="error"
          title="Error"
          text="Ha ocurrido un error inténtelo de nuevo"
          closeModal={closeModalError}
        />
      )}
    </section>
  );
};

export default ContactForm;
