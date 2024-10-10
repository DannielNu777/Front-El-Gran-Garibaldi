import React, { Component } from "react";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

class SingUp extends Component {
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
              <img className="Iso_logo" src={Isologo} />{" "}
            </nav>
          </div>
        </header>
        <section class="Container-login">
          <div class="background-log">
            <form class="form">
              <h1 class="h1">Sing Up</h1>

              <span class="input-span">
                <label for="name" class="label">
                  Nombre
                </label>
                <input type="text" name="name" id="name" />
              </span>
              <div class="column">
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
              </div>
              <div class="column">
                <span class="input-span">
                  <label for="phone" class="label">
                    Telefono
                  </label>
                  <input type="text" name="phone" id="phone" />
                </span>
                <span class="input-span">
                  <label for="password" class="label">
                    Repita Contraseña
                  </label>
                  <input type="password" name="password" id="password" />
                </span>
              </div>
              <Link to="/login" class="submit" type="submit">
                <a>Sing Up</a>
              </Link>
              <span class="span">
                ¿Ya tienes una cuenta? <Link to="/login">Login</Link>
              </span>
            </form>
          </div>
        </section>
        <Outlet />
      </body>
    );
  }
}

export default SingUp;
