import React, { useState } from "react";

const apiURL = process.env.REACT_APP_API_URL;

const CommentModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null); // Reset any previous errors

    try {
      const response = await fetch(`${apiURL}/api/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo: title,
          calificacion: rating,
          comentario: comment,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el comentario");
      }

      setTimeout(() => {
        onClose();
        setTitle("");
        setRating(0);
        setComment("");
      }, 2000);
    } catch (err) {
      console.log(err.message);
      setError("Hubo un problema al enviar el comentario. Intenta nuevamente.");
      setIsSubmitting(false);
    }
  };

  const isFormValid = title && rating > 0 && comment.trim() !== "";

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="label">Nuevo Comentario</h2>
          <button
            onClick={onClose}
            className="close-button"
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label className="label">Título</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="label">Calificación</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="star-button"
                >
                  <span
                    className={star <= rating ? "star-active" : "star-inactive"}
                  >
                    ★
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="label">Comentario</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="form-input"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting || !isFormValid}
          >
            {isSubmitting ? "Enviando..." : "Enviar Comentario"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentModal;
