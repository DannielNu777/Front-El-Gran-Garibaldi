import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import add from "../assets/img/agregar.png";
import search from "../assets/img/busqueda.png";
import ModalUsers from "../components/ModalUsers.jsx";
import edit from "../assets/img/editar.png";
import shows from "../assets/img/ver.png";
import deletes from "../assets/img/borrar.png";

const apiURL = process.env.REACT_APP_API_URL;

const AdminUsers = () => {
  const [stateM, setStateM] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mostrar los detalles del usuario sin editar
  const handleShowUser = (user) => {
    setUserDetails(user);
    setIsEditing(false);
  };

  // Manejar la edición del usuario
  const handleEditUser = (user) => {
    setUserDetails(user);
    setIsEditing(true);
  };

  // Obtener la lista de usuarios
  const fetchUsers = async () => {
    try {
      const response = await fetch(`${apiURL}/api/show-users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Error al obtener usuarios");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Abrir el modal para agregar un usuario
  const handleOpenModal = (e) => {
    e.preventDefault();
    setStateM(true);
  };

  // Eliminar usuario
  const handleDeleteUser = async (email) => {
    const confirmed = window.confirm(
      `¿Estás seguro de que deseas eliminar este usuario?`
    );
    if (!confirmed) return;

    try {
      const response = await fetch(`${apiURL}/api/delete-user/${email}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setUsers(users.filter((user) => user.email !== email));
      } else {
        const errorData = await response.json();
        console.log("Error al eliminar usuario:", errorData.message);
      }
    } catch (error) {
      console.log("Error en la conexión:", error);
    }
  };

  // Actualizar usuario
  const handleUpdateUser = async (e) => {
    e.preventDefault(); // Evitar comportamiento por defecto del formulario

    // Validación de campos obligatorios
    const missingFields = [];
    if (!userDetails.email?.trim()) missingFields.push("email");
    if (!userDetails.nombre?.trim()) missingFields.push("nombre");
    if (!userDetails.telefono?.trim()) missingFields.push("teléfono");
    if (!userDetails.rol?.trim()) missingFields.push("rol");

    if (missingFields.length > 0) {
      alert(
        `Por favor completa los siguientes campos: ${missingFields.join(", ")}`
      );
      return;
    }

    // Prepara los datos para el back-end, incluyendo nuevo_email si se desea cambiar el email
    const { email, ...updatedData } = userDetails;
    const payload = {
      nombre: userDetails.nombre,
      nuevo_email: userDetails.email, // Si quieres permitir actualizar el email
      telefono: userDetails.telefono,
      rol: userDetails.rol,
    };

    try {
      const response = await fetch(`${apiURL}/api/update-user/${email}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        try {
          const errorData = JSON.parse(errorText);
          alert(
            `Error al actualizar usuario: ${
              errorData.message || "Error desconocido"
            }`
          );
        } catch {
          alert(`Error al actualizar usuario: ${errorText}`);
        }
      } else {
        const updatedUser = await response.json();
        setUsers((prevUsers) =>
          prevUsers.map((user) => (user.email === email ? updatedUser : user))
        );
        setUserDetails(null);
        alert("Usuario actualizado con éxito.");
        window.location.reload();
      }
    } catch (error) {
      console.log("Error en la conexión:", error);
      alert("Error en la conexión. Por favor intenta de nuevo más tarde.");
    }
  };

  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />
      <header className="header-admin">
        <Link to="/admin-main">
          <img className="Iso_logo" src={Isologo} alt="Isologo" />
        </Link>
      </header>
      <section className="Container-admin">
        <div className="background-admin">
          <h1 className="U1">Administración Usuarios</h1>
          <div className="form-users">
            <div onClick={handleOpenModal} className="open">
              <img src={add} alt="Agregar" />
            </div>
            <ModalUsers
              stateM={stateM}
              changeState={setStateM}
              updateUsersList={fetchUsers}
            />
            <search>
              <div className="search-cont">
                <input
                  className="input-search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Buscar por nombre"
                />
              </div>
            </search>
            <div className="users">
              {error && <p className="error-message">{error}</p>}
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <div key={user.id_usuario} className="user-item">
                    <label className="name">{user.nombre}</label>
                    <img
                      className="edit"
                      src={edit}
                      alt="Editar"
                      onClick={() => handleEditUser(user)}
                    />
                    <img
                      className="show"
                      src={shows}
                      alt="Ver"
                      onClick={() => handleShowUser(user)}
                    />
                    <img
                      onClick={() => handleDeleteUser(user.email)}
                      className="delete"
                      src={deletes}
                      alt="Borrar"
                    />
                  </div>
                ))
              ) : (
                <p className="label">No hay usuarios disponibles</p>
              )}
            </div>
          </div>
        </div>
      </section>
      {userDetails && (
        <div className="user-modal">
          <div className="user-details">
            <h2 className="label">
              {isEditing ? "Editar Usuario" : "Detalles del Usuario"}
            </h2>
            {isEditing ? (
              <form className="cont-edit" onSubmit={handleUpdateUser}>
                <label className="label" htmlFor="nombre">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={userDetails.nombre}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, nombre: e.target.value })
                  }
                />
                <label className="label" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userDetails.email}
                  disabled // El email no debe poder modificarse
                />
                <label className="label" htmlFor="telefono">
                  Teléfono:
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={userDetails.telefono}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      telefono: e.target.value,
                    })
                  }
                />
                <label className="label" htmlFor="rol">
                  Rol:
                </label>
                <input
                  type="text"
                  id="rol"
                  name="rol"
                  value={userDetails.rol}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, rol: e.target.value })
                  }
                />
                <button type="submit">Guardar</button>
                <button onClick={() => setUserDetails(null)}>Cerrar</button>
              </form>
            ) : (
              <>
                <p>Nombre: {userDetails.nombre}</p>
                <p>Email: {userDetails.email}</p>
                <p>Teléfono: {userDetails.telefono}</p>
                <p>Rol: {userDetails.rol}</p>
                <button onClick={() => setUserDetails(null)}>Cerrar</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
