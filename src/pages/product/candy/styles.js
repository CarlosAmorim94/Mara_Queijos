import styled from "styled-components";

export const Container = styled.main`

  background-image: var(--background); 
  background-color: #cccccc;
  height: 90vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat; 
  background-size: cover;

  section {
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
   

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: auto;
      height: auto;
      margin: 15rem;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 2rem;
      padding: 2rem;

      h2{
        color: white;
      }

      .photos {
        margin: 2rem;
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          margin: 1rem;
          width: 20vw;
          height: 40vh;
          border-radius: 1rem;
        }
      }
      
      .link {
        text-decoration: none;
        font-weight: bold;
        cursor: pointer;
        color: white;
      }
    }
  }
  
`