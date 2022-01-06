import React from "react";
import { useState } from "react/cjs/react.development";

const Modal = (props) => {
  const [PopUp, setPopUp] = useState({ show: false });

  return (
    <div id="confirmation" className="modal">
      {console.log(PopUp.show)}
      Employee Created!
    </div>
  );
};

export default Modal;
