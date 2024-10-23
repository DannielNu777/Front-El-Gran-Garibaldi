import { Component } from "react";
import { Outlet } from "react-router-dom";
import Isologo from '../../src/assets/img/ISOLOGO_GARIBALDI.png';
import {Link} from "react-router-dom";
import Main_I from '../assets/img/Main_Image.png';
import Cart1 from '../assets/img/cart1.png';
import AYC from '../assets/img/ayc.png';

class cart extends Component{
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
                    <div class='main_img2'>
                        
                        <img className='Main_Image2' src ={Main_I}/>
                        <img className='img-cart1' src ={Cart1}/>
                    </div>
                    <div className='info-ayce'>
                        <div className='info-container'>
                            <div class='img-info-container'>
                                <img className='taco' src ={AYC}/>
                            </div>
                            <div class='p-info-container'>
                                <p>Restaurante con amplias y acogedoras instalaciones, inspirado en la cultura mexicana, 
                                    destacando la alta cocina tradicional, especial y típica. Ofrecemos la oportunidad de 
                                    disfrutar de shows de música en vivo, como Mariachi y Banda Regional, para celebrar todo 
                                    tipo de motivos personales, laborales o corporativos.</p>
                            </div>
                        </div>
                    </div>
                        <div className= 'contacts'>
                                <div className='zone_contacts'>
                                    <em class = 'contact'> <h6>El Gran Garibaldi</h6>
                                    Calle 8 #4-88 Factativá, Colombia </em>
                                    <span>(+57) 321 343 7191</span>
                                </div>
                                <div className='zone_contacts'>
                                    <em class = 'contact'><h6
                                >El Mariachi de Gustavo Nuñez</h6> 
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
                                <button class="button-name" role="Whatsapp">Whatsapp</button>
                                <button class="button-name" role="Instagram">Instagram</button>
                                <button class="button-name" role="TikTok">TikTok</button>
                                <button class="button-name" role="Facebook">Facebook</button>
                            </div>
                        </div>
                </section>
                <Outlet />
            </body>
        );
    }
}
export default cart;