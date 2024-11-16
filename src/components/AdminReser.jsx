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
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

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

  const handleReservationClick = (reservation) => {
    setSelectedReservation(reservation);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedReservation(null);
  };

  const handleCloseReportModal = () => {
    setIsReportModalOpen(false);
    setSelectedMonth("");
    setSelectedYear("");
  };

  const handleGenerateReport = async () => {
    if (!selectedMonth || !selectedYear) {
      alert("Por favor selecciona mes y año");
      return;
    }

    try {
      const response = await fetch(
        `${apiURL}/api/report/${selectedMonth}/${selectedYear}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error al generar el reporte");
      }

      // Obtener el blob del PDF
      const blob = await response.blob();

      // Crear URL del blob
      const url = window.URL.createObjectURL(blob);

      // Crear elemento anchor temporal
      const link = document.createElement("a");
      link.href = url;
      link.download = `reporte-${selectedMonth}-${selectedYear}.pdf`; // Nombre del archivo a descargar

      // Añadir el link al documento
      document.body.appendChild(link);

      // Simular click
      link.click();

      // Limpiar
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      alert("Reporte descargado exitosamente");
      handleCloseReportModal();
    } catch (error) {
      console.error("Error al generar el reporte:", error);
      alert("Error al generar el reporte");
    }
  };

  const filteredReservations = reservations.filter((reservation) => {
    if (dateFilter) {
      const reservationDate = new Date(reservation.horario_reserva);
      const reservationDateStr = formatDateToYYYYMMDD(reservationDate);
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
      setReservations(data);
    } catch (error) {
      setError(error.message);
      console.error("Error al obtener reservaciones:", error);
    }
  };

  useEffect(() => {
    fetchReserv();
  }, []);

  // Array de meses para el select
  const months = [
    { value: "01", label: "Enero" },
    { value: "02", label: "Febrero" },
    { value: "03", label: "Marzo" },
    { value: "04", label: "Abril" },
    { value: "05", label: "Mayo" },
    { value: "06", label: "Junio" },
    { value: "07", label: "Julio" },
    { value: "08", label: "Agosto" },
    { value: "09", label: "Septiembre" },
    { value: "10", label: "Octubre" },
    { value: "11", label: "Noviembre" },
    { value: "12", label: "Diciembre" },
  ];

  // Array de años (últimos 5 años)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  return (
    <div>
      
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
                <button
                  type="button"
                  className="reports-button"
                  onClick={() => setIsReportModalOpen(true)}
                >
                  Reportes
                </button>
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
                      onClick={() => handleReservationClick(reservation)}
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

      {/* Modal de detalles de reserva */}
      {isModalOpen && selectedReservation && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={handleCloseModal}>
              ×
            </button>
            <h2 className="label">Detalles de la Reserva</h2>
            <div className="modal-body">
              <div className="modal-info">
                <p>
                  <strong>Nombre de Usuario:</strong>{" "}
                  {selectedReservation.usuario_nombre}
                </p>
                <p>
                  <strong>Número de Reserva:</strong>{" "}
                  {selectedReservation.id_reserva}
                </p>
                <p>
                  <strong>Cantidad de Personas:</strong>{" "}
                  {selectedReservation.cantidad_personas}
                </p>
                <p>
                  <strong>Fecha y Hora:</strong>{" "}
                  {formatDate(selectedReservation.horario_reserva)}
                </p>
                <p>
                  <strong>Comentarios Adicionales:</strong>{" "}
                  {selectedReservation.comentarios_adicionales}
                </p>
                <p>
                  <strong>Motivo de la Reserva:</strong>{" "}
                  {selectedReservation.motivo_reserva}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de reportes */}
      {isReportModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={handleCloseReportModal}>
              ×
            </button>
            <h2 className="label">Generar Reporte</h2>
            <div className="modal-body">
              <div className="modal-info">
                <div className="select-container">
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="select-month"
                  >
                    <option value="">Seleccionar Mes</option>
                    {months.map((month) => (
                      <option key={month.value} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="select-year"
                  >
                    <option value="">Seleccionar Año</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={handleGenerateReport}
                  className="reports-button"
                >
                  Generar Reporte
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default AdminReser;
