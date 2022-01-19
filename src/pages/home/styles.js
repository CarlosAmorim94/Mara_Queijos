import styled from "styled-components";

export const ContainerStyled = styled.section`

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 12rem;

  @media (max-width: 867px) {
    justify-content: center;
  }
`

export const CenterCardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border-radius: 2rem;
  width: 40vw;
  height: auto;  
  

  h1 {
    color: var(--white);
    text-align: center;
    font-size: 5rem;
    width: inherit;
  }

  p {
    font-size: 2rem;
    color: var(--white);
    margin: 1rem;
    text-align: center;
  }

  button {
    cursor: pointer;
    padding: 0.5rem 2rem;
    margin: 1rem;
    border-radius: 1rem;
    border: 2px solid var(--white);
    background-color: rgba(0,0,0, 0.2);
    transition: all ease 0.2s;
    color: var(--white);
    font-size: 1.5rem;
    font-weight: bold;
  }

  button:hover {
      background-color: rgba(0,0,0, 0.8);
  }

  @media (max-width: 867px) {
    width: 80vw;
    background-color: rgba(0,0,0, 0.4);

    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1rem;
    }
  }

`