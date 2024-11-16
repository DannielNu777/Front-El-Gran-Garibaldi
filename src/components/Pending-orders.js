import React, { Component } from "react";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import log from "../assets/img/logo.png";
import { useState } from "react";
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addMonths from 'date-fns/addMonths';
import es from 'date-fns/locale/es';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
registerLocale("es", es);

function Pending_orders(){
    const navigate = useNavigate();
    const handleClickNewOrder = () => navigate('/new_order');
    return (
            <div>
            <header className="header">
            <div className="Navbar-order">
                    <nav>
                    <Link to="/login">
                        <img className="Iso_logo" src={Isologo} alt="Isologo" />
                    </Link>
                    <h1>Mesero Ordenes Pendientes</h1>
                    <Link to="/order_one">Atrás</Link>
                    </nav>
                </div>
            </header>
            <section className="back-pending-order">
                <div class="background-pending-order">
                    <form class="form-info-pending-order">
                                <div class='container-form1-pending-order'>
                                        <label >Mesa #1</label>
                                        <input type="text-large" name="text" id="text" />
                                        <label >Mesa #3</label>
                                        <input type="text-large" name="text" id="text" />
                                        <label >Mesa #5</label>
                                        <input type="text-large" name="text" id="text" />
                                        <label >Mesa #7</label>
                                        <input type="text-large" name="text" id="text" />
                                        <label >Mesa #9</label>
                                        <input type="text-large" name="text" id="text" />
                                        <label >Mesa #11</label>
                                        <input type="text-large" name="text" id="text" />
                                        <label >Mesa #13</label>
                                        <input type="text-large" name="text" id="text" />
                                        <label >Mesa #15</label>
                                        <input type="text-large" name="text" id="text" />
                                        <label >Mesa #17</label>
                                        <input type="text-large" name="text" id="text" />
                                </div>
                                <div class='container-form2-pending-order'>
                                        <label >Mesa #2</label>
                                        <input type="text-large" name="text" id="text" />
                                        <label >Mesa #4</label>
                                        <input type="text-large" name="text" id="text" />
                                        <label >Mesa #6</label>
                                        <input type="text-large" name="text" id="text" />
                                        <label >Mesa #8</label>
                                        <input type="text-large" name="text" id="text" />
                                        <label >Mesa #10</label>
                                        <input type="text-large" name="text" id="text" />
                                        <label >Mesa #12</label>
                                        <input type="text-large" name="text" id="text" />
                                        <label >Mesa #14</label>
                                        <input type="text-large" name="text" id="text" />
                                        <label >Mesa #16</label>
                                        <input type="text-large" name="text" id="text" />
                                        <label >Mesa #18</label>
                                        <input type="text-large" name="text" id="text" />
                                </div>
                        <div class='container-form3'>
                        </div>
                    </form>
                </div>
            </section>
            <Outlet />
        </div>
        );
}
export default Pending_orders;