import React, { useEffect, useState } from "react";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import Main_I from "../assets/img/Main_Image.png";
import home_page1 from "../assets/img/home_page.png";
import logo_p from "../logo.png";
import Slider from "./Slider";
import CommentModal from "./CommentModal";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import log from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { useComent } from "./ComentContext";
import Inicio1 from "../assets/img/Inicio1.jpeg";
import Inicio2 from "../assets/img/Inicio2.jpeg";
import Inicio3 from "../assets/img/Inicio3.jpeg";
import Inicio4 from "../assets/img/Inicio4.jpeg";
import Inicio5 from "../assets/img/Inicio5.jpeg";
import Extra1 from "../assets/img/Extra1.jpeg";
import Extra2 from "../assets/img/Extra2.jpeg";
import Extra3 from "../assets/img/Extra3.jpeg";
import Extra4 from "../assets/img/Extra4.jpeg";
import Extra5 from "../assets/img/Extra5.jpeg";
import Extra6 from "../assets/img/Extra6.jpeg";

const apiURL = process.env.REACT_APP_API_URL;

const Main = () => {
  const { approvedComments, isLoading } = useComent();
  console.log("comentarios", approvedComments);
  const navigate = useNavigate();
  const handleClickR = () => navigate("/login");


  const [slider1, setSlider1] = useState([]);
  const [slider2, setSlider2] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sliderImg1 = () => {
    const images = [
      { url_foto: Inicio1 },
      { url_foto: Inicio2 },
      { url_foto: Inicio3 },
      { url_foto: Inicio4 },
      { url_foto: Inicio5 },
    ];
    setSlider1(images);
  };
  const sliderImg2 = () => {
    const images = [
      { url_foto: Extra1 },
      { url_foto: Extra2 },
      { url_foto: Extra3 },
      { url_foto: Extra4 },
      { url_foto: Extra5 },
      { url_foto: Extra6 },
    ];
    setSlider2(images);
  };

  useEffect(() => {
    const initializeData = async () => {
      sliderImg1();
      sliderImg2();
    };

    initializeData();
  }, []);

  useEffect(() => {
    console.log("Comentarios aprobados en Main:", approvedComments);
  }, [approvedComments]);

  const renderStars = (rating) => {
    return (
      <div className="stars-container">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`star ${index < rating ? "star-filled" : "star-empty"}`}
            style={{
              color: index < rating ? "gold" : "gray",
              fontSize: "20px",
            }}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

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
      <section class="Container">
        <div className="events-img-main">
          <img className="img-events-main" src={Main_I} />
          <img className="Iso_logo_main" src={log} />
          <button class="button-reservs" onClick={handleClickR}>
            Reservar
          </button>
        </div>
        <div className="zone_c">
          <div className="zone_c1">
            <h2>Zona Campestre</h2>
            <p>
              La mejor opción para compartir un café en familia, con amigos, con
              tu mascota o como lo prefieras
            </p>
          </div>
          <div className="slider-one">
            {slider1.length > 0 ? (
              <Slider images={slider1} />
            ) : (
              <div>No hay imágenes disponibles</div>
            )}
          </div>
        </div>
      </section>
      <section class="Container_2">
        <div class="home_img">
          <img className="home_page1" src={home_page1} />
          <div className="slider-overlay">
            {slider2.length > 0 ? (
              <Slider images={slider2} />
            ) : (
              <div>No hay imágenes disponibles</div>
            )}
          </div>
        </div>
      </section>
      <section class="knowledge_container">
        <div class="homemade">
          <div class="knowledge_texts">
            <h2 class="subtitle1">COCINA ARTESANAL MEXICANA</h2>
            <em class="paragraph">
              Nuestra cocina artesanal mexicana se distingue por la cuidadosa
              selección de ingredientes frescos y la dedicación a técnicas
              culinarias centenarias. Cada platillo es una obra maestra que
              refleja la diversidad de sabores, colores y texturas que
              caracterizan la cocina mexicana.Desde los aromáticos guisos hasta
              las vibrantes salsas y los deliciosos antojitos, cada receta se
              elabora con pasión y autenticidad, transportándote directamente a
              los mercados y cocinas caseras de México. Nuestro equipo de chefs
              expertos trabaja incansablemente para ofrecer una experiencia
              gastronómica que resalta la autenticidad y la riqueza cultural de
              la cocina mexicana.
            </em>
          </div>
          <figure class="home_img1">
            <img className="img_container" src={home_page1} />
          </figure>
        </div>
        <div className="comments">
          <h3>COMENTARIOS DE NUESTROS CLIENTES</h3>
          <img className="Iso_logo" src={logo_p} alt="Logo" />
          <button
            className="user-details-button"
            onClick={() => setIsModalOpen(true)}
          >
            Realiza tu comentario
          </button>
          <CommentModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

          <div className="zone_comments">
            {isLoading ? (
              <div className="loading">Cargando comentarios...</div>
            ) : Array.isArray(approvedComments) &&
              approvedComments.length > 0 ? (
              approvedComments.map((comment) => (
                <div className="comment" key={comment.id_comentario}>
                  <div className="comment-header">
                    {comment.titulo && (
                      <h4 className="label-1">{comment.titulo}</h4>
                    )}
                    {comment.calificacion > 0 && (
                      <div className="stars">
                        {renderStars(comment.calificacion)}
                      </div>
                    )}
                  </div>
                  <em className="h3_c">{comment.comentario}</em>
                  {comment.fecha_comentario && (
                    <p className="comment-date">
                      {new Date(comment.fecha_comentario).toLocaleDateString(
                        "es-ES",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <div className="no-comments">
                <p>No hay comentarios disponibles en este momento</p>
              </div>
            )}
          </div>
        </div>
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
        <Outlet />
      </section>
    </body>
  );
};

export default Main;
