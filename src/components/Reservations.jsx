import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { useReservationContext } from "./ReservationsContext";

import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { format, getDay } from "date-fns";
import log from "../assets/img/logo.png";
import addMonths from "date-fns/addMonths";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";

registerLocale("es", es);

function Reservations() {
  const navigate = useNavigate();
  const { reservationData, updateReservationData } = useReservationContext();

  const [selectedDate, setSelectedDate] = useState(
    reservationData.selectedDate
  );
  const [selectedTime, setSelectedTime] = useState(
    reservationData.selectedTime
  );
  const [cantidad_personas, setcantidad_personas] = useState(
    reservationData.cantidad_personas || ""
  );

  const showAlert = () => {
    alert(`
      Fecha Seleccionada: ${format(selectedDate, "MMMM d, yyyy")}
      Hora Seleccionada: ${format(selectedTime, "h:mm aa")}
      Número de Personas: ${cantidad_personas}
    `);
  };

  // Filtrar las horas según el día de la semana
  const filterTime = (time) => {
    const date = new Date(time);
    const day = getDay(selectedDate || new Date());
    const hour = date.getHours();

    if (day >= 1 && day <= 4) return hour >= 12 && hour <= 20; // Lunes a Jueves
    if (day === 5 || day === 6)
      return (
        hour >= 12 && hour <= 22 && (hour !== 22 || date.getMinutes() <= 30)
      ); // Viernes y Sábado
    if (day === 0) return hour >= 12 && hour <= 17; // Domingo
    return false;
  };

  const handleContinue = () => {
    updateReservationData({ selectedDate, selectedTime, cantidad_personas });
    navigate("/reservations-Info"); // Navegar a la siguiente vista
  };

  return (
    <section className="Container-reservation">
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
      <div className="background-reservation">
        <form className="form">
          <label htmlFor="selector" className="l3">
            Seleccione el día de reserva
          </label>
          <DatePicker
            locale="es"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MMMM d, yyyy"
            minDate={new Date()}
            maxDate={addMonths(new Date(), 5)}
            inline
            showDisabledMonthNavigation
            required
          />
          <label htmlFor="selector" className="l3">
            Selecciona la Cantidad de personas:
          </label>
          <select
            id="selector"
            value={cantidad_personas}
            onChange={(e) => setcantidad_personas(e.target.value)}
            required
          >
            <option value="1 persona">1 persona</option>
            <option value="1-5 personas">1-5 personas</option>
            <option value="5-10 personas">5-10 personas</option>
            <option value="+10 personas">+10 personas</option>
          </select>
          <label htmlFor="selector" className="l3">
            Selecciona el Horario de tu Preferencia:
          </label>
          {selectedDate && (
            <div>
              <h4>Seleccione la hora:</h4>
              <DatePicker
                selected={selectedTime}
                onChange={(time) => setSelectedTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                filterTime={filterTime}
                dateFormat="h:mm aa"
                inline
                locale="es"
                required
              />
            </div>
          )}
          {selectedDate && selectedTime && (
            <div>
              <p>Fecha seleccionada: {format(selectedDate, "MMMM d, yyyy")}</p>
              <p>Hora seleccionada: {format(selectedTime, "h:mm aa")}</p>
            </div>
          )}
        </form>
        <form id="external-form" className="form-input-button">
          <input
            class="button-continue"
            type="submit"
            value="Continuar"
            onClick={handleContinue}
          />
        </form>
      </div>
    </section>
  );
}

export default Reservations;
