import React from "react";
import { Outlet } from "react-router-dom";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import { Link, useNavigate } from "react-router-dom";

function Order_One() {
  return (
    <div>
      <header className="header">
        <div className="Navbar">
          <nav>
            <Link to="/login">
              <img className="Iso_logo" src={Isologo} alt="Isologo" />
            </Link>
            <Link to="/">Inicio</Link>
          </nav>
        </div>
      </header>
      <section className="Container-login">
        <div className="background-log-order">
          <form className="form">
            <h1 className="h1">MESERO</h1>
            <span className="input-span-order">
              <label htmlFor="email" className="label">
                ¿Deseas Agregar Nueva Orden?
              </label>
              <Link to="/new-order">
                <button class="button-new-order">Nueva Orden</button>
              </Link>
            </span>
            <span className="input-span-order">
              <label htmlFor="password" className="label">
                ¿Deseas Consultar las Ordenes Pendientes?
              </label>
              <Link to="/pending-order">
                <button class="button-new-order">Ordenes Pendientes</button>
              </Link>
            </span>
          </form>
        </div>
      </section>
      <Outlet />
    </div>
  );
}
export default Order_One;
