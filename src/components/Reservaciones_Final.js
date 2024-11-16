import React, { useState } from "react";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import log from "../assets/img/logo.png";
import { useReservationContext } from "./ReservationsContext.jsx";
import { useNavigate } from "react-router-dom";

const Reservaciones_F = () => {
    const navigate = useNavigate();
    const { 
        reservationData, 
        updateReservationData, 
        validateReservationData,
        getFormattedDataForAPI 
    } = useReservationContext();

    const [hay_nino, setHayNino] = useState(reservationData.hay_nino);
    const [rango_edad_nino, setRangoEdadNino] = useState(reservationData.rango_edad_nino || '');
    const [motivo_reserva, setMotivoReserva] = useState(reservationData.motivo_reserva);
    const [hasDecoration, setHasDecoration] = useState(false);

    const ageRanges = [
        { id: '2-3', label: '2 - 3 Años' },
        { id: '4-8', label: '4 - 8 Años' },
        { id: '9-12', label: '9 - 12 años' },
        { id: '13-16', label: '12 - 16 Años' }
    ];

    const motivosReserva = [
        { id: 'cumpleaños_hombre', value: 'cumpleaños_hombre' },
        { id: 'cumpleaños_mujer', value: 'cumpleaños_mujer' },
        { id: 'cumpleaños_mixto', value: 'cumpleaños_mixto' },
        { id: 'grado', value: 'grado' },
        { id: 'aniversario', value: 'aniversario' },
        { id: 'despedida_soltero', value: 'despedida_soltero' },
        { id: 'despedida_soltera', value: 'despedida_soltera' },
        { id: 'despedida_viaje', value: 'despedida_viaje' },
        { id: 'ninguno', value: 'ninguno' }
    ];

    const handleAgeChange = (ageId) => {
        setRangoEdadNino(ageId);
        updateReservationData({ rango_edad_nino: ageId });
    };

    const handleNinoChange = (value) => {
        setHayNino(value);
        updateReservationData({ hay_nino: value });
        if (!value) {
            setRangoEdadNino('');
            updateReservationData({ rango_edad_nino: '' });
        }
    };

    const handleMotivoChange = (event) => {
        const newMotivo = event.target.value;
        setMotivoReserva(newMotivo);
        updateReservationData({ motivo_reserva: newMotivo });
    };

    const apiURL = process.env.REACT_APP_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { isValid, errors } = validateReservationData();
        
        if (!isValid) {
            alert('Por favor, corrija los siguientes errores:\n' + errors.join('\n'));
            return;
        }
        console.log(getFormattedDataForAPI());
        try {
            const formattedData = getFormattedDataForAPI();
            
            const response = await fetch(`${apiURL}/api/reservations`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(formattedData)
            });
            
            const data = await response.json();
            
            
            
            if (response.ok) {
                console.log("Reserva realizada con éxito:", data);
                alert(`Reserva realizada con éxito`);

                navigate("/");
            } else {
                throw new Error(data.message || 'Error al realizar la reserva');
            }
        } catch (error) {
            console.error("Error:", error);
            alert(error.message || 'Error al conectar con el servidor');
        }
    };

    return (
        <div>
            <section className="Container-reservation">
                <nav>
                    <img className="Iso_logo" src={Isologo} alt="Isologo" />
                    <div className="Reserv-cont">
                        <div className="diamond-a">
                            <div className="diamond-n">
                                <div className="span-numb">
                                    <span className="span-col">3</span>
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
                <div className="background-reservation-final">
                    <form className="form-reservations-final" >
                        <label className="l3">¿Dentro de tus acompañantes hay algún niño?</label>
                        <div className="centering-checkbox">
                            <div className="container-checkbox">
                                <input 
                                    type="checkbox" 
                                    checked={hay_nino} 
                                    onChange={() => handleNinoChange(!hay_nino)} 
                                />
                                <label>Sí</label>
                            </div>
                            <div className="container-checkbox">
                                <input 
                                    type="checkbox" 
                                    checked={!hay_nino} 
                                    onChange={() => handleNinoChange(false)} 
                                />
                                <label>No</label>
                            </div>
                        </div>
                        {hay_nino && (
                            <>
                                <label className="l3">Indícanos el rango de edad</label>
                                <div className="centering-checkbox">
                                    {ageRanges.map((range) => (
                                        <div key={range.id} className="container-checkbox">
                                            <input
                                                type="radio"
                                                id={range.id}
                                                name="rango_edad"
                                                checked={rango_edad_nino === range.id}
                                                onChange={() => handleAgeChange(range.id)}
                                            />
                                            <label htmlFor={range.id}>{range.label}</label>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                        <label className="information-count">Información a Tener en Cuenta</label>
                        <div className="form-container-info-final">
                            <div className="container-info-final-1">
                                <p>
                                    La presente reservación no tiene ningún costo, el único costo que se tiene en cuenta
                                    es si desea adquirir la decoración de su preferencia. La reserva le asegura el
                                    ingreso al restaurante, sin embargo su mesa la asignan los Hostess el día de su
                                    asistencia según el orden logístico en el que hayan ingresado cada reserva de manera
                                    general.
                                </p>
                            </div>
                            <div className="container-info-final-2">
                                <label>¿Cuál es el motivo de tu reserva?</label>
                                <select
                                    name="motivo_reserva"
                                    value={motivo_reserva}
                                    onChange={handleMotivoChange}
                                >
                                    <option value="">Seleccione un motivo</option>
                                    {motivosReserva.map((motivo) => (
                                        <option key={motivo.id} value={motivo.value}>
                                            {motivo.value}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <label className="l3">¿Deseas incluir la decoración para tu reserva y fecha especial?</label>
                        <div className="container-centering-checkbox">
                            <div className="centering-checkbox-footer">
                                <div className="container-checkbox">
                                    <input type="checkbox" checked={hasDecoration} onChange={() => setHasDecoration(!hasDecoration)} />
                                    <label>Si</label>
                                </div>
                                <div className="container-checkbox">
                                    <input type="checkbox" checked={!hasDecoration} onChange={() => setHasDecoration(false)} />
                                    <label>No</label>
                                </div>
                            </div>
                            <div className="form-input-button-final">
                                <img className="Iso_logo-final" src={log} alt="Logo" />
                                <input className="button-continue" type="submit" value="Reservar" 
                                onClick={handleSubmit}/>   
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Reservaciones_F;
