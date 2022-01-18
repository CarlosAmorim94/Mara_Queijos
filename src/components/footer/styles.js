import styled from "styled-components";

export const Container = styled.footer`

  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #1C1C1C;


  .socials {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 1rem;
    width: inherit;
    color: white;

    a {
      margin: 0 1.5rem ;
      font-size: 2.5rem;
      text-decoration: none;
    }

    a:visited{
      color: inherit;
    }

    a:link {
      color: inherit;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    color: white;
    font-size: 1.2rem;
  }
`