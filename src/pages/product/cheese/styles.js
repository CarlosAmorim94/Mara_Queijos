import styled from "styled-components";

export const Container = styled.main`

  background-image: var(--background); 
  background-color: #cccccc;
  height: auto;
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
      margin: 15rem 0;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 2rem;
      padding: 2rem 0;

      h2{
        color: white;
      }

      .grid {
        margin: 2rem ;
        display: grid;
        align-items: center;
        justify-content: center;
        grid-template-columns: repeat(7, 10vw);
        

        img {
          width: 95%;
          height: 95%;
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