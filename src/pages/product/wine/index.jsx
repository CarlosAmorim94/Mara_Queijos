import React from 'react'
import { ContainerStyled, ContentStyled } from './styles'
import wine1 from '../../../img/vinhos/img19.jpg'


import { Link } from 'react-router-dom'


export default function Wine() {
  return (
    <ContainerStyled>

        <ContentStyled>

          <h2>Entre em 
            <Link className='link' to="/contact"> contato </Link> para saber quais opções e preços temos disponíveis.</h2>
            
          <img src={wine1} alt="vinho" />    
         
        </ContentStyled>
        
    </ContainerStyled>
  )
}
