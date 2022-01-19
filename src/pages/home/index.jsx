import React from 'react'
import { ContainerStyle } from './styles'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <ContainerStyle>

        <div className="center-card">

          <h1>QUEIJOS E VINHOS</h1>

          <p>Diversas opções deliciosas! Qualidade, sabor e um ótimo preço!</p>

          <Link to="/products">
            <button>Ver mais</button>
          </Link>

        </div>   

    </ContainerStyle>
  )
}
