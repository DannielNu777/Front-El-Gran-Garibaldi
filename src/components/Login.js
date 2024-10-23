import React, { Component } from "react";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import { Outlet } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const apiURL = process.env.REACT_APP_API_URL;

const Login = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Manejar el cambio de los inputs
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, contrasena: password }),
        }
      );
      
      const data = await response.json();

      if (response.ok) {
        console.log(data);
        localStorage.setItem("token", data.token);

        switch (data.rol) {
          case "Administrador":
            navigate("/admin-main");
            break;
          case "default":
            navigate("/events");
            break;
          default:
            navigate("/");
        }
      } else {
        alert(data.error || "Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error en la conexión con la API", error);
      alert("Error de conexión con el servidor");


    }
  };

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
        <div className="background-log">
          <form className="form" onSubmit={handleSubmit}>
            <h1 className="h1">Login</h1>
            <span className="input-span">
              <label htmlFor="email" className="label">
                Correo
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </span>
            <span className="input-span">
              <label htmlFor="password" className="label">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </span>
            <span className="span">
              <a href="#">¿Olvidó su contraseña?</a>
            </span>

            <button className="submit" type="submit">
              Log in
            </button>

            <span className="span">
              ¿No tienes una cuenta? <Link to="/sing-up">Registrate</Link>
            </span>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;

