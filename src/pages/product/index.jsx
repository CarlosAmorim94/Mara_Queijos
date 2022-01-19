import React from 'react'
import { CardtStyle, ContentStyle } from './style'
import queijo from '../../img/queijos/capa.jpeg'
import vinho from '../../img/vinhos/capa.jpg'
import doce from '../../img/doces/capa.jpg'
import { Link } from 'react-router-dom'


export default function Products() {
  return (
      <ContentStyle>

        <CardtStyle>
          <img src={queijo} alt="queijos" />
          <div className="texts">
            <h1>Queijos</h1>
            <Link className="links" to="/cheese">Ver mais</Link>
          </div>
        </CardtStyle>

        <CardtStyle>
          <img src={vinho} alt="vinhos" />
          <div className="texts">
            <h1>Vinhos</h1>
            <Link className="links" to="/wine">Ver mais</Link>
          </div>
        </CardtStyle>

        <CardtStyle>
          <img src={doce} alt="doces" />
          <div className="texts">
            <h1>Doces</h1>
            <Link className="links" to="/candy">Ver mais</Link>
          </div>
        </CardtStyle>

      </ContentStyle>
  )
}
