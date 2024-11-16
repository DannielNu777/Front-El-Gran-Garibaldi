    import React, { createContext, useContext, useState } from 'react';

    const ReservationContext = createContext();

    export function ReservationProvider({ children }) {
    const [reservationData, setReservationData] = useState({
        // Primera vista (Reservations)
        selectedDate: null,
        selectedTime: null,
        cantidad_personas: '',

        // Segunda vista (Reservaciones_Info)
        firstName: '',
        lastName: '',
        startDate: null,
        email: '',
        confirmEmail: '',
        comentarios_adicionales: '',
        hasAllergy: false,
        allergy: '',
        termsAccepted: false,

        // Tercera vista (Reservaciones_F)
        hasNino: false,
        selectedAges: [],
        motivoReserva: '',
        hasDecoration: false
    });

    const updateReservationData = (newData) => {
        setReservationData(prevData => ({
        ...prevData,
        ...newData
        }));
    };

    const clearReservationData = () => {
        setReservationData({
        selectedDate: null,
        selectedTime: null,
        cantidad_personas: '',
        firstName: '',
        lastName: '',
        startDate: null,
        email: '',
        confirmEmail: '',
        comentarios_adicionales: '',
        hasAllergy: false,
        allergy: '',
        termsAccepted: false,
        hasNino: false,
        selectedAges: [],
        motivoReserva: '',
        hasDecoration: false
        });
    };

    // Función para formatear los datos para la API
    const getFormattedDataForAPI = () => {
        return {
        reservation: {
            date: reservationData.selectedDate ? reservationData.selectedDate.toISOString() : null,
            time: reservationData.selectedTime ? reservationData.selectedTime.toISOString() : null,
            partySize: reservationData.cantidad_personas,
            
            customer: {
            firstName: reservationData.firstName,
            lastName: reservationData.lastName,
            birthDate: reservationData.startDate ? reservationData.startDate.toISOString() : null,
            email: reservationData.email,
            hasAllergy: reservationData.hasAllergy,
            allergyDetails: reservationData.allergy,
            additionalComments: reservationData.comentarios_adicionales
            },
            
            details: {
            hasChildren: reservationData.hasNino,
            childrenAgeRanges: reservationData.selectedAges,
            occasionType: reservationData.motivoReserva,
            includeDecoration: reservationData.hasDecoration
            }
        }
        };
    };

    // Validación completa de todos los datos
    const validateReservationData = () => {
        const errors = [];

        // Validación primera vista
        if (!reservationData.selectedDate) errors.push('Fecha de reserva requerida');
        if (!reservationData.selectedTime) errors.push('Hora de reserva requerida');
        if (!reservationData.cantidad_personas) errors.push('Cantidad de personas requerida');

        // Validación segunda vista
        if (!reservationData.firstName) errors.push('Nombre requerido');
        if (!reservationData.lastName) errors.push('Apellido requerido');
        if (!reservationData.email) errors.push('Correo requerido');
        if (reservationData.email !== reservationData.confirmEmail) errors.push('Los correos no coinciden');
        if (reservationData.hasAllergy && !reservationData.allergy) errors.push('Especifique la alergia');
        if (!reservationData.termsAccepted) errors.push('Debe aceptar los términos y condiciones');

        // Validación tercera vista
        if (reservationData.hasNino && reservationData.selectedAges.length === 0) {
        errors.push('Debe seleccionar al menos un rango de edad para los niños');
        }
        if (!reservationData.motivoReserva) errors.push('Debe seleccionar un motivo de reserva');

        return {
        isValid: errors.length === 0,
        errors
        };
    };

    return (
        <ReservationContext.Provider 
        value={{ 
            reservationData, 
            updateReservationData,
            clearReservationData,
            validateReservationData,
            getFormattedDataForAPI
        }}
        >
        {children}
        </ReservationContext.Provider>
    );
    }

    export function useReservationContext() {
    const context = useContext(ReservationContext);
    if (!context) {
        throw new Error('useReservationContext debe ser usado dentro de un ReservationProvider');
    }
    return context;
    }