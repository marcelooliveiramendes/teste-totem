import React from 'react'
import './categoriasHome.scss'
import { Title } from '../../components/Title'
import start from '../../img/start.png'
import search from '../../img/search.png'
import { Link } from 'react-router-dom'

export const CategoriasHome = () => {
  return (
    <div className='catHomeContainer'>
        <div className='voltarBox'>
            <Link to="/categoriasHome">
                <button className='voltarBtn'>Voltar</button>
            </Link>
        </div>
        <p>Olá, <strong>MFX!</strong></p>
        <Title title='Selecione uma opção' />
        <div class='row'>
            <Link to='/categorias'>
                <div class="card">
                    <img src={start} alt="" srcset="" class="imageBackground"/>
                    <h3>Iniciar nova solicitação</h3>
                </div>
            </Link>
            <Link to='/minhasSolicitacoes'>
                <div class="card">
                    <img src={search} alt="" srcset="" class="imageBackground"/>
                    <h3>Minhas solicitação</h3>
                </div>
            </Link>
            
        </div>
        <Link to="/"><button>Sair</button></Link>
    </div>
  )
}
