import React, { useState } from "react";
import close from "../assets/img/cerrar.png";

const apiURL = process.env.REACT_APP_API_URL;

const ModalUsers = ({ stateM, changeState, updateUsersList }) => {
  const initialFormState = {
    nombre: "",
    email: "",
    telefono: "",
    contrasena: "",
    rol: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setMensaje("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const telefonoPattern = /^\d{10}$/;
    if (!telefonoPattern.test(formData.telefono)) {
      setError("El teléfono debe tener 10 dígitos.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No se encontró el token de autorización");
      }

      const response = await fetch(`${apiURL}/api/create-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje(data.message);
        setError("");
        updateUsersList();
        resetForm();
        changeState(false);
        alert("Se ha registrado un nuevo usuario");
      } else {
        setError(data.error || "Error al registrar usuario.");
      }
    } catch (error) {
      console.error("Error al crear usuario:", error);
      setError("Error en la conexión con el servidor: " + error.message);
    }
  };

  if (!stateM) return null;

  return (
    <div className="add">
      <form className="cont-add" onSubmit={handleSubmit}>
        <img
          className="close"
          onClick={() => {
            changeState(false);
            resetForm();
          }}
          src={close}
          alt="Cerrar"
        />
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          required
          className="input-field"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo"
          required
          className="input-field"
        />
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Teléfono"
          required
          className="input-field"
        />
        <input
          type="password"
          name="contrasena"
          value={formData.contrasena}
          onChange={handleChange}
          placeholder="Contraseña"
          required
          className="input-field"
        />
        <select
          name="rol"
          value={formData.rol}
          onChange={handleChange}
          required
          className="select-field"
        >
          <option value="">Seleccione Rol</option>
          <option value="Administrador">Administrador</option>
          <option value="Caja">Caja</option>
          <option value="Mesero">Mesero</option>
          <option value="Cocina">Cocina</option>
          <option value="Bar">Bar</option>
        </select>
        <button type="submit" className="submit-button">
          Agregar
        </button>
      </form>
      {mensaje && <p className="success-message">{mensaje}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ModalUsers;
