import React from 'react'
import './cadastro.scss'
import { Title } from '../../components/Title'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const Cadastro = () => {
  return (
    <motion.div class="cadastroContainer" 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
      <div className='voltarBox'>
            <Link to="/categoriasHome">
                <button className='voltarBtn'>Voltar</button>
            </Link>
        </div>
        <Title title='Digite seu CPF' />
        <div class='inputs'>
            <input type="text" name="" id="" keyboardType="numeric"/>
            <Link to="/categoriasHome">
                <button>Entrar</button>
            </Link>
        </div>
    </motion.div>
  )
}

export default Cadastro