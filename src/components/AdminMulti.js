import React, { useRef, useState, useEffect } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import add from "../assets/img/anadir-imagen.png";

const apiURL = process.env.REACT_APP_API_URL;

const AdminMulti = () => {
  const [selectedFile, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [showUploadSection, setShowUploadSection] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    if (showGallery) {
      fetchImages();
    }
  }, [showGallery, token, navigate]);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${apiURL}/api/images`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      console.log("Imágenes recibidas:", data);

      setImages(data);
    } catch (error) {
      console.error("Error al cargar imágenes:", error);
      setImages([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageError = (imageId) => {
    console.error(`Error loading image with ID: ${imageId}`);
    setImageErrors((prev) => ({
      ...prev,
      [imageId]: true,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("El archivo es demasiado grande. Máximo 5MB permitido.");
        return;
      }

      setFile(file);
      setPreview(URL.createObjectURL(file));
      setShowGallery(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch(`${apiURL}/api/add-image`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!response.ok)
        throw new Error(`Error al subir la imagen: ${response.status}`);

      const result = await response.json();
      alert("Imagen enviada exitosamente.");

      setImages((prevImages) => [
        {
          id_foto: result.id_foto,
          url_foto: result.url_foto,
        },
        ...prevImages,
      ]);

      setFile(null);
      setPreview(null);
      setShowUploadSection(false);
      setShowGallery(true);
    } catch (error) {
      console.error("Error al subir imagen:", error);
      alert("Error al subir la imagen. Por favor, intente nuevamente.");
      if (error.message.includes("token")) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteImage = async () => {
    if (!selectedImage) return;

    try {
      const response = await fetch(
        `${apiURL}/api/delete-image/${selectedImage.id_foto}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      if (!response.ok)
        throw new Error(`Error al eliminar la imagen: ${response.status}`);

      setImages((prevImages) =>
        prevImages.filter((img) => img.id_foto !== selectedImage.id_foto)
      );

      alert("Imagen eliminada exitosamente");
      setSelectedImage(null);
      setShowGallery(true);
    } catch (error) {
      console.error("Error al eliminar imagen:", error);
      alert("Error al eliminar la imagen. Por favor, intente nuevamente.");
    }
  };

  const resetState = () => {
    setShowUploadSection(true);
    setShowGallery(false);
    setSelectedImage(null);
    setFile(null);
    setPreview(null);
    setImageErrors({});
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
          <h1 className="U1">Administración Multimedia Eventos</h1>

          <form className="multi-event" onSubmit={handleSubmit}>
            <div className="multi-btn">
              {showUploadSection && !showGallery && !selectedImage && (
                <button
                  type="submit"
                  className="btn-multi"
                  disabled={isLoading || !selectedFile}
                >
                  {isLoading ? "Enviando..." : "Subir Imagen"}
                </button>
              )}
              {!selectedImage || selectedImage ? (
                <button
                  type="button"
                  className="btn-multi"
                  onClick={() => setShowGallery(true)}
                  disabled={isLoading}
                >
                  Ver Galería
                </button>
              ) : null}

              {selectedImage && (
                <button
                  type="button"
                  className="btn-multi"
                  onClick={handleDeleteImage}
                  disabled={isLoading}
                >
                  Confirmar Eliminación
                </button>
              )}
              {(selectedImage || showGallery) && (
                <button
                  type="button"
                  className="btn-multi"
                  onClick={resetState}
                >
                  Agregar Nueva Imagen
                </button>
              )}
            </div>

            {showUploadSection && !showGallery && !selectedImage && (
              <div className="multi-add">
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  accept="image/*"
                />
                <img
                  className="multi-img"
                  onClick={() => fileInputRef.current.click()}
                  src={add}
                  alt="Agregar"
                />
                {selectedFile && (
                  <div className="label">
                    Archivo seleccionado: {selectedFile.name}
                  </div>
                )}
              </div>
            )}

            {preview && showUploadSection && !showGallery && !selectedImage && (
              <div className="multi-txt">
                <img className="multi-input" src={preview} alt="Vista previa" />
              </div>
            )}

            {showGallery && !selectedImage && (
              <div className="gallery-grid">
                {isLoading ? (
                  <div className="label">Cargando imágenes...</div>
                ) : images.length > 0 ? (
                  images.map((image) => (
                    <div
                      key={image.id_foto}
                      className="gallery-item"
                      onClick={() =>
                        !imageErrors[image.id_foto] && setSelectedImage(image)
                      }
                    >
                      {!imageErrors[image.id_foto] ? (
                        <img
                          src={image.url_foto}
                          alt={`Imagen ${image.id_foto}`}
                          onError={() => handleImageError(image.id_foto)}
                        />
                      ) : (
                        <div className="image-error-placeholder">
                          <img src={add} alt="Error de carga" />
                          <p className="label">Error al cargar imagen</p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="label">No hay imágenes disponibles</p>
                )}
              </div>
            )}

            {selectedImage && (
              <div className="selected-image-container">
                {!imageErrors[selectedImage.id_foto] ? (
                  <img
                    src={selectedImage.url_foto}
                    alt="Imagen seleccionada"
                    className="selected-image"
                    onError={() => handleImageError(selectedImage.id_foto)}
                  />
                ) : (
                  <div className="image-error-placeholder">
                    <img src={add} alt="Error de carga" />
                    <p className="label">Error al cargar imagen seleccionada</p>
                  </div>
                )}
              </div>
            )}
          </form>
        </div>
      </section>
      <Outlet />
    </div>
  );
};

export default AdminMulti;
