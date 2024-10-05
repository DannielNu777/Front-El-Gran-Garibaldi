import React, {Component} from  'react';
import logo from './logo.png';
import './App.css';
import Main from './components/Main.jsx';
import Body from './components/Body.jsx';
import Styles from './components/Styles.css';
import  {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Shows from './components/Shows.jsx';
import Groups from './components/Groups.jsx';
import Events from './components/Events.jsx';
import Cart from './components/cart.jsx';
import MariachiBanda from './components/MariachiBanda.jsx';
import NuevaGeneracion from './components/NuevaGeneracion.jsx';
import FronteraPopular from './components/FronteraPopular.jsx';

function App() {
  return (
    
      
      <Routes>
        <Route path ="/" element ={<Main />}></Route>
        <Route path ="/body" element ={<Body />}></Route>
        <Route path ="/shows-e-invitados" element={<Shows />}></Route>
        <Route path ="/carta" element={<Cart />}></Route>
        <Route path ="/groups" element={<Groups />}></Route>
        <Route path ="/events" element={<Events />}></Route>
        <Route path ="/mariachi_banda" element={<MariachiBanda />}></Route>
        <Route path ="/new_generation" element={<NuevaGeneracion />}></Route>
        <Route path ="/frontera_popular" element={<FronteraPopular />}></Route>
      </Routes>
    
  );
}
export default App;
