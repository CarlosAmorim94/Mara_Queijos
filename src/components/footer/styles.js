import styled from "styled-components";

export const Container = styled.footer`

  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0,0,0, 0.5);


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

      a.facebook {
        color: blue;
      }
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
  }
`