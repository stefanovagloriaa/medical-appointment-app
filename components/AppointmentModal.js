import classes from "./AppointmentModal.module.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const AppointmentModal = () => {
  const [showModal, setShowModal] = useState(false);
  const form = useRef();

  const closeModal = () => {
    setShowModal(false);
  };

  const submitHandler = (ev) => {
    ev.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "FbAECAXTkZfH0x-Y1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
        <form
          ref={form}
          onSubmit={submitHandler}
          className={classes.appointment}
        >
          <h1>Save your hour</h1>
          <label>Име</label>
          <input type="text" name="firstName" />
          <label>Имейл</label>
          <input type="email" name="userEmail" />
          <label>Съобщение</label>
          <textarea name="message"></textarea>
          <input type="submit" value="Send" />
          <button onClick={() => setShowModal(false)}>No</button>
        </form>
      )}
    </div>
  );
};

export default AppointmentModal;
