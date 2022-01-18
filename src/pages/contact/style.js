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
    padding-top: 7rem;

    .card {
      width: 40vw;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: auto;
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

    .mapouter {
      width: 40vw;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: auto;
      padding-bottom: 1rem;
      background-color: rgba(0,0,0, .8);
      border-radius: 2rem;

      h1 {
        font-size: 2.5rem;
        color: var(--white);
        margin-bottom: 1rem;
      }

      .gmap_canvas {
      overflow:hidden;
      
      height:500px;
      width:500px;
      border-radius: 2rem;
      }

    }

  }


`