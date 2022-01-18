import styled from "styled-components";
import backgroundImg from "../../img/background.jpg"

export const Container = styled.main`

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

    div {
      width: 30vw;
      height: 60vh;
      margin: 1vw;
      justify-content: center;
      align-items: center;
      display: inline-block;
      position: relative;

      img {
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        border-radius: 1rem;
        filter: brightness(50%);
      }
      
      .texts {
        position: absolute;
        top: 5rem;
        right: 0;
        left: -1vw;
        text-align: center;
        height: auto;
        width: inherit;

        h1 {
          color: white;
          font-size: 3rem;
          margin-bottom: 2rem;
        }

        .links {
          cursor: pointer;
          padding: 0.5rem 2rem;
          border-radius: 1rem;
          border: 2px solid var(--white);
          background-color: rgba(0,0,0, 0.2);
          transition: all ease 0.2s;
          color: var(--white);
          font-size: 1.5rem;
          font-weight: bold;
          text-decoration: none;

          &:hover {
            background-color: rgba(0,0,0, 0.8);
          }
        }
      }
    }
  }
  
`