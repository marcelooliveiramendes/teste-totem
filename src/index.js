import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.scss';
import bgCayo from './img/cayo.png'
import bgTaps from './img/taps.png'
import bgErik from './img/erik.png'
import { useState } from 'react';
import { Home } from './pages/Home';
import Cadastro from './pages/Cadastro';
import Categorias from './pages/Categorias';
import { CategoriasHome } from './pages/CategoriasHome';
import { Setor } from './pages/Setor';
import { Confirmacao } from './pages/Confirmacao';
import { MinhasSolicitacoes } from './pages/MinhasSolicitacoes';

const App = () => {
  // let timerId; // ID do temporizador
  const [count, setCount] = useState(1)
  // document.querySelector("#telaEspera").style.display = 'none';

  // function funcaoSemClique() {
  //   console.log("Você ficou muito tempo sem clicar!");

  //   document.querySelector("#telaEspera").style.display = 'block';
  // }

  // function reiniciarTemporizador() {
  //   clearTimeout(timerId); 
  //   timerId = 
  // }

  // window.addEventListener("click", reiniciarTemporizador);
  // document.addEventListener("DOMContentLoaded", reiniciarTemporizador);

  // document.querySelector(".container").addEventListener('click', () => {console.log('teste')})

  setTimeout(() => {
    setCount(count + 1)

    if(count === 3){
      setCount(1)
    }
  }, 3000); 

  const hide = () => {
    document.querySelector(".container").style.display = 'none';
  }

  return (
    <>
      <div className='container' onClick={hide}>
        {count === 1 && (<img src={bgCayo} alt='' className='imageBackgrond'  cache-control="max-age=2592000" />)}
        {count === 2 && (<img src={bgTaps} alt='' className='imageBackgrond'  cache-control="max-age=2592000" />)}
        {count === 3 && (<img src={bgErik} alt='' className='imageBackgrond'  cache-control="max-age=2592000" />)}
        
        <div className='containerText'>
          <h2>Toque na tela para iniciar</h2>
        </div>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            
          <Route path="/login" element={<Cadastro />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/categoriasHome" element={<CategoriasHome />} />
          <Route path="/setor/:name" element={<Setor />}/>
          <Route path="/confirmacao" element={<Confirmacao />}/>
          <Route path="/minhasSolicitacoes" element={<MinhasSolicitacoes />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);