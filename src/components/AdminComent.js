import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import comments from "../assets/img/coment-check.svg";
import deletes from "../assets/img/borrar.svg";
import { useComent } from "./ComentContext";

const AdminComent = () => {
  const [coments, setcoments] = useState([]);
  const [comentsDetails, setComentDetails] = useState(null);
  const { fetchComments, updateCommentStatus, setLoadingState } = useComent();

  const formatDate = (dateString) => {
    try {
      if (!dateString) return "Fecha no disponible";
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Fecha inválida";

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

  useEffect(() => {
    const loadComments = async () => {
      try {
        const comments = await fetchComments();
        setcoments(comments);
      } catch (error) {
        console.error("Error al cargar comentarios:", error);
        alert("Error al cargar los comentarios");
      }
    };

    loadComments();
  }, []);

  const handleComent = (coment) => {
    setComentDetails(coment);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setComentDetails(null);
    document.body.classList.remove("modal-open");
    document.body.classList.add("modal-closed");
    setTimeout(() => {
      document.body.classList.remove("modal-closed");
    }, 300);
  };

  // Modificar handleDeleteComent para usar la nueva función local
  const handleDeleteComent = async (coment) => {
    try {
      await updateCommentStatus(coment, "Rechazado");
      const updatedComments = await fetchComments();
      setcoments(updatedComments);
      closeModal();
      alert("Comentario marcado como Rechazado exitosamente");
    } catch (error) {
      console.error("Error al cambiar el estado del comentario:", error);
      alert(error.message || "Error al cambiar el estado del comentario");
    }
  };

  const handleUpdateComent = async () => {
    try {
      if (!comentsDetails) return;

      await updateCommentStatus(comentsDetails.id_comentario, "Aprobado");
      const updatedComments = await fetchComments();
      setcoments(updatedComments);
      closeModal();
      alert("Comentario aprobado exitosamente");
    } catch (error) {
      console.error("Error al actualizar el comentario:", error);
      alert(error.message || "Error al actualizar el comentario");
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="stars-container">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`star ${index < rating ? "star-filled" : "star-empty"}`}
          >
            <svg
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill={index < rating ? "#fbbf24" : "none"}
              stroke={index < rating ? "#fbbf24" : "#d1d5db"}
              strokeWidth="1.5"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </span>
        ))}
      </div>
    );
  };

  return (
    <div>
      <header className="header-admin">
        <Link to="/admin-main">
          <img className="Iso_logo" src={Isologo} alt="Isologo" />
        </Link>
      </header>
      <section className="Container-admin">
        <div className="background-admin">
          <h1 className="label">Comentarios</h1>
          {coments.length > 0 ? (
            coments.map((coment) => (
              <div key={coment.id_comentario} className="container-coment">
                <label className="label-coment">{coment.estado}</label>
                <div className="stars">{renderStars(coment.calificacion)}</div>
                <img
                  className="icon"
                  src={comments}
                  alt="comentario"
                  onClick={() => handleComent(coment)}
                />
              </div>
            ))
          ) : (
            <p className="label">No hay comentarios disponibles</p>
          )}
        </div>
      </section>
      {comentsDetails && (
        <div className="user-modal">
          <div className="user-details">
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <h2 className="label">Detalles del comentario</h2>
            <p className="p">
              <strong>Titulo:</strong> {comentsDetails.titulo}
            </p>
            <p className="p">
              <strong>Calificación:</strong>{" "}
              {renderStars(comentsDetails.calificacion)}
            </p>
            <p className="p">
              <strong>Comentario:</strong> {comentsDetails.comentario}
            </p>
            <p className="p">
              <strong>Fecha:</strong>{" "}
              {formatDate(comentsDetails.fecha_comentario)}
            </p>
            <div className="button-container">
              <button
                className="user-details-button"
                onClick={handleUpdateComent}
              >
                Aprobar Comentario
              </button>
              <button
                className="user-details-button "
                onClick={() => handleDeleteComent(comentsDetails.id_comentario)}
              >
                Rechazar Comentario
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminComent;
