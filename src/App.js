import React from 'react';
import './pages/global.css'
import { FiLogIn } from 'react-icons/fi';
import Logon from './pages/Logon';

import heroes from '../src/assets/heroes.png';
import logo from '../src/assets/logo.svg';


function App() {
  return (
      <div className="logon-container">
        <section className="form">
          <img src={logo} alt="Be The Hero" />

          <form>
            <h1>Faca seu Logon</h1>

            <input placeholder="Sua ID" />
            <button className="button" type="submit">Entrar</button>

            <a href="/register">
              <FiLogIn  size={16} color="#E02041" />
              Nao tenho cadastro
            </a>
          </form>          
        </section>
    
        <img src={heroes} alt="Heroes" />
      </div>

  );
}


export default App;
