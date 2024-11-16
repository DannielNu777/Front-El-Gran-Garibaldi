import React, {Component} from  'react';
import {Outlet} from "react-router-dom";
import { Navigate} from "react-router-dom";
import {Link} from "react-router-dom";
import MariachiObanda from '../assets/img/MariachiBanda.png';
import MariachiObandaI from '../assets/img/GUSTAVO_NUÑEZ_M.png';
import MariachiObandaI1 from '../assets/img/mariachiB1.png';
import MariachiObandaI2 from '../assets/img/mariachiB2.png';
import MariachiObandaI3 from '../assets/img/mariachiB3.png';
import MariachiObandaI4 from '../assets/img/mariachiB4.png';
import MariachiObandaI5 from '../assets/img/mariachiB5.png';
import MariachiObandaI6 from '../assets/img/mariachiB6.png';
import ImgGustavo from '../assets/img/Gustavo.png';
import ImgJhosep from '../assets/img/Jhosep.png';
import ImgCristian from '../assets/img/Cristian.png';

function MariachiBanda() {
            return(
            <body>
                <header>
                    <div className='mariachi-banda-main'>
                        <img className='imgMain-groups' src={MariachiObanda}/>
                        <img className='imgMain-groups-I' src={MariachiObandaI}/>
                        <a className="home-groups">¿BANDA O MARIACHI?</a>
                        <button className="button-mariachi-banda">COTIZA TU SERENATA</button>
                    </div>
                </header>
                <section>
                    <div className='mariachiBanda-container'>
                        <a class='title-galery'>NUESTRA GALERÍA DE SHOWS</a>
                        <div className='section-img-mariachiB'>
                            <img className='imgMain-groups' src={MariachiObandaI1}/>
                            <img className='imgMain-groups' src={MariachiObandaI2}/>
                            <img className='imgMain-groups' src={MariachiObandaI3}/>
                            <img className='imgMain-groups' src={MariachiObandaI4}/>
                            <img className='imgMain-groups' src={MariachiObandaI5}/>
                            <img className='imgMain-groups' src={MariachiObandaI6}/>
                        </div>
                        <div className="mariachiB-container">
                            <div className="column-mariachiB-container">
                                <div className="intern-column-mariachiB">
                                    <img className="img_mariachiB" src = {ImgGustavo}/>
                                </div>
                                <h7 class='title-h7'>Gustavo Nuñez</h7>
                                <p class='text-bands'>Apasionado intérprete de la esencia mexicana.
                                    Su voz recorre los paisajes de la música ranchera, 
                                    se sumerge en los ritmos vibrantes de la banda y se 
                                    eleva en las melodías populares.</p>
                                    
                            </div>
                            <div className="column-groups-space">
                            </div>

                            <div className="column-mariachiB-container">
                                <div className="intern-column-mariachiB">
                                    <img className="img_mariachiB" src = {ImgJhosep}/>
                                </div>
                                <h7 class='title-h7'>Jhosep Ramirez</h7>
                                <p class='text-bands'>Explorador de emociones a través de la música.
                                    Desde la intensidad de la ranchera hasta la fiesta 
                                    de la banda y los éxitos populares, su voz es el puente 
                                    que conecta corazones.</p>
                            </div>
                            <div className="column-groups-space">
                            </div>

                            <div className="column-mariachiB-container">
                                <div className="intern-column-mariachiB">
                                    <img className="img_mariachiB" src = {ImgCristian}/>
                                </div>
                                <h7 class='title-h7'>Cristian Mendez</h7>
                                <p class='text-bands'>Explorando las vastas llanuras de la música ranchera, 
                                    su voz es el eco de la tradición y la 
                                    pasión que laten en cada acorde.</p>
                            </div>
                            
                        </div>
                        <a class='title-video'>NUESTRA MÚSICA</a>
                        <div className='hechicera-video'>
                            <iframe width="1200" height="700" src="https://www.youtube.com/embed/XdAjFc8cD9Q?si=79Affv-Aa_NRQ6Gx" 
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                            gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                            </iframe>
                        </div>  
                    </div>
                </section>
                <footer className='container2'>
                <div className= 'contacts'>
                        <div className='zone_contacts'>
                            <em class = 'contact'> <h6>El Gran Garibaldi</h6>
                            Calle 8 #4-88 Factativá, Colombia </em>
                            <span>(+57) 321 343 7191</span>
                        </div>
                        <div className='zone_contacts'>
                            <em class = 'contact'><h6>El Mariachi de Gustavo Nuñez</h6> 
                            Calle 8 #4-88 Factativá, Colombia </em>
                            <span>(+57) 320 826 4863</span>
                        </div>
                        <div className='zone_contacts'>
                            <em class = 'contact'><h6>Mariachi Nueva Generación</h6>
                            Calle 8 #4-88 Facatativá, Colombia</em>
                            <span>(+57) 322 910 1664</span>
                        </div >
                        <div className='zone_contacts'> 
                            <em class = 'contact'><h6>Frontera Popular</h6>
                            Calle 8 #4-88 Factativá, Colombia</em>
                            <span>(+57) 302 836 0832</span>
                        </div>
                    </div>
                    <div className= 'social'>
                        <div className='zone_social'>
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
                </footer>
            <Outlet />
            </body>
        );
}
export default MariachiBanda;
