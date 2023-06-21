import React from 'react'
import { Title } from '../../components/Title'
import './home.scss'
import feedback from '../../img/feedback.png'
import solicitacao from '../../img/solicitacao.png'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='homeContainer'>
        <Title title="Solicitações e Reclamações/Denúncias" />
        <div class='row'>
            <Link to='/login'>
                <div class="card">
                    <img src={solicitacao} alt="" srcset="" class="imageBackground"/>
                    <h3>Inicie uma solicitação</h3>
                </div>
            </Link>
            <Link to='/categorias'>
                <div class="card">
                    <img src={feedback} alt="" srcset="" class="imageBackground"/>
                    <h3>Faça uma reclamação/denúncia</h3>
                    <p>Modo anônimo</p>
                </div>
            </Link>
        </div>

    </div>
  )
}
