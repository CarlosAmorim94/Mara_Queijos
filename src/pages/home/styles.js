import styled from "styled-components";

export const Container = styled.main`

  background-image: var(--background); 
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 90vh;
  width: 100vw;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

  section {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .center-card {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 2rem;
      border-radius: 2rem;
      width: 40vw;
      height: auto;

      @media (max-width: 540px) {
        .center-card {
          font-size: 1rem;
          width: 80vw
        }
      }   
      

      h1 {
        color: var(--white);
        text-align: center;
        font-size: 5rem;
        width: inherit;
      }

      p {

        font-size: 2rem;
        color: var(--white);
        margin: 2rem;
      }

      button {
        cursor: pointer;
        padding: 0.5rem 2rem;
        margin: 1rem;
        border-radius: 1rem;
        border: 2px solid var(--white);
        background-color: rgba(0,0,0, 0.2);
        transition: all ease 0.2s;
        color: var(--white);
        font-size: 1.5rem;
        font-weight: bold;
      }

      button:hover {
          background-color: rgba(0,0,0, 0.8);
        }
    }
  }

  
  
`