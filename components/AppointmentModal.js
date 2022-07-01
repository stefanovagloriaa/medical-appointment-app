import classes from "./AppointmentModal.module.css";
import { useState } from "react";

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
          <button>Yes</button>
          <button onClick={() => setShowModal(false)}>No</button>
        </form>
      )}
    </div>
  );
};

export default AppointmentModal;
