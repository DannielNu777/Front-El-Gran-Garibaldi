import React, {Component} from  'react';
import {Outlet} from "react-router-dom";
import { Navigate} from "react-router-dom";
import {Link} from "react-router-dom";
import FronteraMain from '../assets/img/MainImgFrontera.png';
import LOGOFRONTERA from '../assets/img/ISOLOGO_FRONTERA.png';
import FRONTERAI1 from '../assets/img/FronteraI1.png';
import FRONTERAI2 from '../assets/img/FronteraI2.png';
import FRONTERAI3 from '../assets/img/FronteraI3.png';
import FRONTERAI4 from '../assets/img/FronteraI4.png';
import FRONTERAI5 from '../assets/img/FronteraI5.png';
import FRONTERAI6 from '../assets/img/FronteraI6.png';

function FronteraPopular() {
            return(
                <body>
                <header>
                    <div className='mariachi-banda-main'>
                        <img className='imgMain-groups' src={FronteraMain} />
                        <img className='imgMain-groups-I' src={LOGOFRONTERA}/>
                        <a className="home-groups">FRONTERA POPULAR</a>
                        <a href="https://api.whatsapp.com/message/5N3247B74BANF1?autoload=1&app_absent=0">
                            <button className="button-mariachi-banda">COTIZA TU SERENATA</button>
                        </a>
                    </div>
                </header>
                <section>
                    <div className='nuevaG-container'>
                        <a class='title-galery'>NUESTRA GALERÍA DE SHOWS</a>
                        <div className='section-img-mariachiB'>
                            <img className='imgMain-groups' src={FRONTERAI1}/>
                            <img className='imgMain-groups' src={FRONTERAI2}/>
                            <img className='imgMain-groups' src={FRONTERAI3}/>
                            <img className='imgMain-groups' src={FRONTERAI4}/>
                            <img className='imgMain-groups' src={FRONTERAI5}/>
                            <img className='imgMain-groups' src={FRONTERAI6}/>
                        </div>
                        <div className="mariachiB-container">
                            <div className="column-mariachiB-container">
                                <div className="intern-column-mariachiB">
                                    <img className="img_mariachiB" src = {FronteraMain}/>
                                </div>
                                <h7 class='title-NUEVA'>Mariachi de 5 Integrantes</h7>
                                <p class='text-bands'>Grupo interpretado por dos trompetas,
                                    un guitarrón, una vihuela y la voz masculina. Serenata con
                                    un show de 9 canciones.
                                </p>
                                    
                            </div>
                            <div className="column-groups-space">
                            </div>

                            <div className="column-mariachiB-container">
                                <div className="intern-column-mariachiB">
                                    <img className="img_mariachiB" src = {FronteraMain}/>
                                </div>
                                <h7 class='title-NUEVA'>Mariachi de 7 Integrantes</h7>
                                <p class='text-bands'>Grupo interpretado por dos trompetas, un guitarrón, una vihuela, una guitarra
                                    puntera, acordeón y su respectiva voz masculina. Serenata con un show de 9 canciones</p>
                            </div>
                            <div className="column-groups-space">
                            </div>

                            <div className="column-mariachiB-container">
                                <div className="intern-column-mariachiB">
                                    <img className="img_mariachiB" src = {FronteraMain}/>
                                </div>
                                <h7 class='title-NUEVA'>Banda Nueva Generación</h7>
                                <p class='text-bands'>Grupo interpretado por dos trompetas, un bajo eléctrico, una batería, 
                                    una guitarra, un acordéon y su respectiva voz masculina. El Show de Banda consta de 1 hora.
                                </p>
                            </div>
                            
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
export default FronteraPopular;