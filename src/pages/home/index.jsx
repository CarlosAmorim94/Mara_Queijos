import React from 'react'
import { CenterCardStyled, ContainerStyled } from './styles'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <ContainerStyled>

        <CenterCardStyled>

          <h1>QUEIJOS E VINHOS</h1>

          <p>Diversas opções deliciosas! Qualidade, sabor e um ótimo preço!</p>

          <Link to="/products">
            <button>Ver mais</button>
          </Link>

        </CenterCardStyled>   

    </ContainerStyled>
  )
}
