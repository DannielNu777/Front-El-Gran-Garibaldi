import React, {Component} from  'react';
import Isologo from '../../src/assets/img/ISOLOGO_GARIBALDI.png';
import {Outlet} from "react-router-dom";
import {Link} from "react-router-dom";
import Main_I from '../assets/img/Main_Image.png';
import MariachiV from '../assets/img/mariachi_en_vivo.png';
import Luis1 from '../assets/img/luis1.png';
import Luis2 from '../assets/img/luis2.png';
import Luis3 from '../assets/img/luis3.png';
import Luis4 from '../assets/img/luis4.png';
import Luis5 from '../assets/img/luis5.png';


class Shows extends Component{
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
                                <Link to ="/body">Agrupaciones</Link>
                            </li>
                            <li>
                                <Link to ="/body">Arma tu Burrito</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='img_shows_main'>
                    <img className='Main_Image3' src ={Main_I}/>
                        <img className='mariachi_vivo' src ={MariachiV}/>
                </div>
            </header>
            <section className='container2'>
                <div className='events'>
                        <div className='luis-container'>
                                <div className='luis-cont1'>
                                    <img className='Main_Image3' src ={Luis1}/>
                                    <img className='Main_Image3' src ={Luis2}/>

                                </div>
                                <div className='luis-cont2'>
                                    <img className='Main_Image3' src ={Luis3}/>

                                </div>
                                <div className='luis-cont3'>
                                    <img className='Main_Image3' src ={Luis4}/>
                                    <img className='Main_Image3' src ={Luis5}/>
                                </div>
                        </div>

                        <div className='camd-container'>
                                <div className='camd-cont1'>
                                    <img className='Main_Image3' src ={Luis1}/>
                                    <img className='Main_Image3' src ={Luis2}/>

                                </div>
                                <div className='luis-cont2'>
                                    <img className='Main_Image3' src ={Luis3}/>

                                </div>
                                <div className='luis-cont3'>
                                    <img className='Main_Image3' src ={Luis4}/>
                                    <img className='Main_Image3' src ={Luis5}/>
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
                            <button class="button-name" role="Whatsapp">Whatsapp</button>
                            <button class="button-name" role="Instagram">Instagram</button>
                            <button class="button-name" role="TikTok">TikTok</button>
                            <button class="button-name" role="Facebook">Facebook</button>
                        </div>
                    </div>
            </section>
            <Outlet/>
            </body>
        );
    }
}

export default Shows;