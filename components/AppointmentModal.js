import classes from "./AppointmentModal.module.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const AppointmentModal = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <div>
        <button
          onClick={() => setShowModal(true)}
          className={classes.buttonStyle}
        >
          Запази час
        </button>
      </div>
      {showModal && (
        <form className={classes.appointment}>
          <h1>Save your hour</h1>
          <label id="subject">Тема</label>
          <input id="subject" />
          <label htmlFor="message">Съобщение</label>
          <textarea id="message"></textarea>
          <button>Send email</button>
          <button onClick={() => setShowModal(false)}>No</button>
        </form>
      )}
    </div>
  );
};

export default AppointmentModal;
