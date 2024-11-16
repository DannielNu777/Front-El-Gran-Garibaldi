import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { Link, useNavigate } from "react-router-dom";
import { useReservationContext } from "./ReservationsContext.jsx";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { format, getDay } from "date-fns";
import addMonths from "date-fns/addMonths";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";

registerLocale("es", es);
const Reservations = () => {
  const navigate = useNavigate();
  const { updateReservationData } = useReservationContext();
  
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [horario_reserva, sethorario_reserva] = useState(null);
  const [cantidad_personas, setcantidad_personas] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (selectedTime) {
      const newDateTime = new Date(date);
      newDateTime.setHours(selectedTime.getHours());
      newDateTime.setMinutes(selectedTime.getMinutes());
      sethorario_reserva(newDateTime);
    }
  };
  
  const handleTimeChange = (time) => {
    setSelectedTime(time);
    if (selectedDate) {
      const newDateTime = new Date(selectedDate);
      newDateTime.setHours(time.getHours());
      newDateTime.setMinutes(time.getMinutes());
      sethorario_reserva(newDateTime);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (horario_reserva) {
      // Formatear la fecha para MySQL
      const mysqlDateTime = format(horario_reserva, "yyyy-MM-dd HH:mm:ss");
      
      // Guardar en el contexto (puedes mantener el formato original o usar el formato MySQL)
      updateReservationData({
        cantidad_personas,
        horario_reserva: mysqlDateTime // Aquí ya está en formato MySQL
      });
  
      // Navegar a la siguiente vista
      navigate('/reservations-Info');
    }
  };

  const filterTime = (time) => {
    const date = new Date(time);
    const day = getDay(selectedDate || new Date());
    const hour = date.getHours();

    if (day >= 1 && day <= 4) return hour >= 12 && hour <= 20;
    if (day === 5 || day === 6) return hour >= 12 && hour <= 22 && (hour !== 22 || date.getMinutes() <= 30);
    if (day === 0) return hour >= 12 && hour <= 17;
    return false;
  };

  return (
    <section className="Container-reservation">
      <nav>
        <Link to="/login">
          <img className="Iso_logo" src={Isologo} alt="Logo" />
        </Link>
        <div className="Reserv-cont">
          <div className="diamond-a">
            <div className="diamond-n">
              <div className="span-numb">
                <span className="span-col">2</span>
              </div>
            </div>
          </div>
          <div className="labels-cont">
            <label className="l1">Fecha Elegida</label>
            <label className="l2">Fecha Disponible</label>
            <label className="l3">No Disponible</label>
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
            onChange={handleDateChange}
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
            <option value={1}>1 persona</option>
            <option value={2}>2 personas</option>
            <option value={3}>3 personas</option>
            <option value={4}>4 personas</option>
            <option value={5}>5 persona</option>
            <option value={6}>6 personas</option>
            <option value={7}>7 personas</option>
            <option value={8}>8 personas</option>
            <option value={9}>9 persona</option>
            <option value={10}>10 personas</option>
            <option value={11}>11 personas</option>
            <option value={12}>12 personas</option>
            <option value={13}>13 personas</option>
            <option value={14}>14 personas</option>
            <option value={15}>15 personas</option>
            <option value={16}>16 personas</option>
            <option value={17}>17 personas</option>
            <option value={18}>18 personas</option>
            <option value={19}>19 personas</option>
            <option value={20}>20 personas</option>
            <option value={21}>21 personas</option>
            <option value={22}>22 personas</option>
            <option value={23}>23 personas</option>
            <option value={24}>24 personas</option>
            <option value={25}>25 personas</option>
            <option value={26}>26 personas</option>
            <option value={27}>27 personas</option>
            <option value={28}>28 personas</option>
            <option value={29}>29 personas</option>
            <option value={30}>30 personas</option>
            <option value={31}>31 personas</option>
            <option value={32}>32 personas</option>
            <option value={33}>33 personas</option>
            <option value={34}>34 personas</option>
            <option value={35}>35 personas</option>
            <option value={36}>36 personas</option>
            <option value={37}>37 personas</option>
            <option value={38}>38 personas</option>
            <option value={39}>39 personas</option>
            <option value={40}>40 personas</option>
            <option value={41}>41 personas</option>
            <option value={42}>42 personas</option>
            <option value={43}>43 personas</option>
            <option value={44}>44 personas</option>
            <option value={45}>45 personas</option>
            <option value={46}>46 personas</option>
            <option value={47}>47 personas</option>
            <option value={48}>48 personas</option>
            <option value={49}>49 personas</option>
            <option value={50}>50 personas</option>
            <option value={51}>51 personas</option>
            <option value={52}>52 personas</option>
            <option value={53}>53 personas</option>
            <option value={54}>54 personas</option>
            <option value={55}>55 personas</option>
            <option value={56}>56 personas</option>
            <option value={57}>57 personas</option>
            <option value={58}>58 personas</option>
            <option value={59}>59 personas</option>
            <option value={60}>60 personas</option>
          </select>
          <label htmlFor="selector" className="l3">
            Selecciona el Horario de tu Preferencia:
          </label>
          {selectedDate && (
            <div>
              <h4>Seleccione la hora:</h4>
              <DatePicker
                selected={selectedTime}
                onChange={handleTimeChange}
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
        <form id="external-form" className="form-input-button" onSubmit={handleSubmit}>
          <input
            className="button-continue"
            type="submit"
            value="Continuar"
          />
        </form>
      </div>  
    </section>
  );
}

export default Reservations;
