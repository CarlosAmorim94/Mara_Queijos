import React from 'react'
import { Container } from './style'
import facebookLogo from '../../img/facebook.png'
import whatsappLogo from '../../img/whatsapp.png'

export default function Contact() {
  return (
    <Container>
      <section>

        <div className="card">

          <h1>
            Entre em contato conosco através das redes sociais:
          </h1>
          

          <div className="contacts">
            <a href="https://www.facebook.com/marah.rodrigues.7524">
              <img src={facebookLogo} alt="Facebook Logo" />
            </a>

            <a href="https://api.whatsapp.com/send?phone=5514982014282">
              <img src={whatsappLogo} alt="Whatsapp Logo" />
            </a>

          </div>

        </div>

      </section>
    </Container>
  )
}
