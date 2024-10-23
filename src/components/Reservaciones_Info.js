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


function Reservaciones_Info() 
    {
        const navigate = useNavigate();
        const handleClickReservations = () => navigate('/reservations_F')
        const [startDate, setStartDate] = useState(new Date());
        const [endDate, setEndDate] = useState(null);
        const onChange = (dates) => {
        const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
        };
        
    {
    return (
        <body>
            <section class="Container-reservation">
        <nav>
                <img className="Iso_logo" src={Isologo} />{" "}
                <div class="Reserv-cont">
                    <div class="diamond-a">
                    <div class="diamond-n">
                        <div class="span-numb">
                        <span class="span-col">2</span>
                        </div>
                    </div>
                    </div>
                    <div class="labels-cont">
                        <label class="l1">Fecha Elegida</label>
                        <label class="l2">Fecha Disponible</label>
                        <label class="l3">No Disponible</label>
                    </div>
                </div>
                </nav>
            <div class="background-reservation-info">
                <form class="form-info">
                            <div class='container-form1'>
                                    <label >Nombres</label>
                                    <input type="text-large" name="text" id="text" />
                                    <label >Apellidos</label>
                                    <input type="text-large" name="text" id="text" />
                                    <label >Fecha de Nacimiento</label>
                                    <DatePicker
                                        placeholderText="Introduce tu fecha"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        peekNextMonth
                                        withPortal
                                        portalId="root-portal"
                                        showMonthDropdown
                                        showYearDropdown
                                        timeFormat="HH:mm"
                                        scale="es"
                                        isClearable
                                        form="external-form"
                                        />
                                    <label >¿Posee alguna Alergia?</label>
                                    <div className="centering-checkbox">
                                        <div className="container-checkbox">
                                        <input type="checkbox" />
                                            <label>Si</label>
                                        </div>
                                        <div className="container-checkbox">
                                        <input type="checkbox" />
                                            <label>No</label>
                                        </div>
                                    </div>
                            </div>
                            <div class='container-form2'>
                                    <label >Correo</label>
                                    <input type="email" name="email" id="email" />
                                    <label >Confirma tu Correo</label>
                                    <input type="email" name="email" id="email" />
                                    <label >Comentarios Adicionales</label>
                                    <input type="text-large" name="text" id="text" />
                                    <label >¿Que alergia posees?</label>
                                    <input type="text-large" name="text" id="text" />
                            </div>
                    <div class='container-form3'>
                        <input type="checkbox"  />
                        <label>Acepto los términos y condiciones</label>
                            <img className="Iso_logo" src={log} />{" "}
                    <form id ="external-form" className="form-input-button">
                        <input class= "button-continue" type="submit"  value="Continuar" onClick={handleClickReservations}/>
                    </form>
                    </div>
                </form>
            </div>
        </section>
        <Outlet />
        </body>
        );
    }
}
export default Reservaciones_Info;