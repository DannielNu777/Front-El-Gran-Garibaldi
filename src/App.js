import React, {Component} from  'react';
import logo from './logo.png';
import './App.css';
import Main from './components/Main.js';
import Body from './components/Body.js';
import Styles from './components/Styles.css';
import  {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Shows from './components/Shows.js';

function App() {
  return (
    
      
      <Routes>
        <Route path ="/" element ={<Main />}></Route>
          <Route path ="/body" element ={<Body />}></Route>
            <Route path ="/shows-e-invitados" element={<Shows />}></Route>
      </Routes>
    
  );
}
export default App;