import styled from "styled-components";

export const Container = styled.footer`

  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0,0,0, 0.5);


  .socials {
    display: flex;
    flex-direction: row;    
    margin-top: 2rem;

    a {
      margin: 1.5rem ;
      font-size: 2.5rem;
      text-decoration: none;

      .facebook {
        color: blue;
      }

      .whatsapp {
        color: green;
      }
    }
  }
`