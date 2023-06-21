import React from 'react'
import './categorias.scss'
import { Title } from '../../components/Title'
import { Link } from 'react-router-dom'
import cestaBasica from '../../img/cesta.png'
import cargo from '../../img/cargo.png'
import bank from '../../img/bank.png'
import wallet from '../../img/wallet.png'
import remedio from '../../img/medicine.png'
import farmacia from '../../img/farmacia.png'
import bus from '../../img/bus.png'
import refeicao from '../../img/fork.png'
import surprise from '../../img/surprise.png'

const Categorias = () => {
  return (
    <div className='categoriasContainer'>
        <div className='voltarBox'>
            <Link to="/categoriasHome">
                <button className='voltarBtn'>Voltar</button>
            </Link>
        </div>
        <Title title='Selecione o setor' />
        <div className="containerSetores">
            <Link to='/setor/cesta-basica'>
                <div class="card">
                    <img src={cestaBasica} alt="" srcset="" class='icon'/>
                    <h3>Cesta Básica</h3>
                </div>
            </Link>
            <Link to='/setor/vale-trasporte'>
                <div class="card">
                <img src={bus} alt="" srcset="" class='icon'/>
                    <h3>Vale Transporte</h3>
                </div>
            </Link>
            <Link to='/setor/convenio-medico'>
                <div class="card">
                    <img src={farmacia} alt="" srcset="" class='icon'/>
                    <h3>Convênio Médico</h3>
                </div>
            </Link>
            <Link to='/setor/convenio-farmacia'>
                <div class="card">
                    <img src={remedio} alt="" srcset="" class='icon'/>
                    <h3>Convênio Farmácia</h3>
                </div>
            </Link>
            <Link to='/setor/pagamento'>
                <div class="card">
                    <img src={wallet} alt="" srcset="" class='icon'/>
                    <h3>Pagamento</h3>
                </div>
            </Link>
            <Link to='/setor/conta-bancaria'>
                <div class="card">
                    <img src={bank} alt="" srcset="" class='icon'/>
                    <h3>Conta Bancária</h3>
                </div>
            </Link>
            <Link to='/setor/cargos-salarios'>
                <div class="card">
                    <img src={cargo} alt="" srcset="" class='icon'/>
                    <h3>Cargos e Salários</h3>
                </div>
            </Link>
            <Link to='/setor/refeicao'>
                <div class="card">
                    <img src={refeicao} alt="" srcset="" class='icon'/>
                    <h3>Refeição</h3>
                </div>
            </Link>
            <Link to='/setor/premiacao'>
                <div class="card">
                    <img src={surprise} alt="" srcset="" class='icon'/>
                    <h3>Premiação</h3>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Categorias