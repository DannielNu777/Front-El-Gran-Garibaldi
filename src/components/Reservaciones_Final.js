import React, { Component } from "react";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import log from "../assets/img/logo.png";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Reservaciones_F(){
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
            <div class="background-reservation">
                <form class="form">
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                <label for="selector" class="l3">
                    Cantidad de personas:
                </label>
                <select id="selector" name="selector">
                    <option value="opcion1">1 persona</option>
                    <option value="opcion2">1-5 personas</option>
                    <option value="opcion3">5-10 personas</option>
                    <option value="opcion4">+10 personas</option>
                </select>
                <label for="selector" class="l3">
                    Horario:
                </label>
                <input type="text-1" name="horario" id="horario" />
                <img className="Iso_logo" src={log} />{" "}
                <h1 class="l4">Continuar</h1>
                </form>
            </div>
            </section>
            <Outlet />
        </body>
        );
    }
    }

export default Reservaciones_F;
