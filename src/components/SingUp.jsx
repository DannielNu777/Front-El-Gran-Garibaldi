import React, { Component } from "react";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";

import { Outlet, Link, Navigate } from "react-router-dom";

class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      email: "",
      telefono: "",
      contrasena: "",
      confirmarContrasena: "",
      mensaje: "",
      error: "",
      redirect: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    //password
    if (this.state.contrasena !== this.state.confirmarContrasena) {
      alert("Contraseña no coincide");
      return;
    }
    //phone
    const telefonoPattern = /^\d{10}$/;
    if (!telefonoPattern.test(this.state.telefono)) {
      alert("El teléfono debe tener 10 dígitos.");
      return;
    }
    const { nombre, email, telefono, contrasena } = this.state;

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nombre, email, telefono, contrasena }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        this.setState({ mensaje: data.message, redirect: true });
      } else {
        this.setState({ error: data.error || "Error al registrar usuaio." });
      }
    } catch (error) {
      this.setState({ error: "Error en al conexion con el servidor." });
    }
  };

  render() {
    const { redirect, mensaje, error } = this.state;

    if (this.state.redirect) {
      alert("Cuenta creada, verifique su correo");
      return <Navigate to="/login" />;
    }

    return (
      <div>

        <link
          href="https://maxcdn.bootstrapcdn.com/font-..."
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        ></link>
        <header className="header">
          <div className="Navbar">
            <nav>
              <img className="Iso_logo" src={Isologo} alt="Isologo" />{" "}
            </nav>
          </div>
        </header>
        <section className="Container-login">
          <div className="background-log">
            <form className="form" id="form" onSubmit={this.handleSubmit}>
              <h1 className="h1">Sing Up</h1>

              <span className="input-span">
                <label htmlFor="name" className="label">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="name"
                  onChange={this.handleChange}
                  required
                />
              </span>
              <div className="column">
                <span className="input-span">
                  <label htmlFor="email" className="label">
                    Correo
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={this.handleChange}
                    required
                  />
                </span>
                <span className="input-span">
                  <label htmlFor="password" className="label" id="password">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="contrasena"
                    id="password"
                    onChange={this.handleChange}
                    required
                  />
                </span>
              </div>
              <div className="column">
                <span className="input-span">
                  <label
                    htmlFor="confirm_password"
                    className="label"
                    id="confirm_password"
                  >
                    Repita Contraseña
                  </label>
                  <input
                    type="password"
                    name="confirmarContrasena"
                    id="confirm_password"
                    onChange={this.handleChange}
                    required
                  />
                </span>
                <span className="input-span">
                  <label htmlFor="phone" className="label">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    id="phone"
                    pattern="\d{10}"
                    onChange={this.handleChange}
                    required
                  />
                </span>
              </div>
              <button type="submit" className="submit" id="button-submit">
                Sing Up
              </button>
              {mensaje && <p>{mensaje}</p>}
              {error && <p style={{ color: "red" }}>{error}</p>}
              <span className="span">

                ¿Ya tienes una cuenta? <Link to="/login">Login</Link>
              </span>
            </form>
          </div>
        </section>
      </div>

    );
  }
}

export default SingUp;
