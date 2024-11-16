import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Isologo from "../assets/img/ISOLOGO_GARIBALDI.png";
import search from "../assets/img/busqueda.png";

const apiURL = process.env.REACT_APP_API_URL;

const Cash = () => {
  const [tableOrders, setTableOrders] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formatNumber = (number) => {
    return number.toLocaleString("es-CO", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const fetchTableOrders = async (tableId) => {
    if (!tableId) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${apiURL}/api/cash/tables/${tableId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) {
        console.log("algo salio mal");
        throw new Error("Error al obtener pedido");
      }
      const data = await response.json();
      setTableOrders(data);
      console.log(data);
    } catch (error) {
      console.log("El problema es cuando trae los datos");
      setError("Error al cargar los pedidos");
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmSale = async () => {
    if (!tableOrders || !searchTerm) return;

    try {
      const response = await fetch(
        `${apiURL}/api/cash/tables/${searchTerm}/confirm`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(searchTerm),
        }
      );

      if (!response.ok) {
        throw new Error("Error al confirmar la venta");
      }

      setTableOrders(null);
      setSearchTerm("");
      alert("Venta realizada con éxito");
    } catch (error) {
      alert("Error al realizar la venta");
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchTableOrders(searchTerm);
  };

  return (
    <div>
      <header className="header-admin">
        <Link to="/login">
          <img className="Iso_logo" src={Isologo} alt="Isologo" />
        </Link>
      </header>
      <section className="Container-admin">
        <div className="background-admin">
          <h1 className="label">Caja</h1>
          <div className="form-kitchen">
            <form onSubmit={handleSearchSubmit} className="search-container">
              <div className="search-cont">
                <input
                  className="input-search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Ingrese número de mesa"
                  type="number"
                />
                <button type="submit" className="search-button">
                  <img src={search} alt="Buscar" />
                </button>
              </div>
            </form>

            {loading && <p className="loading">Cargando...</p>}
            {error && <p className="error-message">{error}</p>}

            {tableOrders && (
              <div className="orders-container">
                <h2 className="table-title">Mesa {searchTerm}</h2>
                <div className="orders-list">
                  {tableOrders.orders.map((order, index) => (
                    <div key={index} className="order-item">
                      <p className="label-1">
                        {order.nombre_producto} - Cantidad: {order.cantidad}
                      </p>
                      <p className="label-1">
                        Precio unitario: ${formatNumber(order.precio)}
                      </p>
                      <p className="label-1">
                        Total: ${formatNumber(order.total_producto)}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="total-section">
                  <p className="total-amount">
                    Total a pagar: ${formatNumber(tableOrders.total)}
                  </p>
                  <button
                    onClick={handleConfirmSale}
                    className="confirm-button"
                  >
                    Confirmar Pago
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cash;
