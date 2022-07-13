import classes from "./AppointmentModal.module.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const AppointmentModal = () => {
  const [showModal, setShowModal] = useState(false);
  const form = useRef();

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
          <h1>Изпратете запитване за свободен час:</h1>
          <label htmlFor="name">Име:</label>
          <input id="name" type="text" name="firstName" />
          <label htmlFor="email">Имейл:</label>
          <input id="email" type="email" name="userEmail" />
          <label htmlFor="data">Запитване за дата:</label>
          <input id="data" type="date" name="data" />
          <label htmlFor="message">Съобщение:</label>
          <textarea id="message" name="message"></textarea>
          <input type="submit" value="Send" />
          <button onClick={() => setShowModal(false)}>No</button>
        </form>
      )}
    </div>
  );
};

export default AppointmentModal;
