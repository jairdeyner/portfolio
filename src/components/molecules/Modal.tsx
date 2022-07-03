import { useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "../atoms/Button";

import styles from "./Modal.module.scss";

interface ModalProps {
  type: "error" | "success";
  title: string;
  text: string;
  closeModal: () => void;
}

const Modal = ({ title, type, text, closeModal }: ModalProps) => {
  useEffect((): (() => void) => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return createPortal(
    <article
      onClick={closeModal}
      className={`${styles.modal} ${styles[`modal-${type}`]}`}
    >
      <div onClick={e => e.stopPropagation()} className={styles.modal__content}>
        <h2 className={styles.modal__title}>{title}</h2>

        <p className={styles.modal__text}>{text}</p>

        <div className={styles.modal__buttonBox}>
          <Button
            model="ghost"
            size="medium"
            type="button"
            value="Cerrar"
            onClick={closeModal}
          />
        </div>
      </div>
    </article>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
