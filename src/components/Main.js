import React, {Component} from  'react';
import Isologo from '../../src/assets/img/ISOLOGO_GARIBALDI.png';
import Main_I from '../assets/img/Main_Image.png';
import home_page1 from '../assets/img/home_page.png';
import logo_p from '../logo.png';
import {Outlet} from "react-router-dom";
import {Link} from "react-router-dom";

class Main extends Component{
    render(){
        return( 
          
      <body>  
        <link href="https://maxcdn.bootstrapcdn.com/font-..." rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
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
          </header>
          <section class = 'Container'>
            <div class='main_img'>
              <img className='Main_Image' src ={Main_I}/>
            </div>
            <div className= 'zone_c'>
              <h2>Zona Campestre</h2>
                <div className='zone_c2'>
                  <h3>SLIDER DE IMAGENES</h3>
                </div>
            </div>
          </section>
          <section class = 'Container_2'>
            <div class='home_img'>
              <img className='home_page1' src ={home_page1}/>
            </div>
            
          </section>
          <section class="knowledge_container">
            <div class="knowledge_cont">
                <div class="homemade">
                      <div class="knowledge_texts">
                        <h2 class="subtitle1">COCINA ARTESANAL MEXICANA</h2>
                        <em class="paragraph">Nuestra cocina artesanal mexicana se distingue por la cuidadosa 
                          selección de ingredientes frescos y la dedicación a técnicas culinarias centenarias. 
                          Cada platillo es una obra maestra que refleja la diversidad de sabores, colores y texturas 
                          que caracterizan la cocina mexicana.Desde los aromáticos guisos hasta las vibrantes salsas 
                          y los deliciosos antojitos, cada receta se elabora con pasión y autenticidad, transportándote 
                          directamente a los mercados y cocinas caseras de México. Nuestro equipo de chefs expertos trabaja 
                          incansablemente para ofrecer una experiencia gastronómica que resalta la autenticidad y la riqueza 
                          cultural de la cocina mexicana.</em>
                      </div>
                    <div className='home_img1'>
                            <figure class="home_made1">
                              <img className='img_container' src={home_page1}/>
                            </figure>
                    </div>
                  </div>
                  <div className= 'comments'>
                      <h3>COMENTARIOS DE NUESTROS CLIENTES</h3>
                      <img className='logo_p'  src = {logo_p} />
                        <div className='zone_comments'>
                            <em className='h3_c'>Hay mariachi todos los días!!! Fui un lunes en la noche de 
                            aniversario de bodas con mi esposo, la comida deliciosa, buena 
                            atención, nos cantaron, nos obsequiaron postre y todo</em>
                            <h5 class='item1'>Paula Betancur</h5>
                            <p>Google Maps</p>
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
              </div>
              
                <Outlet />
            </section>
      </body>
      );
    }
}

export default Main;