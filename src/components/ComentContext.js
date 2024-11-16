import React, { createContext, useContext, useState } from "react";

const ComentContext = createContext();

export const useComent = () => {
  const context = useContext(ComentContext);
  if (!context) {
    throw new Error("useComent must be used within a ComentProvider");
  }
  return context;
};

export const ComentProvider = ({ children }) => {
  const [approvedComments, setApprovedComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Función para obtener el token
  const getToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No se encontró el token de autorización");
    }
    return token;
  };

  // Función mejorada para hacer peticiones HTTP
  const fetchWithAuth = async (url, options = {}) => {
    try {
      const token = getToken();

      // Log para depuración
      console.log("Enviando petición a:", url);
      console.log("Opciones de la petición:", {
        ...options,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const response = await fetch(url, {
        ...options,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      // Log para depuración
      console.log("Status de la respuesta:", response.status);

      const responseData = await response.json();
      console.log("Datos de la respuesta:", responseData);

      if (!response.ok) {
        throw new Error(
          responseData.message || `Error en la petición: ${response.status}`
        );
      }

      return responseData;
    } catch (error) {
      console.error("Error detallado en la petición:", error);
      throw error;
    }
  };

  // Función para obtener comentarios
  const fetchComments = async () => {
    setIsLoading(true);
    try {
      const data = await fetchWithAuth(
        `${process.env.REACT_APP_API_URL}/api/comments`,
        { method: "GET" }
      );

      const processedComments = data.map((comment) => ({
        id_comentario: comment.id_comentario,
        comentario: comment.comentario,
        calificacion: comment.calificacion,
        estado: comment.estado,
        titulo: comment.titulo,
        fecha_comentario: comment.fecha_comentario,
      }));

      updateApprovedComments(processedComments);
      return processedComments;
    } catch (error) {
      console.error("Error al cargar comentarios:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Función mejorada para actualizar el estado de un comentario
  const updateCommentStatus = async (id_comentario, newStatus) => {
    try {
      // Validación de parámetros
      if (!id_comentario) throw new Error("ID de comentario es requerido");
      if (!newStatus) throw new Error("Nuevo estado es requerido");

      // Datos para enviar
      const updateData = {
        estado: newStatus,
        id_comentario: id_comentario,
      };

      // Log para depuración
      console.log("Datos a enviar:", updateData);

      const data = await fetchWithAuth(
        `${process.env.REACT_APP_API_URL}/api/comments/${id_comentario}`,
        {
          method: "PATCH",
          body: JSON.stringify(updateData),
        }
      );

      // Actualizar la lista de comentarios después de la actualización
      await fetchComments();
      return data;
    } catch (error) {
      console.error("Error al actualizar el comentario:", error);
      throw error;
    }
  };

  const updateApprovedComments = (comments) => {
    const approved = comments
      .filter((comment) => comment.estado === "Aprobado")
      .map((comment) => ({
        id_comentario: comment.id_comentario,
        titulo: comment.titulo,
        comentario: comment.comentario,
        calificacion: comment.calificacion,
        fecha_comentario: comment.fecha_comentario,
        estado: comment.estado,
      }));
    setApprovedComments(approved);
  };

  const value = {
    approvedComments,
    isLoading,
    updateApprovedComments,
    setLoadingState: setIsLoading,
    fetchComments,
    updateCommentStatus,
  };

  return (
    <ComentContext.Provider value={value}>{children}</ComentContext.Provider>
  );
};
