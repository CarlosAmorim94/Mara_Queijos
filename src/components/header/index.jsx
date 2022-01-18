import React from 'react'
import { Container } from './styles'
import LogoImg from "../../img/logo.png"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container className='header'>
        <div className='logo'>
          <Link to="/">
              <img src={LogoImg} alt="Logotipo" />
          </Link>
        </div>

        <nav>
          <Link to="/">
            <button>HOME</button>
          </Link>

          <Link to="/products">
            <button>PRODUTOS</button>
          </Link>

          <Link to="/contact">
            <button>CONTATO</button>
          </Link>
      
        </nav>
      
    </Container>
  )
}
