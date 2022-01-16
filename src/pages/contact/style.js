import styled from "styled-components";
import backgroundImg from "../../img/background.jpg"

export const Container = styled.section`
  background-image: url(${backgroundImg}) ;
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
    justify-content: center;
    align-items: center;

    .card {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 1rem;
      padding: 2rem;
      background-color: rgba(0,0,0, 0.5);
      border-radius: 2rem;

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
          width: 20rem;
          height: 20rem;

          img {
            width: 15rem;
            height: 15rem;
          }
        } 
      }

    }
  }


`