import React from 'react'
import { ContainerStyled, ContentStyled, GridStyled } from './styles'
import { Link } from 'react-router-dom'
import cheese1 from '../../../img/queijos/img1.jpg'
import cheese2 from '../../../img/queijos/img2.jpg'
import cheese3 from '../../../img/queijos/img3.jpg'
import cheese4 from '../../../img/queijos/img5.jpeg'
import cheese5 from '../../../img/queijos/img7.jpg'
import cheese6 from '../../../img/queijos/img8.jpg'
import cheese7 from '../../../img/queijos/img9.jpg'
import cheese8 from '../../../img/queijos/img10.jpg'
import cheese9 from '../../../img/queijos/img11.jpg'
import cheese10 from '../../../img/queijos/img12.jpg'
import cheese11 from '../../../img/queijos/img13.jpg'
import cheese12 from '../../../img/queijos/img14.jpg'
import cheese13 from '../../../img/queijos/img21.jpeg'
import cheese14 from '../../../img/queijos/img22.jpeg'
import cheese15 from '../../../img/queijos/img23.jpeg'
import cheese16 from '../../../img/queijos/img24.jpeg'
import cheese17 from '../../../img/queijos/img26.jpeg'
import cheese18 from '../../../img/queijos/img27.jpeg'
import cheese19 from '../../../img/queijos/img28.jpeg'
import cheese20 from '../../../img/queijos/img29.jpeg'
import cheese21 from '../../../img/queijos/img30.jpeg'



export default function Cheese() {
  return (
    <ContainerStyled>
        <ContentStyled>

          <h2>Entre em 
            <Link className='link' to="/contact"> contato </Link> para saber quais opções e preços temos disponíveis.</h2>

          <GridStyled>
            
            <img src={cheese1} alt="queijo" />
            <img src={cheese2} alt="queijo" />
            <img src={cheese3} alt="queijo" />
            <img src={cheese4} alt="queijo" />
            <img src={cheese5} alt="queijo" />
            <img src={cheese6} alt="queijo" />
            <img src={cheese7} alt="queijo" />
            <img src={cheese8} alt="queijo" />
            <img src={cheese9} alt="queijo" />
            <img src={cheese10} alt="queijo" />
            <img src={cheese11} alt="queijo" />
            <img src={cheese12} alt="queijo" />
            <img src={cheese13} alt="queijo" />
            <img src={cheese14} alt="queijo" />
            <img src={cheese15} alt="queijo" />
            <img src={cheese16} alt="queijo" />
            <img src={cheese17} alt="queijo" />
            <img src={cheese18} alt="queijo" />
            <img src={cheese19} alt="queijo" />
            <img src={cheese20} alt="queijo" />
            <img src={cheese21} alt="queijo" />

          </GridStyled>
          
        </ContentStyled>
    </ContainerStyled>
  )
}
