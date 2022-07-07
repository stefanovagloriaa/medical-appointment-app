import { Fragment, useState } from "react";
import Image from "next/image";
import { AiFillFire } from "react-icons/ai";
import AppointmentModal from "./AppointmentModal";
import classes from "./Modal.module.css";

const Modal = () => {
  return (
    <div>
      <div>
        <button
          onClick={() => setShowModal(true)}
          className={classes.buttonStyle}
        >
          Запази час <AiFillFire />
        </button>
      </div>
    </div>
  );
};

export default Modal;
