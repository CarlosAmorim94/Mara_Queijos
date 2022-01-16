import React from 'react'
import { Container } from './styles'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <section>

        <div className="center-card">

          <h1>QUEIJOS E VINHOS</h1>

          <p>Diversas opções deliciosas</p>

          <Link to="/products">
            <button>Ver mais</button>
          </Link>

        </div>   

      </section>
    </Container>
  )
}
