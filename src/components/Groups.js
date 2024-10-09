import { Component } from "react";
import { Outlet } from "react-router-dom";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import { Link } from "react-router-dom";
import Groups_I from "../assets/img/groups-main.png";
import Groupings from "../assets/img/GARIBALDI_GROUPS.png";
import Publicity from "../assets/img/publicity.png";

class Groups extends Component {
  render() {
    return (
      <body>
        <header class="header">
          <div className="Navbar">
            <nav>
              <img className="Iso_logo" src={Isologo} />
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/body">Garibaldi</Link>
                </li>
                <li>
                  <Link to="/carta">Carta</Link>
                </li>
                <li>
                  <Link to="/shows-e-invitados">Shows e Invitados</Link>
                </li>
                <li>
                  <Link to="/groups">Agrupaciones</Link>
                </li>
                <li>
                  <Link to="/burrito">Arma tu Burrito</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <section class="container-groups-section">
          <div className="groups-img">
            <img className="groups_m" src={Groups_I} />
            <a className="home-groups">Agrupaciones de la Casa</a>
            <img className="groupings_m" src={Groupings} />
            <img className="publicity" src={Publicity} />
          </div>
          <div className="info-groups">
            <a className="info-groups-text">
              CONOCE NUESTRAS AGRUPACIONES MÚSICALES
            </a>
            <div className="groups-container"></div>
          </div>
        </section>
        <footer className="container2">
          <div className="contacts">
            <div className="zone_contacts">
              <em class="contact">
                {" "}
                <h6>El Gran Garibaldi</h6>
                Calle 8 #4-88 Factativá, Colombia{" "}
              </em>
              <span>(+57) 321 343 7191</span>
            </div>
            <div className="zone_contacts">
              <em class="contact">
                <h6>El Mariachi de Gustavo Nuñez</h6>
                Calle 8 #4-88 Factativá, Colombia{" "}
              </em>
              <span>(+57) 320 826 4863</span>
            </div>
            <div className="zone_contacts">
              <em class="contact">
                <h6>Mariachi Nueva Generación</h6>
                Calle 8 #4-88 Facatativá, Colombia
              </em>
              <span>(+57) 322 910 1664</span>
            </div>
            <div className="zone_contacts">
              <em class="contact">
                <h6>Frontera Popular</h6>
                Calle 8 #4-88 Factativá, Colombia
              </em>
              <span>(+57) 302 836 0832</span>
            </div>
          </div>
          <div className="social">
            <div className="zone_social">
              <button class="button-name" role="Whatsapp">
                Whatsapp
              </button>
              <button class="button-name" role="Instagram">
                Instagram
              </button>
              <button class="button-name" role="TikTok">
                TikTok
              </button>
              <button class="button-name" role="Facebook">
                Facebook
              </button>
            </div>
          </div>
        </footer>
        <Outlet />
      </body>
    );
  }
}
export default Groups;
