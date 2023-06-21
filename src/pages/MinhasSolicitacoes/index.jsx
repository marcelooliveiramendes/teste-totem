import React from 'react'
import './minhasSolicitacoes.scss'
import { Title } from '../../components/Title'
import { Link } from 'react-router-dom'

export const MinhasSolicitacoes = () => {
  return (
    <div className='solicitacoesContainer'>
        <div className='voltarBox'>
            <Link to="/categoriasHome">
                <button className='voltarBtn'>Voltar</button>
            </Link>
        </div>
        <Title title='Minhas solicitações' />

        <div className="card">
            <div className="card_header">
                <h3>Vale Refeição</h3>
                <p>14:20 20/06/2023</p>
            </div>
            <div className="card_content">
                <h4>Observações</h4>
                <p>Hoje, infelizmente, me deparei com um pequeno contratempo envolvendo meu vale-refeição. Ao chegar ao restaurante para utilizar o benefício, fui surpreendido com a informação de que o meu cartão apresentava um problema. A máquina não conseguia ler as informações corretamente e, consequentemente, não era possível realizar o pagamento.</p>
            </div>
        </div>
       
    </div>
  )
}
