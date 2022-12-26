import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contact.class";

const BComponent = ({ contacto }) => {
  const [connect, setConnect] = useState(contacto.conectado);
  const set = () => {
    setConnect(!connect);
  };

  return (
    <div>
      <span>{connect ? "Contacto En Línea" : "Contacto No Disponible"}</span>
      <button onClick={set}>{connect ? "off" : "on"}</button>
    </div>
  );
};

BComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto)
};

export default BComponent;
