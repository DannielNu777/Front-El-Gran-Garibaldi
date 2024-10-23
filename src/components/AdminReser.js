import React, { useEffect, useState } from "react";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import { Outlet } from "react-router-dom";
import search from "../assets/img/busqueda.png";
import { Link } from "react-router-dom";

const apiURL = process.env.REACT_APP_API_URL;

const AdminReser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);

  // Función para formatear la fecha para mostrar
  const formatDate = (dateString) => {
    try {
      if (!dateString) {
        return "Fecha no disponible";
      }

      const date = new Date(dateString);

      if (isNaN(date.getTime())) {
        return "Fecha inválida";
      }

      return new Intl.DateTimeFormat("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(date);
    } catch (error) {
      console.error("Error al formatear la fecha:", error);
      return "Error en fecha";
    }
  };

  // Función para convertir fecha a formato YYYY-MM-DD
  const formatDateToYYYYMMDD = (date) => {
    return date.toISOString().split("T")[0];
  };

  const handleDateChange = (e) => {
    setDateFilter(e.target.value);
  };

  const filteredReservations = reservations.filter((reservation) => {
    if (dateFilter) {
      // Convertir la fecha de reserva a YYYY-MM-DD
      const reservationDate = new Date(reservation.horario_reserva);
      const reservationDateStr = formatDateToYYYYMMDD(reservationDate);
      console.log("DATOS BASE= ", reservationDate);
      // Comparar con la fecha del filtro
      return reservationDateStr === dateFilter;
    }
    return true;
  });

  const fetchReserv = async () => {
    try {
      const response = await fetch(`${apiURL}/api/reservations`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Error al obtener usuarios");
      }
      const data = await response.json();

      // Log para debug
      console.log("Datos recibidos:", data);

      setReservations(data);
    } catch (error) {
      setError(error.message);
      console.error("Error al obtener reservaciones:", error);
    }
  };

  useEffect(() => {
    fetchReserv();
  }, []);

  // Log para debug
  useEffect(() => {
    if (dateFilter) {
      console.log("Fecha filtro seleccionada:", dateFilter);
      console.log("Reservaciones filtradas:", filteredReservations);
    }
  }, [dateFilter, filteredReservations]);

  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-..."
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"
      />
      <header className="header-admin">
        <Link to="/admin-main">
          <img className="Iso_logo" src={Isologo} alt="Isologo" />
        </Link>
      </header>
      <section className="Container-admin">
        <div className="background-admin">
          <h1 className="U1">Administración Reservas</h1>
          <form className="form-reserv" onSubmit={(e) => e.preventDefault()}>
            <div className="reserv">
              <div className="search-cont">
                <input
                  type="date"
                  value={dateFilter}
                  onChange={handleDateChange}
                  className="form-control"
                />
                {dateFilter && (
                  <button
                    onClick={() => setDateFilter("")}
                    className="clear-filter"
                  >
                    Limpiar filtro
                  </button>
                )}
              </div>
              <div className="history-reser">
                {filteredReservations.length > 0 ? (
                  filteredReservations.map((reservation) => (
                    <div
                      key={reservation.id_reserva}
                      className="reservation-item"
                    >
                      <p className="p">NO.Reserva: {reservation.id_reserva}</p>
                      <p className="p">
                        Personas: {reservation.cantidad_personas}
                      </p>
                      <p className="p">
                        Fecha: {formatDate(reservation.horario_reserva)}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="no-results">
                    No se encontraron reservas para la fecha seleccionada
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
      <Outlet />
    </div>
  );
};

export default AdminReser;
