import React from 'react'
import { CardStyled, ContactStyled, ContentStyled, MapsStyled } from './style'
import facebookLogo from '../../img/facebook.png'
import whatsappLogo from '../../img/whatsapp.png'

export default function Contact() {
  return (
      <ContentStyled>

        <CardStyled>

          <h1>
            Entre em contato através das redes sociais:
          </h1>
          

          <ContactStyled>
            <a href="https://www.facebook.com/marah.rodrigues.7524">
              <img src={facebookLogo} alt="Facebook Logo" />
            </a>

            <a href="https://api.whatsapp.com/send?phone=5514982014282">
              <img src={whatsappLogo} alt="Whatsapp Logo" />
            </a>

          </ContactStyled>

        </CardStyled>

        <MapsStyled>
          <h1>Nossa Localização:</h1>
          <div class="gmap_canvas">
            <iframe width="500" height="500" id="gmap_canvas" src="https://maps.google.com/maps?ll=-22.8737893,-48.4582015&q=R. Dr. Guimarães, 463&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div> 
        </MapsStyled> 

      </ContentStyled>
  )
}
