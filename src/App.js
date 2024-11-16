import React, { useEffect } from "react";
import logo from "./logo.png";
import "./App.css";
import Main from "./components/Main.js";
import Body from "./components/Body.js";
import Styles from "./components/Styles.css";
import StylesL from "./components/StylesL.css";
import StylesR from "./components/StylesR.css";
import Front_Back_Styles from "./components/Front-Back-Styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shows from "./components/Shows.js";
import Groups from "./components/Groups.js";
import Events from "./components/Events.js";
import Cart from "./components/cart.js";
import MariachiBanda from "./components/MariachiBanda.js";
import NuevaGeneracion from "./components/NuevaGeneracion.js";
import FronteraPopular from "./components/FronteraPopular.js";
import Login from "./components/Login.js";
import SingUp from "./components/SingUp.js";
import Reservations from "./components/Reservations.jsx";
import AdminMain from "./components/AdminMain.js";
import AdminUsers from "./components/AdminUsers.jsx";
import AdminReser from "./components/AdminReser.js";
import AdminComent from "./components/AdminComent.js";
import AdminMulti from "./components/AdminMulti.js";
import Reservaciones_Info from "./components/Reservaciones_Info.js";
import Reservaciones_F from "./components/Reservaciones_Final.jsx";
import Order_One from "./components/OrderMain.js";
import New_Order from "./components/NewOrder.js";
import Pending_Order from "./components/PendingOrders.js";
import KitchenOrder from "./components/KitchenOrder.js";
import Cash from "./components/Cash.js";
import Bar from "./components/Bar.js";
import { ReservationProvider } from "./components/ReservationsContext.js";
import { ImageProvider } from "./components/ImageContext.js";
import { ComentProvider } from "./components/ComentContext.js";
import ReactDOM from "react-dom/client";
import { useState } from "react";

function App() {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <ComentProvider>
      <ImageProvider>
        <ReservationProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/body" element={<Body />} />
            <Route path="/shows-e-invitados" element={<Shows />} />
            <Route path="/carta" element={<Cart />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/events" element={<Events />} />
            <Route path="/mariachi_banda" element={<MariachiBanda />} />
            <Route path="/new_generation" element={<NuevaGeneracion />} />
            <Route path="/frontera_popular" element={<FronteraPopular />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sing-up" element={<SingUp />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/reservations-info" element={<Reservaciones_Info />} />
            <Route path="/reservations-F" element={<Reservaciones_F />} />
            <Route path="/order-one" element={<Order_One />} />
            <Route path="/new-order" element={<New_Order />} />
            <Route path="/pending-order" element={<Pending_Order />} />
            <Route path="/admin-main" element={<AdminMain />} />
            <Route path="/admin-users" element={<AdminUsers />} />
            <Route path="/admin-reservation" element={<AdminReser />} />
            <Route path="/admin-coment" element={<AdminComent />} />
            <Route path="/admin-multimedia" element={<AdminMulti />} />
            <Route path="/kitchen-order" element={<KitchenOrder />} />
            <Route path="/cash" element={<Cash />} />
            <Route path="/bar" element={<Bar />} />
          </Routes>
        </ReservationProvider>
      </ImageProvider>
    </ComentProvider>
  );
}

export default App;
