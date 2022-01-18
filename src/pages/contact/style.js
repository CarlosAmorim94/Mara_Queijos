import styled from "styled-components";

export const Container = styled.section`
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

    .card {
      width: 40vw;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 12vh 1vw;
      padding: 1rem;

      h1 {
        font-size: 2.5rem;
        color: var(--white);
        margin-bottom: 2rem;
      }

      .contacts {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        a {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 50%;
          height: auto;

          img {
            width: 80%;
            height: 80%;
          }
        } 
      }

    }
  }


`