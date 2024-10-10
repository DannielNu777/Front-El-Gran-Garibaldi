import React, { Component } from "react";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import log from "../assets/img/logo.png";

class Reservations extends Component {
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
              <img className="Iso_logo" src={Isologo} />{" "}
              <div class="Reserv-cont">
                <div class="diamond-a">
                  <div class="diamond-n">
                    <div class="span-numb">
                      <span class="span-col">1</span>
                    </div>
                  </div>
                </div>
                <div class="labels-cont">
                  <label class="l1">Fecha Elegida</label>
                  <label class="l2">Fecha Disponible</label>
                  <label class="l3">No Disponible</label>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <section class="Container-login">
          <div class="background-log">
            <form class="form">
              <div class="calendar">
                <div class="mes">Octubre</div>
                <div class="dias-l-1">L</div>
                <div class="dias-l-2">M</div>
                <div class="dias-l-3">M</div>
                <div class="dias-l-4">J</div>
                <div class="dias-l-5">V</div>
                <div class="dias-l-6">S</div>
                <div class="dias-l-7">D</div>
                <div class="dia-1">1</div>
                <div class="dia-2">2</div>
                <div class="dia-3">3</div>
                <div class="dia-4">4</div>
                <div class="dia-5">5</div>
                <div class="dia-6">6</div>
                <div class="dia-7">7</div>
              </div>
              <label for="selector" class="l3">
                Cantidad de personas:
              </label>
              <select id="selector" name="selector">
                <option value="opcion1">1 persona</option>
                <option value="opcion2">1-5 personas</option>
                <option value="opcion3">5-10 personas</option>
                <option value="opcion4">+10 personas</option>
              </select>
              <label for="selector" class="l3">
                Horario:
              </label>
              <input type="text-1" name="horario" id="horario" />
              <img className="Iso_logo" src={log} />{" "}
              <h1 class="l4">Continuar</h1>
            </form>
          </div>
        </section>
        <Outlet />
      </body>
    );
  }
}

export default Reservations;
