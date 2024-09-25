import { Component } from "react";
import { Outlet } from "react-router-dom";
import Isologo from '../../src/assets/img/ISOLOGO_GARIBALDI.png';
import {Link} from "react-router-dom";

class Burrito extends Component{
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
                            <Link to ="/burrito">Arma tu Burrito</Link>
                        </li>
                        </ul>
                    </nav>
                </div>
                </header>
                <Outlet />
            </body>




        );
    }
}

export default Burrito;