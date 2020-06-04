import React from "react";
import classes from "./Modal.module.css";
import Auxilliary from "../../../hoc/Auxilliary";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <Auxilliary>
      <Backdrop show={props.show} click={props.modalClose}></Backdrop>
      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
        className={classes.Modal}
      >
        {props.children}
      </div>
    </Auxilliary>
  );
};

export default Modal;
