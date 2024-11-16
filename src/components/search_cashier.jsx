import React from 'react'; 
import { Outlet } from "react-router-dom";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import { Link, useNavigate } from "react-router-dom";

function Search_Cashier(){
    return(
        <body>
            <header className='header-order'>
                <div className="Navbar-order">
                    <nav>
                    <Link to="/login">
                        <img className="Iso_logo" src={Isologo} alt="Isologo" />
                    </Link>
                    <h1>Mesero Nueva Orden</h1>
                    <Link to="/order_one">Atrás</Link>
                    </nav>
                </div>
            </header>
            <section className='Container-order-all'>
                <div classname='section-order2'>
                <div className="background-log-order2">
                            <div class='container-form1'>
                                <div className='section-order1'>
                                        <label>MESA #</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                        />
                                        <div class="cajabuscar">
                                            <form method="get" id="buscarform">
                                            <fieldset>
                                                <input type="text" id="s" value="" placeholder="Buscar"  />
                                                <input class="button" type="submit" value="" />
                                                <i class="search"></i>
                                            </fieldset>
                                            </form>
                                </div>
                                </div>
                                        <label >PEDIDO GENERAL</label>
                                        <input type="text-large" name="text" id="text" value="Totopos"/>
                                        <input type="text-large" name="text" id="text" value="Totopos"/>
                                </div>
                                <div class='container-form2'>
                                        <input type="text-large" name="text" id="text" value="Totopos"/>
                                        <input type="text-large" name="text" id="text" value="Totopos"/>
                                        <input type="text-large" name="text" id="text" value="Totopos"/>
                                        <input type="text-large" name="text" id="text" value="Totopos"/>
                                </div>
                                <form id ="external-form" className="form-input-button-order">
                                    <input class= "button-continue" type="submit"  value="Hacer Pedido" />
                                </form>
                    </div>
                    </div>
                <div classname ='section-order3'>
                </div>
            </section>
        <Outlet />
        </body>
    );
}
export default Search_Cashier;