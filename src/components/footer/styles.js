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
    width: inherit;
    color: white;
    font-size: 1.2rem;
    text-align: center;

    a {
      color: inherit;
      font-weight: bold;
      text-decoration: none;
    }
  }

  @media (max-width: 867px) {
    .socials {
      a{
        font-size: 4rem;
      }
    }
  }

`
