import { Fragment, useState } from "react";
import Image from "next/image";
import classes from "./Modal.module.css";
import { AiFillFire } from "react-icons/ai";
const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex md:flex-col justify-center items-center mt-100">
      <div flex gap-5>
        <button
          onClick={() => setShowModal(true)}
          className={classes.buttonStyle}
        >
          Запази час <AiFillFire />
        </button>
      </div>
      {showModal && (
        <div>
          Save your hour
          <button>Yes</button>
          <button onClick={() => setShowModal(false)}>No</button>
        </div>
      )}
    </div>
  );
};

export default Modal;
