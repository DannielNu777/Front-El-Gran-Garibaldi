import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Isologo from "../../src/assets/img/ISOLOGO_GARIBALDI.png";
import shows from "../assets/img/controlar.png";
import search from "../assets/img/busqueda.png";

const apiURL = process.env.REACT_APP_API_URL;

const PendingOrder = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchBar = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiURL}/api/orders/pending`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Error al obtener pedidos");
      }
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Error al obtener pedidos:", error);
      setError("Error al cargar los pedidos");
    } finally {
      setLoading(false);
    }
  };

  const handleOrder = async (orderId) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${apiURL}/api/orders/bar/${orderId}/complete`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id_orden: orderId }),
        }
      );

      if (!response.ok) {
        throw new Error("Error al actualizar el pedido");
      }
      await fetchBar();
    } catch (error) {
      console.error("Error al completar el pedido:", error);
      setError("Error al completar el pedido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBar();
  }, []);

  const filteredBarOrders = orders.filter((order) =>
    searchTerm
      ? order.numero_mesa.toString().includes(searchTerm.toString())
      : true
  );

  return (
    <div>
      <header className="header-admin">
        <Link to="/login">
          <img className="Iso_logo" src={Isologo} alt="Isologo" />
        </Link>
      </header>
      <section className="Container-admin">
        <div className="background-admin">
          <h1 className="U1">Pendiente por Entregar</h1>
          <div className="form-kitchen">
            <div className="search-cont">
              <input
                className="input-search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por número de mesa"
                type="number"
              />
              <button type="submit" className="search-button">
                <img src={search} alt="Buscar" />
              </button>
            </div>
            <div className="orders">
              {loading && <div className="loading">Cargando...</div>}
              {error && <div className="error">{error}</div>}

              {!loading && !error && filteredBarOrders.length === 0 && (
                <p className="label-1">No hay pedidos disponibles</p>
              )}

              {filteredBarOrders.map((order) => (
                <div key={order.id_orden} className="order-item">
                  <label className="item">Mesa {order.numero_mesa}</label>
                  <label className="item">{order.nombre_producto}</label>
                  <label className="item">Cantidad {order.cantidad}</label>
                  <label className="item">{order.comentarios}</label>
                  <img
                    className="show"
                    src={shows}
                    alt="Completar pedido"
                    disabled={loading}
                    onClick={() => handleOrder(order.id_orden)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PendingOrder;
