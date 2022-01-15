import React from 'react';
import { Container } from './styles';
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <Container>

      <div className="socials">

        <a className="facebook" href="https://www.facebook.com/marah.rodrigues.7524">
          <FaFacebook />
        </a>

        <a className="whatsapp" href="https://api.whatsapp.com/send?phone=5514982014282">
          <FaWhatsapp />
        </a>
        
      </div>

      <div className="text">
        <p>2022 Mara Queijos&copy; - Todos os direitos reservados</p>
        <p>Site desenvolvido por: <a href="https://www.linkedin.com/in/carlosamorim94/">Carlos Amorim</a></p>
      </div>

    </Container>
  )
}
