import React from 'react'
import { Title } from '../../components/Title'
import confirmacao from '../../img/check-mark-verified.gif'
import './confirmacao.scss'
import { Link } from 'react-router-dom'

export const Confirmacao = () => {
  return (
    <div className='confirmacaoContainer'>
        <Title title='Obrigado!' />
        <p>Sua solicitação foi enviada para os responsáveis!</p>
        <img src={confirmacao} alt="" srcset="" />
        <Link to='/'>
            <button className='btnMenu'>Voltar ao menu</button>
        </Link>
    </div>
  )
}
