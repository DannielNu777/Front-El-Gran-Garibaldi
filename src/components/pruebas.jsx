import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Appii.css"; // Importar el archivo CSS
import { Outlet } from "react-router-dom";
import { format, getDay } from 'date-fns'; // Para obtener el día de la semana y formatear la fecha

function Appii() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    // Función para filtrar las horas según el día de la semana
    const filterTime = (time) => {
        const date = new Date(time);
        const day = getDay(selectedDate || new Date()); // Obtener el día del "date picker" seleccionado
        const hour = date.getHours();

        if (day >= 1 && day <= 4) { // Lunes a Jueves
            return hour >= 12 && hour <= 20; // De 12 PM a 8 PM
        } else if (day === 5 || day === 6) { // Viernes y Sábado
            return hour >= 12 && hour <= 22 && (hour !== 22 || date.getMinutes() <= 30); // De 12 PM a 10:30 PM
        } else if (day === 0) { // Domingo
            return hour >= 12 && hour <= 17; // De 12 PM a 5 PM
        } else {
            return false;
        }
    };

    return (
        <div className="container">
            {/* DatePicker para seleccionar solo el día */}
            <div className="datepicker-wrapper">
                <h4>Seleccione la fecha:</h4>
                <DatePicker 
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="MMMM d, yyyy" // Solo mostrar la fecha
                    inline
                    locale="es"
                />
            </div>

            {/* DatePicker para seleccionar solo la hora */}
            {selectedDate && (
                <div className="datepicker-wrapper">
                    <h4>Seleccione la hora:</h4>
                    <DatePicker 
                        selected={selectedTime}
                        onChange={(time) => setSelectedTime(time)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15} // Intervalos de 15 minutos
                        filterTime={filterTime} // Filtrar las horas según el día seleccionado
                        dateFormat="h:mm aa" // Mostrar solo la hora
                        inline
                        locale="es"
                    />
                </div>
            )}

            {/* Mostrar la fecha y hora seleccionadas */}
            {selectedDate && selectedTime && (
                <div className="datepicker-wrapper">
                    <p>Fecha seleccionada: {format(selectedDate, 'MMMM d, yyyy')}</p>
                    <p>Hora seleccionada: {format(selectedTime, 'h:mm aa')}</p>
                </div>
            )}

            <Outlet />
        </div>
    );
}

export default Appii;
