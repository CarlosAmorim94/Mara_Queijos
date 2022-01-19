import styled from "styled-components";

export const HeaderStyled = styled.header`

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  display: flex;
  flex-direction: row;
  padding: 0 3rem;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.4);
`
  
export const LogoStyled = styled.div`
  width: 10rem;
  max-width: 130px;
  min-width: 50px;
  margin: 1rem 0;

  img {
    width: 100%;
  }
`

export const MenuStyled = styled.nav`
    display: flex; // Naturalmente exibido ao carregar página
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: auto;
    
    button {
      background-color: transparent;
      border: transparent;
      color: var(--white);
      font-size: 2rem;
      margin: 0 2rem;
      width: 100%;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    @media (max-width: 867px) { // Telas pequenas, padrão 'none', mas se a função show for 'true' ele aparece com a formatação abaixo.
      display: ${ ( { show } ) => show ? 'flex' : 'none' };
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 4;
      background-color: rgba(0,0,0, .95) ;
      overflow: hidden;
      height: 80vh;
      width: 100vw;

      button {
        font-size: 3rem;
        margin-top: 2rem;
        border: 1px solid #fff;
        border-radius: 1rem;
        width: 80vw;
      }
    }

  `

export const MenuContentStyled = styled.div`
  position: flex;
  width: auto;
  z-index: 4;
  padding: 10px;
  display: none; // Naturalmente escondido.

  @media (max-width: 867px) { // Telas pequenas ele aparece.
    display: flex;
    align-items: center;
  }

`
export const MenuIconStyled = styled.img`
  cursor: pointer;
`