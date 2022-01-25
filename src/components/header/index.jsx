import React, { useState } from 'react'
import { HeaderStyled, LogoStyled, MenuStyled, MenuContentStyled, MenuIconStyled } from './styles'
import LogoImg from "../../img/logo.png"
import { Link } from "react-router-dom";
import menu from '../../img/menu.svg'

export default function Header() {

  const [show, setShow] = useState(false); // armazenar estado de renderização do menu.

  const toggleMenu = () => { //Se clicar, seta a renderização do menu como diferente da atual, que é false (se torna true).
    setShow(!show)
  }

  return (
    <HeaderStyled>
        <LogoStyled>
          <Link to="/">
              <img src={LogoImg} alt="Logotipo" />
          </Link>
        </LogoStyled>

        <MenuStyled show={show}>
          <Link to="/">
            <button onClick={toggleMenu}>HOME</button>
          </Link>

          <Link to="/products">
            <button onClick={toggleMenu}>PRODUTOS</button>
          </Link>

          <Link to="/contact">
            <button onClick={toggleMenu}>CONTATO</button>
          </Link>
      
        </MenuStyled>

        <MenuContentStyled>
          <MenuIconStyled onClick={toggleMenu} src={menu} width="32px"/>
        </MenuContentStyled>

       
      
    </HeaderStyled>
  )
}
