import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import Main from "./components/Main.jsx";
import Body from "./components/Body.jsx";
import Styles from "./components/Styles.css";
import StylesL from "./components/StylesL.css";
import Front_Back_Styles from "./components/Front-Back-Styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shows from "./components/Shows.jsx";
import Groups from "./components/Groups.jsx";
import Events from "./components/Events.jsx";
import Cart from "./components/cart.jsx";
import MariachiBanda from "./components/MariachiBanda.jsx";
import NuevaGeneracion from "./components/NuevaGeneracion.jsx";
import FronteraPopular from "./components/FronteraPopular.jsx";
import Login from "./components/Login.jsx";
import SingUp from "./components/SingUp.jsx";
import Reservations from "./components/Reservations.jsx";

<<<<<<< HEAD
import Reservaciones_Info from './components/Reservaciones_Info.jsx';
import Reservaciones_F from './components/Reservaciones_Final.jsx';
import Order_One from "./components/front-waiter1.jsx";
import New_Order from './components/new-order.jsx';



import AdminMain from "./components/AdminMain.jsx";
import AdminUsers from "./components/AdminUsers.jsx";
import AdminReser from "./components/AdminReser.jsx";
import AdminMulti from "./components/AdminMulti.jsx";
import { ReservationProvider } from './components/ReservationsContext.jsx';
=======
import Reservaciones_Info from './components/Reservaciones_Info.js';
import Reservaciones_F from './components/Reservaciones_Final.js';
import Order_One from "./components/front-waiter1.js";
import New_Order from './components/new-order.js';

import Reservations from "./components/Reservations.js";


import AdminMain from "./components/AdminMain.js";
import AdminUsers from "./components/AdminUsers.jsx";
import AdminReser from "./components/AdminReser.js";
import AdminComent from "./components/AdminComent.js";
import AdminMulti from "./components/AdminMulti.js";
import { ReservationProvider } from './components/ReservationsContext.js';
>>>>>>> 44ccb33e8fd9990f7a5d3827a1edc6a575f1de0f
import ReactDOM from 'react-dom/client';
import { useState } from "react";



const App = () => {
  return (
    <ReservationProvider> {/* Envolvemos todo en el proveedor de contexto */}
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
          <Route path="/reservations_info" element={<Reservaciones_Info />} />
          <Route path="/reservations_F" element={<Reservaciones_F />} />
          <Route path="/order_one" element={<Order_One />} />
          <Route path="/new_order" element={<New_Order />} />
          <Route path="/admin-main" element={<AdminMain />} />
          <Route path="/admin-users" element={<AdminUsers />} />
          <Route path="/admin-reservation" element={<AdminReser />} />
          <Route path="/admin-multimedia" element={<AdminMulti />} />
        </Routes>
    </ReservationProvider>
  );
}
export default App;
