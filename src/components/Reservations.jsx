import React, { Component } from "react";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import log from "../assets/img/logo.png";
import { useState } from "react";
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';

import addMonths from 'date-fns/addMonths';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
registerLocale("es", es);


function Reservations() {
  const navigate = useNavigate();
  const handleClickReservations = () => navigate('/reservations_Info')

        const [startDate, setStartDate] = useState(new Date());
        const [endDate, setEndDate] = useState(null);
        const onChange = (dates) => {
        const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
        };
        const [selected, setSelected] = useState(new Date());

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

              <DatePicker 
                showIcon
                locale="es"
                selected={startDate}
                onChange={onChange}
                minDate={new Date()}
                maxDate={addMonths(new Date(), 5)}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                showDisabledMonthNavigation

              />
              <label for="selector" class="l3">
                Selecciona la Cantidad de personas:
              </label>
              <select id="selector" name="selector">
                <option value="opcion1">1 persona</option>
                <option value="opcion2">1-5 personas</option>
                <option value="opcion3">5-10 personas</option>
                <option value="opcion4">+10 personas</option>
              </select>
              <label for="selector" class="l3">
                Selecciona el Horario de tu Preferencia:
              </label>

                <DatePicker 
                  selected={selected}
                  onChange={(date) => setSelected(date)}        
                  showTimeSelect
                  showTimeSelectOnly
                  dateFormat="h:mm aa"
                  timeIntervals={15}
                  showTimeCaption={true}
                />
              <img className="Iso_logo" src={log} />{" "}
              <form id ="external-form" className="form-input-button">
                  <input class= "button-continue" type="submit"  value="Continuar" onClick={handleClickReservations}/>
              </form>

            </form>
          </div>
        </section>
        <Outlet />
      </body>
    );
  }
}
export default Reservations;
