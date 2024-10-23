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
                        <span class="span-col">3</span>
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
            <div class="background-reservation-final">
                <form class="form-reservations-final">
                        <label for="selector" class="l3">
                            ¿Dentro de tus acompañantes hay algún niño?
                        </label>
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
                        <label for="selector" class="l3">
                            Indicanos la media de edad(es)
                        </label>
                        <div className="centering-checkbox">
                                        <div className="container-checkbox">
                                        <input type="checkbox" />
                                            <label>2 - 6 Años</label>
                                        </div>
                                        <div className="container-checkbox">
                                        <input type="checkbox" />
                                            <label>4 - 8 Años</label>
                                        </div>
                                        <div className="container-checkbox">
                                        <input type="checkbox" />
                                            <label>8 - 12 años</label>
                                        </div>
                                        <div className="container-checkbox">
                                        <input type="checkbox" />
                                            <label>12 - 16 Años</label>
                                        </div>
                        </div>
                        <label className="information-count">
                            Información a Tener en Cuenta 
                        </label>
                        <div className="form-container-info-final">
                            <div class="container-info-final-1">
                                <p>La presente reservación no tiene nigún costo, el único costo que se tiene en cuenta es si desea adquirir 
                                    la decoración de su preferencia. La reserva le asegura el ingreso al restaurante,
                                    sin embargo su mesa la asignan los Hostess el día de su asistencia según el orden logístico en el que hayan
                                    ingresado cada reserva de manera general.
                                </p>
                            </div>
                            <div class="container-info-final-2">
                                <label>
                                    ¿Que Motivo es tu Reserva?
                                </label>
                                <select id="selector" name="selector">
                                    <option value="opcion1">Cumpleaños Para Hombre</option>
                                    <option value="opcion2">Cumpleaños Para Mujer</option>
                                    <option value="opcion3">Cumpleaños Mixto</option>
                                    <option value="opcion4">Grado</option>
                                    <option value="opcion5">Aniversario</option>
                                    <option value="opcion6">Despedida de Soltero</option>
                                    <option value="opcion7">Despedida de Soltera</option>
                                    <option value="opcion8">Despedida de Viaje/Pais</option>
                                    <option value="opcion9">Ninguno</option>
                                </select>
                            </div>
                        </div>
                        <div className="decoration-container">
                            <p>Cada decoración a reserva consta de Mantelería propia del motivo de su reserva, 
                            feston con globos y postre (Cremoso de arequipe) para el/la/los homenajead@(s) y la mejor atención y experiencia
                            para toda tu familia.
                            </p>
                        </div>
                        <label for="selector" class="l3">
                            ¿Deseas incluir la decoración para tu reserva y fecha especial?
                        </label>
                    <div className="container-centering-checkbox">
                        <div className="centering-checkbox-footer">
                            <div className="container-checkbox">
                                        <input type="checkbox" />
                                            <label>Si</label>
                                        </div>
                                        <div className="container-checkbox">
                                        <input type="checkbox" />
                                            <label>No</label>
                                        </div>
                        </div>
                        <img className="Iso_logo" src={log} />{" "}
                        <form id ="external-form" className="form-input-button">
                            <input class= "button-continue" type="submit"  value="Reservar"/>
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

export default Reservaciones_F;
