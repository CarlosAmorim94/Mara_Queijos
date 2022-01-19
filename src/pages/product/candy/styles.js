import styled from "styled-components";

export const ContainerStyled = styled.section`
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
   
export const ContentStyled = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 90vw;
      height: auto;
      margin: 12rem 0 2rem 0;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 2rem;
      padding: 2rem;

      h2{
        text-align: center;
        color: white;
      }

      .photos {
        margin: 2rem;
        width: inherit;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;

        img {
          margin: 1vw;
          width: 20vw;
          height: 20vw;
          border-radius: 1rem;
        }

        @media (max-width: 867px) {
          img {
          margin: 1vw;
          width: 35vw;
          height: 35vw;
          border-radius: 1rem;
        }
        }
      }
      
      .link {
        text-decoration: none;
        font-weight: bold;
        cursor: pointer;
        color: white;
      }
    }
  
  
`