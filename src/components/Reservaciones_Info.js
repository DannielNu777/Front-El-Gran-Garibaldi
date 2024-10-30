import React, { Component } from "react";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import log from "../assets/img/logo.png";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Reservaciones_Info() {
    const [startDate, setStartDate] = useState(new Date());

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
                        <span class="span-col">1</span>
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
                            <label >Nombre</label>
                            <input type="text-1" name="horario" id="horario" />
                            <label >Apellido</label>
                            <input type="text-1" name="horario" id="horario" />
                            <label >Apellido</label>
                            <input type="text-1" name="horario" id="horario" />
                            <input type="text-1" name="horario" id="horario" />
                            <label >¿Posee alguna Alergia?</label>
                            <input type="checkbox" />
                                <label>Si</label>
                            <input type="checkbox" />
                                <label>No</label>
                    </div>
                    <div class='container-form2'>
                            <label >Correo</label>
                            <input type="text-1" name="horario" id="horario" />
                            <label >Confirma tu Correo</label>
                            <input type="text-1" name="horario" id="horario" />
                            <label >Comentarios Adicionales</label>
                            <input type="text-1" name="horario" id="horario" />
                            <label >¿Cual?</label>
                            <input type="text-1" name="horario" id="horario" />
                    </div>
                    <div class='container-form3'>
                        <input type="checkbox"  />
                        <label>Acepto los términos y condiciones</label>
                            <img className="Iso_logo" src={log} />{" "}
                            <h1 class="l4">Continuar</h1>
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
