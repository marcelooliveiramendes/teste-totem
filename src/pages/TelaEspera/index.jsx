import React from 'react'
import { useState } from 'react';
import bgCayo from '../../img/cayo.png'
import bgTaps from '../../img/taps.png'
import bgErik from '../../img/erik.png'
import festa from '../../img/festa.png'
import logo from '../../img/logo.png'
import {motion} from 'framer-motion'

export const TelaEspera = () => {

    const [count, setCount] = useState(1)

    const hide = () => {
        document.querySelector(".container").style.display = 'none';
    }
    setTimeout(() => {
        setCount(count + 1)
         if(count === 3){
        setCount(1)
      }
    }, 8000);
  return (
        <motion.div className='container' onClick={hide}
        
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
            {/* {count === 1 && (<img src={bgCayo} alt='' className='imageBackgrond'  cache-control="max-age=2592000" />)}
            {count === 2 && (<img src={bgTaps} alt='' className='imageBackgrond'  cache-control="max-age=2592000" />)}
            {count === 3 && (<img src={bgErik} alt='' className='imageBackgrond'  cache-control="max-age=2592000" />)} */}
            <img src={bgErik} alt='' className='imageBackgrond'  cache-control="max-age=2592000" />
            <div className='containerText'>
                {/* <h2>Toque na tela para iniciar</h2> */}
                <img src={festa} alt="" srcset="" />
            </div>
        </motion.div>

  )
}
