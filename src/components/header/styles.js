import styled from "styled-components";

export const Container = styled.header`

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  display: flex;
  flex-direction: row;
  padding: 0 5rem;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.4);
  

  img {
    width: 10rem;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
      font-size: 2rem;
      font-weight: 3000;
    }
    

    button {
      background-color: transparent;
      border: transparent;
      color: var(--white);
      font-size: 2rem;
      width: 15vw;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    

  }

  @media (max-width: 800px) {

    width: 100%;
    padding: 0 1vw;

    img {
      width: 20vw;
      margin-right: auto;
    }

    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 70%;
      margin-right: 1vw;
    }

    button {
      width: 100%;
      cursor: pointer;      
    }
   

  }

`