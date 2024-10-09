import React, { Component } from "react";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Main_I from "../assets/img/Main_Image.png";
import MariachiV from "../assets/img/mariachi_en_vivo.png";
import Luis1 from "../assets/img/luis1.png";
import Luis2 from "../assets/img/luis2.png";
import Luis3 from "../assets/img/luis3.png";
import Luis4 from "../assets/img/luis4.png";
import Luis5 from "../assets/img/luis5.png";
import Camd1 from "../assets/img/camd1.png";
import Camd2 from "../assets/img/camd2.png";
import Camd3 from "../assets/img/camd3.png";
import Camd4 from "../assets/img/camd4.png";
import Camd5 from "../assets/img/camd5.png";
import Alan1 from "../assets/img/alan1.png";
import Alan2 from "../assets/img/alan2.png";
import Alan3 from "../assets/img/alan3.png";
import Alan4 from "../assets/img/alan4.png";
import Alan5 from "../assets/img/alan5.png";
import Art1 from "../assets/img/art1.png";
import Art2 from "../assets/img/art2.png";
import Art3 from "../assets/img/art3.png";
import Art4 from "../assets/img/art4.png";
import Art5 from "../assets/img/art5.png";

class Shows extends Component {
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
                  <Link to ="/events">Eventos Privados</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <section className="background-page">
          <div class="main_img2">
            <img className="Main_Image3" src={Main_I} />
            <h2 class="ours">NOSOTROS</h2>
          </div>
          <div className="events">
            <div className="shows-container">
              <img className="shows Image1" src={Luis1} />
              <img className="shows Image2" src={Luis2} />
              <img className="shows Image3" src={Luis3} />
              <img className="shows Image4" src={Luis4} />
              <img className="shows Image5" src={Luis5} />
            </div>
            <div className="shows-container">
              <img className="shows Image1" src={Alan1} />
              <img className="shows Image2" src={Alan2} />
              <img className="shows Image3" src={Alan3} />
              <img className="shows Image4" src={Alan4} />
              <img className="shows Image5" src={Alan5} />
            </div>
            <div className="shows-container">
              <img className="shows Image1" src={Camd1} />
              <img className="shows Image2" src={Camd2} />
              <img className="shows Image3" src={Camd3} />
              <img className="shows Image4" src={Camd4} />
              <img className="shows Image5" src={Camd5} />
            </div>
            <div className="shows-container">
              <img className="shows Image1" src={Art1} />
              <img className="shows Image2" src={Art2} />
              <img className="shows Image3" src={Art3} />
              <img className="shows Image4" src={Art4} />
              <img className="shows Image5" src={Art5} />
            </div>
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
export default Shows;
