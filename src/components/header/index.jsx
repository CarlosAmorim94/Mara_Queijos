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
          <Link to="/">
            <div className="box-1">
              <div className="btn btn-one">
                <span>HOME</span>
              </div>
            </div>
          </Link>

          <Link to="/products">
            <div className="box-1">
              <div className="btn btn-one">
                <span>PRODUTOS</span>
              </div>
            </div>
          </Link>

          <Link to="/contact">
          <div className="box-1">
              <div className="btn btn-one">
                <span>CONTATO</span>
              </div>
            </div>
          </Link>
        </nav>
      
    </Container>
  )
}
