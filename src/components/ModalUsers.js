import React from "react";
import close from "../assets/img/cerrar.png";

const ModalUsers = ({ stateM, changeState }) => {
  if (!stateM) return null;
  return (
    <div className="add">
      <div className="cont-add">
        <img
          className="close"
          onClick={() => changeState(false)}
          src={close}
          alt="Cerrar"
        />
        <label htmlFor="name" className="label">
          Nombre
        </label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email" className="label">
          Correo
        </label>
        <input type="email" name="email" id="email" />

        <label htmlFor="phone" className="label">
          Telefono
        </label>
        <input type="tel" name="phone" id="phone" />
        <label htmlFor="password" className="label">
          Contraseña
        </label>
        <input type="password" name="password" id="password" />
        <label htmlFor="select" className="label">
          Rol
        </label>
        <select className="sel-users">
          <option value="option 1">Seleccione Rol</option>
          <option value="option 2">Administración</option>
          <option value="option 3">Caja</option>
          <option value="option 4">Mesero</option>
          <option value="option 5">Cocina</option>
        </select>
        <button className="add-button">Agregar</button>
      </div>
    </div>
  );
};

export default ModalUsers;
