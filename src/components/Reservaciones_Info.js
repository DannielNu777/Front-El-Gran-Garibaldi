import React, { useState } from "react";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import { Outlet, useNavigate } from "react-router-dom";
import log from "../assets/img/logo.png";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import { useReservationContext } from "./ReservationsContext"; // Asegúrate de que la ruta es correcta

registerLocale("es", es);

function Reservaciones_Info() {
    const navigate = useNavigate();
    const { updateReservationData } = useReservationContext(); // Obtener la función para actualizar el contexto

    const [startDate, setStartDate] = useState(new Date());
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [comentarios_adicionales, setcomentarios_adicionales] = useState('');
    const [allergy, setAllergy] = useState('');
    const [hasAllergy, setHasAllergy] = useState(false);

        const handleContinue = (e) => {
            e.preventDefault();
        
            // Display the data in an alert
            alert(`
            Start Date: ${startDate.toLocaleDateString()}
            First Name: ${firstName}
            Last Name: ${lastName}
            Email: ${email}
            Confirm Email: ${confirmEmail}
            comentarios_adicionales: ${comentarios_adicionales}
            Allergy: ${allergy}
            Has Allergy: ${hasAllergy}
            `);
        
            // Update reservation data (assuming this is your original intent)
            updateReservationData({
            startDate,
            firstName,
            lastName,
            email,
            confirmEmail,
            comentarios_adicionales,
            allergy,
            hasAllergy
            });


        navigate('/reservations_F'); // Navegar a la siguiente vista
    };

    return (
        <section className="Container-reservation">
            <nav>
                <img className="Iso_logo" src={Isologo} alt="Isologo" />
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
            <div className="background-reservation-info">
                <form className="form-info" onSubmit={handleContinue}>
                    <div className='container-form1'>
                        <label>Nombres</label>
                        <input type="text-large" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <label>Apellidos</label>
                        <input type="text-large" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        <label>Fecha de Nacimiento</label>
                        <DatePicker
                            placeholderText="Introduce tu fecha"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            dateFormat="dd/MM/yyyy"
                            locale="es"
                            isClearable
                        />
                        <label>¿Posee alguna Alergia?</label>
                        <div className="centering-checkbox">
                            <div className="container-checkbox">
                                <input type="checkbox" checked={hasAllergy} onChange={() => setHasAllergy(!hasAllergy)} />
                                <label>Si</label>
                            </div>
                            <div className="container-checkbox">
                                <input type="checkbox" checked={!hasAllergy} onChange={() => setHasAllergy(false)} />
                                <label>No</label>
                            </div>
                        </div>
                    </div>
                    <div className='container-form2'>
                        <label>Correo</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Confirma tu Correo</label>
                        <input type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
                        <label>Comentarios Adicionales</label>
                        <input type="text-large" value={comentarios_adicionales} onChange={(e) => setcomentarios_adicionales(e.target.value)} />
                        <label>¿Qué alergia posees?</label>
                        <input type="text-large" value={allergy} onChange={(e) => setAllergy(e.target.value)} />
                    </div>
                    <div className='container-form3'>
                        <input type="checkbox" required />
                        <label>Acepto los términos y condiciones</label>
                        <img className="Iso_logo" src={log} alt="Logo" />
                    </div>
                    <form id ="external-form" className="form-input-button-info">
                        <input className="button-continue" type="submit" value="Continuar" 
                        onClick={handleContinue}/>
                        
                    </form>
                </form>
            </div>
            <Outlet />
        </section>
    );
}

export default Reservaciones_Info;
