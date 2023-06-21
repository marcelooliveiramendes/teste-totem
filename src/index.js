import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';

import { useState, useEffect } from 'react';

import { TelaEspera } from './pages/TelaEspera';
import { AnimatedRoutes } from './components/AnimatedRoutes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [isActive, setIsActive] = useState(true);
  // const location = useLocation()

  useEffect(() => {
    let timeoutId;

    const resetTimeout = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        setIsActive(true);
      }, 15 .000); // 5000 milliseconds = 5 seconds
    };

    const handleUserActivity = () => {
      console.log("TESTE");
      setIsActive(false);
      resetTimeout();

    };
    
    // Adicione os eventos de interação desejados aqui
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);
    window.addEventListener('touchstart', handleUserActivity);
    
    resetTimeout();
    
    // Limpeza de eventos ao desmontar o componente
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
      window.removeEventListener('touchstart', handleUserActivity);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        {isActive ? (
            <TelaEspera />
        ) : null}
        <AnimatedRoutes />
      </BrowserRouter>

      
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);