import { Component } from "react";
import { Outlet } from "react-router-dom";
import Isologo from '../../src/assets/img/ISOLOGO_GARIBALDI.png';
import {Link} from "react-router-dom";
import MainEvent from '../assets/img/Events-main-img.png';
import PrivateE from '../assets/img/private-events-main.png';
import ImgE1 from '../assets/img/event-img1.png';
import ImgE2 from '../assets/img/event-img2.png';
import ImgE3 from '../assets/img/event-img3.png';
import ImgE4 from '../assets/img/restaurant1.png';
import ImgE5 from '../assets/img/restaurant2.png';
import ImgE6 from '../assets/img/restaurant3.png';

class Events extends Component{
    render(){
        return(
            <body>
                <header class='header'> 
                <div className='Navbar'>
                    <nav>
                            <img className = 'Iso_logo' src={Isologo}/>
                        <ul>
                        <li>
                            <Link to ="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to ="/body">Garibaldi</Link>
                        </li>
                        <li>
                            <Link to ="/carta">Carta</Link>
                        </li>
                        <li>
                            <Link to ="/shows-e-invitados">Shows e Invitados</Link>
                        </li>
                        <li>
                            <Link to ="/groups">Agrupaciones</Link>
                        </li>
                        <li>
                            <Link to ="/events">Eventos Privados</Link>
                        </li>
                        </ul>
                    </nav>
                </div>
                </header>
                <section>
                    <div className="events-img-main">
                        <img className='img-events-main' src ={MainEvent}/>
                        <img className='img-private-events' src ={PrivateE}/>
                        <em class='text-events'>Deja en nuestras manos tus fechas especiales</em>
                        <a href="https://api.whatsapp.com/message/GJGBGEYF53W7B1?autoload=1&app_absent=0">
                            <button class="button-events">COTIZA TU EVENTO</button>
                        </a>
                    </div>

                    <div className="events-container">
                        
                        <em class = 'text-event'>Nos Adaptamos a ti y a Todas tus Celebraciones</em>
                        
                        <div className="container-img-events" >
                            <img className ='images-events' src ={ImgE1}/>
                        </div>
                        <em class = 'text-event'>Tus Grados</em>
                        
                        <div className="container-img-events">
                            <img className='images-events' src ={ImgE2}/>
                        </div>
                        <em class = 'text-event'>Tus Quince Años</em>

                        <div className="container-img-events">
                            <img className='images-events' src ={ImgE3}/>
                        </div>
                        <div className="characteristics">
                            <div className="column-groups-container">
                                <div className="intern-column-event">
                                    <img className="img_G" src = {ImgE4}/>
                                </div>
                                <p>Contamos con un protocolo ejemplar para atender a tus eventos de una manera elegante 
                                    especial, tal cual cómo tú te lo mereces.</p>
                            </div>

                            <div className="column-groups-container">
                                <div className="intern-column-event">
                                    <img className="img_NG" src = {ImgE5}/>
                                </div>
                                <p>Contamos con maravillosas decoraciones dignas para tu ocasión especial, perfectas
                                    para tus familiares y más allegados, Quince años, Bautizo, Despedidas y un largo etcétera.
                                    Ven y disfruta con Nosotros.</p>
                            </div>

                            <div className="column-groups-container">
                                <div className="intern-column-event">
                                    <img className="img_F" src = {ImgE6}/>
                                </div>
                                <p>El lugar ideal para vivir el mejor día de tu vida ✨</p>
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
}

export default Events;