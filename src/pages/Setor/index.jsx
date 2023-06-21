import React from 'react'
import './setor.scss'
import { Link, useParams } from "react-router-dom";
import { Title } from '../../components/Title';
import {motion} from 'framer-motion'

export const Setor = () => {
    let parametros = useParams();
    let titulo = ''

    switch(parametros.name){
        case 'cesta-basica':
            titulo = 'Cesta Básica'
            break;
        case 'vale-trasporte':
            titulo ='Vale Transporte'
            break;
        case 'convenio-medico':
            titulo = 'Convênio Médico'
            break;
        case 'convenio-farmacia':
            titulo = 'Convênio Farmácia'
            break;
        case 'pagamento':
            titulo = 'Pagamento'
            break;
        case 'conta-bancaria':
            titulo = 'Conta Bancária'
            break;
        case 'cargos-salarios':
            titulo = 'Cargos e Salários'
            break;
        case 'refeicao':
            titulo = 'Refeição'
            break;
        case 'premiacao':
            titulo = 'Premiação'
            break;
        default:
            titulo = ''
            break;
    }

  return (
    <motion.div className='setorContainer' 
    initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        <div className='voltarBox'>
            <Link to="/categoriasHome">
                <button className='voltarBtn'>Voltar</button>
            </Link>
        </div>
        <Title title={titulo}/>
        <div className='inputBox'>
            <p>Insira as informações sobre a solicitação</p>
            <textarea name="" id=""></textarea>
        </div>

        <div className='btnArea'>
            <Link to='/categorias'>
                <button className='cancelarBtn'>Cancelar</button>
            </Link>
            <Link to='/confirmacao'>
                <button className='salvarBtn'>Salvar</button>
            </Link>
        </div>
    </motion.div>
  )
}
