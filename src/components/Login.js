import React, { Component } from "react";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <body>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-..."
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        ></link>
        <header class="header">
          <div className="Navbar">
            <nav>
              <Link to="/login">
                <img className="Iso_logo" src={Isologo} />{" "}
              </Link>
              <Link to="/">Inicio</Link>
            </nav>
          </div>
        </header>
        <section class="Container-login">
          <div class="background-log">
            <form class="form">
              <h1 class="h1">Login</h1>
              <span class="input-span">
                <label for="email" class="label">
                  Correo
                </label>
                <input type="email" name="email" id="email" />
              </span>
              <span class="input-span">
                <label for="password" class="label">
                  Contraseña
                </label>
                <input type="password" name="password" id="password" />
              </span>
              <span class="span">
                <a href="#">¿Olvidó su contraseña?</a>
              </span>
              <Link to="/reservations" class="submit" type="submit">
                <a>Log in</a>
              </Link>
              <span class="span">
                ¿No tienes una cuenta? <Link to="/sing-up">Registrate</Link>
              </span>
            </form>
          </div>
        </section>
        <Outlet />
      </body>
    );
  }
}

export default Login;
