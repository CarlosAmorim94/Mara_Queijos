import React from 'react'
import { Container } from './styles'
import LogoImg from "../../img/logo.png"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
        <div>
          <Link to="/">
              <img src={LogoImg} alt="Logotipo" />
          </Link>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Produtos</Link>
          <Link to="/contact">Contato</Link>
        </nav>
      
    </Container>
  )
}
