import React, { useState } from "react";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import { Outlet } from "react-router-dom";
import add from "../assets/img/agregar.png";
import fil from "../assets/img/filtro.png";
import ModalUsers from "../components/ModalUsers";
import edit from "../assets/img/editar.png";
import shows from "../assets/img/ver.png";
import deletes from "../assets/img/borrar.png";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  const [stateM, changeState] = useState(false);

  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-..."
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
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
          <form className="form-users">
            <img
              className="open"
              src={add}
              alt="Agregar"
              onClick={() => changeState(true)}
            />
            <ModalUsers stateM={stateM} changeState={changeState} />
            <img className="fil" src={fil} alt="Filtrar" />
            <div className="users">
              <label className="name">Nombre</label>
              <img className=" edit" src={edit} />
              <img className="  show" src={shows} />
              <img className=" delete" src={deletes} />
            </div>
          </form>
        </div>
      </section>
      <Outlet />
    </div>
  );
};

export default AdminUsers;
