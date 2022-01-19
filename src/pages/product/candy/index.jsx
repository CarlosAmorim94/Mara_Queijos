import React from 'react'
import { ContainerStyled, ContentStyled } from './styles'
import candy1 from '../../../img/doces/img5.jpg'
import candy2 from '../../../img/doces/img16.jpg'
import candy3 from '../../../img/doces/img17.jpg'
import candy4 from '../../../img/doces/img20.jpeg'

import { Link } from 'react-router-dom'


export default function Candy() {
  return (
    <ContainerStyled>
        <ContentStyled>

          <h2>Entre em 
            <Link className='link' to="/contact"> contato </Link> para saber quais opções e preços temos disponíveis.</h2>

          <div className='photos'>
            
            <img src={candy1} alt="doces" />
            <img src={candy2} alt="doces" />
            <img src={candy3} alt="doces" />
            <img src={candy4} alt="doces" />
          
          </div>
          
        </ContentStyled>
    </ContainerStyled>
  )
}
