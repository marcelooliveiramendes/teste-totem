import React from 'react'
import {Routes, Route, useLocation } from 'react-router-dom'
import { Home } from '../../pages/Home';
import Cadastro from '../../pages/Cadastro';
import Categorias from '../../pages/Categorias';
import { CategoriasHome } from '../../pages/CategoriasHome';
import { Setor } from '../../pages/Setor';
import { Confirmacao } from '../../pages/Confirmacao';
import { MinhasSolicitacoes } from '../../pages/MinhasSolicitacoes';

import {AnimatePresence} from 'framer-motion'

export const AnimatedRoutes = () => {
    const location = useLocation()

  return (
    <AnimatePresence>

        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
                
            <Route path="/login" element={<Cadastro />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/categoriasHome" element={<CategoriasHome />} />
            <Route path="/setor/:name" element={<Setor />}/>
            <Route path="/confirmacao" element={<Confirmacao />}/>
            <Route path="/minhasSolicitacoes" element={<MinhasSolicitacoes />}/>
        </Routes>
    </AnimatePresence>
  )
}
