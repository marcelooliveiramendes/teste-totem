import React from 'react'
import './cadastro.scss'
import { Title } from '../../components/Title'
import { Link } from 'react-router-dom'

const Cadastro = () => {
  return (
    <div class="cadastroContainer">
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
    </div>
  )
}

export default Cadastro