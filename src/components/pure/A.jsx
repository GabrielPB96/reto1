import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contact.class";
import BComponent from "./B";

const AComponent = ({ contacto }) => {
  return (
    <div>
      <h1>Contacto</h1>
      <h2>Nombre: {contacto.nombre + " " + contacto.apellido}</h2>
      <h3>Email: {contacto.email}</h3>
      <BComponent contacto={contacto}></BComponent>
    </div>
  );
};

AComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto)
};

export default AComponent;
