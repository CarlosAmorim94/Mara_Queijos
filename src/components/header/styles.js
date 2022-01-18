import styled from "styled-components";

export const Container = styled.nav`

  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 0 5rem;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.4);
  

  img {
    width: 10rem;
    height: auto;
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
    

    div[class*=box] {
      height: 33.33%;
      width: 100%; 
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .btn {
      line-height: 50px;
      height: 50px;
      text-align: center;
      width: 250px;
      cursor: pointer;
    }

    .btn-one {
    color: white;
    transition: all 0.3s;
    position: relative;
    font-weight: bold;
    }
    .btn-one span {
      transition: all 0.3s;
    }
    .btn-one::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0;
      transition: all 0.3s;
      border-top-width: 3px;
      border-bottom-width: 3px;
      border-top-style: solid;
      border-bottom-style: solid;
      border-top-color: var(--white);
      border-bottom-color: var(--white);
      transform: scale(0.1, 1);
    }
    .btn-one:hover span {
      letter-spacing: 2px;
    }
    .btn-one:hover::before {
      opacity: 1; 
      transform: scale(1, 1); 
    }
    .btn-one::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: all 0.3s;
      background-color: rgba(255, 255, 255, 0);
    }
    .btn-one:hover::after {
      opacity: 0; 
      transform: scale(0.1, 1);
    }

  }

  @media (max-width: 540px) {
    
  }

`