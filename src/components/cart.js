import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import { Link } from "react-router-dom";
import Main_I from "../assets/img/Main_Image.png";
import Cart1 from "../assets/img/cart1.png";
import AYC from "../assets/img/ayc.png";
import Slider from "./Slider";
import MenuPrincipal1 from "../assets/img/Menu_Principal.png";
import MenuPrincipal2 from "../assets/img/Menu_Principal2.png";
import Comida1 from "../assets/img/Comidas1.png";
import Comida2 from "../assets/img/Comidas2.png";
import Comida3 from "../assets/img/Comidas3.png";
import Comida4 from "../assets/img/Comidas4.png";
import Comida5 from "../assets/img/Comidas5.png";
import Comida6 from "../assets/img/Comidas6.png";
import Comida7 from "../assets/img/Comidas7.png";
import Comida8 from "../assets/img/Comidas8.png";
import Bebida1 from "../assets/img/Bebidas1.png";
import Bebida2 from "../assets/img/Bebidas1.png";
import Licor1 from "../assets/img/Licores1.png";
import Licor2 from "../assets/img/Licores2.png";

const Cart = () => {
  const [slider, setSlider] = useState([]);

  const sliderImg = () => {
    const images = [
      { url_foto: MenuPrincipal1 },
      { url_foto: Comida1 },
      { url_foto: Comida2 },
      { url_foto: Comida3 },
      { url_foto: Comida4 },
      { url_foto: Comida5 },
      { url_foto: Comida6 },
      { url_foto: Comida7 },
      { url_foto: Comida8 },
      { url_foto: Bebida1 },
      { url_foto: Bebida2 },
      { url_foto: Licor1 },
      { url_foto: Licor2 },
      { url_foto: MenuPrincipal2 },
    ];
    setSlider(images);
  };

  useEffect(() => {
    sliderImg();
  }, []);

  return (
    <body>
      <header className="header">
        <div className="Navbar">
          <nav>
            <img className="Iso_logo" src={Isologo} alt="Isologo" />
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
                <Link to="/events">Eventos Privados</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section>
        <div className="main_img2">
          <div className="image-container">
            <img className="Main_Image2" src={Main_I} alt="Main Image" />
            <div className="slider-overlay">
              {slider.length > 0 ? (
                <Slider images={slider} />
              ) : (
                <div>No hay imágenes disponibles</div>
              )}
            </div>
          </div>
        </div>
        <div className="info-ayce">
          <div className="info-container">
            <div className="img-info-container">
              <img className="taco" src={AYC} alt="AYC" />
            </div>
            <div className="p-info-container">
              <p>
                Restaurante con amplias y acogedoras instalaciones, inspirado en
                la cultura mexicana, destacando la alta cocina tradicional,
                especial y típica. Ofrecemos la oportunidad de disfrutar de
                shows de música en vivo, como Mariachi y Banda Regional, para
                celebrar todo tipo de motivos personales, laborales o
                corporativos.
              </p>
            </div>
          </div>
        </div>
        <div className="contacts">
          <div className="zone_contacts">
            <em className="contact">
              <h6>El Gran Garibaldi</h6>
              Calle 8 #4-88 Factativá, Colombia
            </em>
            <span>(+57) 321 343 7191</span>
          </div>
          <div className="zone_contacts">
            <em className="contact">
              <h6>El Mariachi de Gustavo Nuñez</h6>
              Calle 8 #4-88 Factativá, Colombia
            </em>
            <span>(+57) 320 826 4863</span>
          </div>
          <div className="zone_contacts">
            <em className="contact">
              <h6>Mariachi Nueva Generación</h6>
              Calle 8 #4-88 Facatativá, Colombia
            </em>
            <span>(+57) 322 910 1664</span>
          </div>
          <div className="zone_contacts">
            <em className="contact">
              <h6>Frontera Popular</h6>
              Calle 8 #4-88 Factativá, Colombia
            </em>
            <span>(+57) 302 836 0832</span>
          </div>
        </div>

        <div className="social">
          <div className="zone_social">
            <a href="https://api.whatsapp.com/message/GJGBGEYF53W7B1?autoload=1&app_absent=0">
                    <button class="button-name" role="button">
                        WhatsApp
                    </button>
                </a>

                <a href="https://www.instagram.com/elgrangaribaldi?igsh=MWhmYmxsOW5odHNteg==">
                  <button class="button-name" role="Instagram">
                    Instagram
                  </button>
                </a>

                <a href="https://www.tiktok.com/@elgrangaribaldi?_t=8rOwZr1Ov7o&_r=1">
                  <button class="button-name" role="TikTok">
                    TikTok
                  </button>
                </a>

                <a href="https://www.facebook.com/ElGranGaribaldi">
                  <button class="button-name" role="Facebook">
                    Facebook
                  </button>
                </a>
          </div>
        </div>
      </section>
      <Outlet />
    </body>
  );
};

export default Cart;
