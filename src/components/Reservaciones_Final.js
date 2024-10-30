import React, { useState } from "react";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import log from "../assets/img/logo.png";
import { useReservationContext } from "./ReservationsContext.js"; // Asegúrate de que la ruta sea correcta
import { useNavigate } from "react-router-dom";

function Reservaciones_F() {
    const navigate = useNavigate();
    const { 
        reservationData, 
        updateReservationData, 
        validateReservationData,
        getFormattedDataForAPI 
    } = useReservationContext();

    // Inicializar estados con valores del contexto
    const [hay_nino, sethay_nino] = useState(reservationData.hay_nino);
    const [selectedAges, setSelectedAges] = useState(reservationData.selectedAges);
    const [motivoSeleccionado, setMotivoSeleccionado] = useState(reservationData.motivoReserva);
    const [hasDecoration, setHasDecoration] = useState(reservationData.hasDecoration);


    const ageRanges = [
        { id: '2-6', label: '2 - 6 Años' },
        { id: '4-8', label: '4 - 8 Años' },
        { id: '8-12', label: '8 - 12 años' },
        { id: '12-16', label: '12 - 16 Años' }
    ];

const motivosReserva = [
            { id: 'cumpleanos-hombre', value: 'Cumpleaños Para Hombre' },
            { id: 'cumpleanos-mujer', value: 'Cumpleaños Para Mujer' },
            { id: 'cumpleanos-mixto', value: 'Cumpleaños Mixto' },
            { id: 'grado', value: 'Grado' },
            { id: 'aniversario', value: 'Aniversario' },
            { id: 'despedida-soltero', value: 'Despedida de Soltero' },
            { id: 'despedida-soltera', value: 'Despedida de Soltera' },
            { id: 'despedida-viaje', value: 'Despedida de Viaje/Pais' },
            { id: 'ninguno', value: 'Ninguno' }
        ];

const showAlert = () => {
                    alert(`
                    ¿Hay Algún niño?:${hay_nino}
                    Rango edad niño: ${selectedAges}
                    Motivo reserva: ${motivoSeleccionado}
                    Decoracion: ${hasDecoration}
                    `);
                };

    // Función para manejar el cambio de edad
    const handleAgeChange = (ageId) => {
        const newSelectedAges = selectedAges.includes(ageId)
            ? selectedAges.filter(id => id !== ageId)
            : [...selectedAges, ageId];
        
        setSelectedAges(newSelectedAges);
        updateReservationData({ selectedAges: newSelectedAges });
    };

    // Función para manejar el cambio de motivo
    const handleMotivoChange = (event) => {
        setMotivoSeleccionado(event.target.value);
        updateReservationData({ motivoReserva: event.target.value });
    };

    // Manejador para los checkboxes de niños y decoración
    const handleNinoChange = (value) => {
        sethay_nino(value);
        updateReservationData({ hay_nino: value });
    };

    const handleDecorationChange = (value) => {
        setHasDecoration(value);
        updateReservationData({ hasDecoration: value });
    };

    // Envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar todos los datos antes de enviar
        const { isValid, errors } = validateReservationData();
        
        if (!isValid) {
            alert('Por favor, corrija los siguientes errores:\n' + errors.join('\n'));
            return;
        }

        try {
            // Obtener los datos formateados para la API
            const formattedData = getFormattedDataForAPI();

            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/reservations`, {
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
                navigate("/");
            } else {
                console.error("Error al realizar la reserva:", data);
                alert('Error al realizar la reserva: ' + data.message);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            alert('Error al conectar con el servidor');
        }
    };

    return (
        <body>
<<<<<<< HEAD
            <section className="Container-reservation">
                <nav>
                    <img className="Iso_logo" src={Isologo} />
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
=======
            <section class="Container-reservation">
            <nav>
                <img className="Iso_logo" src={Isologo} />{" "}
                <div class="Reserv-cont">
                    <div class="diamond-a">
                    <div class="diamond-n">
                        <div class="span-numb">

                        <span class="span-col">3</span>

>>>>>>> 6ce63ae8db9d63d1e924e1a37257b974385004d2
                        </div>
                    </div>
                </nav>

<<<<<<< HEAD
                <div className="background-reservation-final">
                    <form className="form-reservations-final" onSubmit={handleSubmit}>
                        <label className="l3">¿Dentro de tus acompañantes hay algún niño?</label>
=======
            <div class="background-reservation-final">
                <form class="form-reservations-final">
                        <label for="selector" class="l3">
                            ¿Dentro de tus acompañantes hay algún niño?
                        </label>
>>>>>>> 6ce63ae8db9d63d1e924e1a37257b974385004d2
                        <div className="centering-checkbox">
                            <div className="container-checkbox">
                                    <input type="checkbox" checked={hay_nino} onChange={() => sethay_nino(!hay_nino)} />
                                    <label>Si</label>
                            </div>
                            <div className="container-checkbox">
                                    <input type="checkbox" checked={!hay_nino} onChange={() => sethay_nino(false)} />
                                    <label>No</label>
                            </div>
                        </div>

                        <label className="l3">Indícanos la media de edad(es)</label>
                        <label className="l3">Indícanos la media de edad(es)</label>
                            <div className="centering-checkbox">
                                {ageRanges.map((range) => (
                                    <div key={range.id} className="container-checkbox">
                                        <input
                                            type="checkbox"
                                            id={range.id}
                                            checked={selectedAges.includes(range.id)}
                                            onChange={() => handleAgeChange(range.id)}
                                        />
                                        <label htmlFor={range.id}>{range.label}</label>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Puedes ver las edades seleccionadas así: */}
                            {selectedAges.length > 0 && (
                                <div>
                                    Edades seleccionadas: {selectedAges.join(', ')}
                                </div>
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
                                        <label>¿Qué Motivo es tu Reserva?</label>
                                        <select
                                            name="motivoReserva"
                                            value={motivoSeleccionado}
                                            onChange={handleMotivoChange}
                                        >
                                            <option value="">Seleccione un motivo</option>
                                            {motivosReserva.map((motivo) => (
                                                <option 
                                                    key={motivo.id} 
                                                    value={motivo.value}
                                                >
                                                    {motivo.value}
                                                </option>
                                            ))}
                                        </select>
                                        
                                        {/* Puedes ver el motivo seleccionado así: */}
                                        {motivoSeleccionado && (
                                            <div>
                                                Motivo seleccionado: {motivoSeleccionado}
                                            </div>
                                        )}
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
                                        <input type="checkbox" checked={!hasDecoration} onChange={() => setHasDecoration()} />
                                        <label>No</label>
                                </div>
                            </div>
                        </div>

                        <img className="Iso_logo" src={log} />
                        <form id ="external-form" className="form-input-button">
                            <input className="button-continue" type="submit" value="Continuar" 
                            onClick={showAlert}/>
                        </form>
                    </form>
                </div>
            </section>
        </body>
    );
}

export default Reservaciones_F;