import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import search from "../assets/img/busqueda.png";
import MinusIcon from "../assets/img/menos-pequeno.svg";
import PlusIcon from "../assets/img/plus-pequeno.svg";

const apiURL = process.env.REACT_APP_API_URL;

const Modal = ({
  isOpen,
  onClose,
  selectedProducts,
  numMesa,
  onSubmitOrder,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Reset estado del modal cuando se abre
  useEffect(() => {
    if (isOpen) {
      setSubmitSuccess(false);
      setSubmitError("");
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmitOrder = async () => {
    if (selectedProducts.length === 0) {
      setSubmitError("No hay productos seleccionados");
      return;
    }

    if (!numMesa) {
      setSubmitError("Por favor ingrese un número de mesa");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const orderData = {
        numero_mesa: parseInt(numMesa),
        productos: selectedProducts.map((product) => ({
          id_producto: product.id,
          cantidad: parseInt(product.cantidad),
          comentarios: "",
        })),
      };

      const response = await fetch(`${apiURL}/api/orders`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Error al enviar el pedido");
      }

      setSubmitSuccess(true);

      // Esperar un momento antes de cerrar el modal y resetear
      setTimeout(() => {
        onClose();
        onSubmitOrder();
        setSubmitSuccess(false);
      }, 1500);
    } catch (error) {
      console.error("Error al enviar pedido:", error);
      setSubmitError(
        error.message ||
          "Error al enviar el pedido. Por favor, intente nuevamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const totalItems = selectedProducts.reduce(
    (sum, product) => sum + product.cantidad,
    0
  );

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Productos Seleccionados</h2>
        <button
          className="modal-close"
          onClick={onClose}
          disabled={isSubmitting}
        >
          ×
        </button>

        {selectedProducts.length > 0 ? (
          <div className="selected-products">
            <div className="mesa-info">
              <strong className="label-1">Mesa: {numMesa}</strong>
            </div>
            {selectedProducts.map((product) => (
              <div key={product.id} className="selected-product-item">
                <span className="label-1">{product.nombre_producto}</span>
                <span className="label-1">Cantidad: {product.cantidad}</span>
                <span className="label-1">Tipo: {product.tipo}</span>
              </div>
            ))}
            <div className="total-products">
              <strong className="label-1">
                Total de productos: {totalItems}
              </strong>
            </div>
          </div>
        ) : (
          <p className="label">No hay productos seleccionados</p>
        )}

        {submitError && <div className="error-message">{submitError}</div>}
        {submitSuccess && (
          <div className="success-message">¡Pedido enviado exitosamente!</div>
        )}

        <button
          className="user-details-button"
          onClick={handleSubmitOrder}
          disabled={
            isSubmitting ||
            submitSuccess ||
            !numMesa ||
            selectedProducts.length === 0
          }
        >
          {isSubmitting ? "Enviando..." : "Realizar Pedido"}
        </button>
      </div>
    </div>
  );
};

const New_Order = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [numMesa, setNumMesa] = useState("");
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para resetear el formulario
  const resetForm = () => {
    setQuantities({});
    setSelectedProducts([]);
    setNumMesa("");
    setSearchTerm("");
    setIsModalOpen(false);
  };

  const handleOrderSubmitted = () => {
    console.log("Limpiando formulario después del envío");
    resetForm();
  };

  const filteredProducts = products.filter((product) =>
    searchTerm
      ? product.nombre_producto.toLowerCase().includes(searchTerm.toLowerCase())
      : true
  );

  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.tipo]) {
      acc[product.tipo] = [];
    }
    acc[product.tipo].push(product);
    return acc;
  }, {});

  const updateSelectedProducts = (product, newQuantity) => {
    setSelectedProducts((prev) => {
      if (newQuantity <= 0) {
        return prev.filter((p) => p.id !== product.id);
      }

      const existingIndex = prev.findIndex((p) => p.id === product.id);
      if (existingIndex >= 0) {
        const newProducts = [...prev];
        newProducts[existingIndex] = { ...product, cantidad: newQuantity };
        return newProducts;
      }

      return [...prev, { ...product, cantidad: newQuantity }];
    });
  };

  const handleQuantityChange = (product, value) => {
    const newQuantity = Math.max(0, value);
    setQuantities((prev) => ({
      ...prev,
      [product.id]: newQuantity,
    }));
    updateSelectedProducts(product, newQuantity);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiURL}/api/products`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) throw new Error("Error al obtener productos");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const renderProductList = (tipo) => {
    if (!groupedProducts[tipo]) return null;

    return (
      <div key={tipo} className="background-order">
        <h3 className="label">{tipo}</h3>
        {groupedProducts[tipo].map((product) => (
          <div key={product.id} className="cont-ord">
            <label className="label-1">{product.nombre_producto}</label>
            <div className="quantity-controls">
              <img
                className="icon"
                src={MinusIcon}
                onClick={() =>
                  handleQuantityChange(
                    product,
                    (quantities[product.id] || 0) - 1
                  )
                }
                alt="minus"
              />
              <input
                type="number"
                value={quantities[product.id] || 0}
                onChange={(e) =>
                  handleQuantityChange(product, parseInt(e.target.value) || 0)
                }
                min="0"
              />
              <img
                className="icon"
                src={PlusIcon}
                onClick={() =>
                  handleQuantityChange(
                    product,
                    (quantities[product.id] || 0) + 1
                  )
                }
                alt="plus"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="order-container">
      <header className="header">
        <div className="Navbar-1">
          <nav>
            <Link to="/order-one">
              <img className="Iso_logo" src={Isologo} alt="Isologo" />
            </Link>
          </nav>
        </div>
      </header>

      <section className="Container-login">
        <div className="background-general-order">
          <h1 className="U1">Pedido General</h1>

          <div className="search-cont">
            <label className="label">#MESA</label>
            <input
              className="input-number"
              value={numMesa}
              placeholder="Inserta número de mesa"
              type="number"
              onChange={(e) => setNumMesa(e.target.value)}
              min="1"
            />
            <input
              className="input-search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar producto"
              type="text"
            />
            <button type="submit" className="search-button">
              <img src={search} alt="Buscar" />
            </button>
          </div>

          {Object.keys(groupedProducts).length > 0 ? (
            <>
              <div className="background-server">
                <div className="left-column">{renderProductList("Plato")}</div>
                <div className="right-column">
                  {renderProductList("Bebida")}
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="user-details-button"
                disabled={selectedProducts.length === 0 || !numMesa}
              >
                Ver Pedido
              </button>
            </>
          ) : (
            <p className="no-results">No se encontraron productos</p>
          )}
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedProducts={selectedProducts}
        numMesa={numMesa}
        onSubmitOrder={handleOrderSubmitted}
      />
      <Outlet />
    </div>
  );
};

export default New_Order;
