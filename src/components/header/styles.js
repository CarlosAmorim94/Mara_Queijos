import styled from "styled-components";

export const Container = styled.nav`

  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  margin: auto;
  padding: 0 5rem;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255,255,255, 0.4);
  

  img {
    width: 10rem;
    height: auto;
  }

  nav {
    

    a {
      margin: 0 2rem;
      font-size: 2rem;
      text-decoration: none;
      font-weight: 600;
      transition: all ease 0.5s;
      color: var(--gray-800);
    }


    a:hover {
      color: black;
      text-decoration: underline;
      font-weight: 5000;
    }
  }

  div {
    width: 17rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;

    h2 {
      font-weight: 1000;
      color: var(--gray-500);
    }
  }



`