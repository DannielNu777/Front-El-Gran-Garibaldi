import React, { createContext, useContext, useState } from 'react';

const ReservationContext = createContext();

export function ReservationProvider({ children }) {
    const [reservationData, setReservationData] = useState({
        cantidad_personas: '',
        horario_reserva: null,
        comentarios_adicionales: '',
        hay_nino: false,
        rango_edad_nino: '',
        motivo_reserva: ''
    });

    const updateReservationData = (newData) => {
        setReservationData(prevData => ({
            ...prevData,
            ...newData
        }));
    };

    const validateReservationData = () => {
        const errors = [];
        
        if (!reservationData.motivo_reserva) {
            errors.push('Por favor seleccione un motivo de reserva');
        }

        if (reservationData.hay_nino && reservationData.rango_edad_nino.length === 0) {
            errors.push('Por favor seleccione al menos un rango de edad para los niños');
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    };

    const getFormattedDataForAPI = () => {

        return {
            cantidad_personas: reservationData.cantidad_personas,
            horario_reserva: reservationData.horario_reserva,
            comentarios_adicionales: reservationData.comentarios_adicionales,
            hay_nino: reservationData.hay_nino,
            rango_edad_nino: reservationData.rango_edad_nino,
            motivo_reserva: reservationData.motivo_reserva
        };
    };

    return (
        <ReservationContext.Provider value={{ 
            reservationData, 
            updateReservationData,
            validateReservationData,
            getFormattedDataForAPI
        }}>
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
