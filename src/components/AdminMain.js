import React, { Component } from "react";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import log from "../assets/img/logo.png";

class AdminMain extends Component {
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
          <div className="Navbar-1">
            <nav>
              <Link to="/login">
                <img className="Iso_logo" src={Isologo} />{" "}
              </Link>
            </nav>
          </div>
        </header>
        <section class="Container-login">
          <div class="background-log">
            <form class="form">
              <Link to="/admin-users">
                <button class="l4">Usuarios</button>
              </Link>
              <button class="l4">Multimedia</button>
              <button class="l4">Comentarios</button>
              <button class="l4">Reservas</button>
            </form>
          </div>
        </section>
        <Outlet />
      </body>
    );
  }
}

export default AdminMain;
