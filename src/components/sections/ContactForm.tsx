import Button from "../atoms/Button";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Mensaje enviandose");
  };

  return (
    <section className={styles.contactForm}>
      <form
        className={styles.contactForm__form}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className={styles.contactForm__inputBox}>
          <div className={styles.contactForm__formControlContainer}>
            <label className={styles.contactForm__label} htmlFor="name">
              Nombre:
            </label>
            <input
              className={styles.contactForm__formControl}
              type="text"
              autoComplete="off"
              id="name"
              placeholder="Jair Tello"
            />
            <span className={styles.contactForm__text}>
              El nombre es obligaorio
            </span>
          </div>
          <div className={styles.contactForm__formControlContainer}>
            <label className={styles.contactForm__label} htmlFor="email">
              Correo:
            </label>
            <input
              className={styles.contactForm__formControl}
              type="email"
              autoComplete="off"
              id="email"
              placeholder="jairdeyner730791@gmail.com"
            />
            {/* <span className={styles.contactForm__text}>
              El correo es obligaorio
            </span> */}
          </div>
        </div>
        <div className={styles.contactForm__formControlContainer}>
          <label className={styles.contactForm__label} htmlFor="message">
            Mensaje:
          </label>
          <textarea
            className={styles.contactForm__formControl}
            placeholder="Mensaje :)"
            id="message"
            autoComplete="off"
            rows={5}
          ></textarea>
          {/* <span className={styles.contactForm__text}>
            El mensaje no debe estar vacío
          </span> */}
        </div>
        <div className={styles.contactForm__buttonBox}>
          <Button
            model="ghost"
            size="normal"
            type="submit"
            value="Enviar Mensaje"
          />
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
