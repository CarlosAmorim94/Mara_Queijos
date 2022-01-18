import React from 'react'
import { Container } from './style'
import queijo from '../../img/queijos/capa.jpeg'
import vinho from '../../img/vinhos/capa.jpg'
import doce from '../../img/doces/capa.jpg'
import { Link } from 'react-router-dom'


export default function Products() {
  return (
    <Container>

      <section>

        <div>
          <img src={queijo} alt="queijos" />
          <div className="texts">
            <h1>Queijos</h1>
            <Link className="links" to="/">Ver mais</Link>
          </div>
        </div>

        <div>
          <img src={vinho} alt="vinhos" />
          <div className="texts">
            <h1>Vinhos</h1>
            <Link className="links" to="/">Ver mais</Link>
          </div>
        </div>

        <div>
          <img src={doce} alt="doces" />
          <div className="texts">
            <h1>Doces</h1>
            <Link className="links" to="/">Ver mais</Link>
          </div>
        </div>

      </section>

    </Container>
  )
}
