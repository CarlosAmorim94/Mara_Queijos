import styled from "styled-components";

export const ContainerStyled = styled.section`
  background-image: var(--background);
  background-color: #cccccc; /* Used if the image is unavailable */
  width: 100vw;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

`

export const ContentStyled = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  padding-top: 7rem;

  @media (max-width: 1340px) {
    flex-direction: column;
  }
`

export const CardStyled = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 7rem auto;
  padding: 1rem;
  background-color: rgba(0,0,0, .8);
  border-radius: 2rem;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    color: var(--white);
    margin-bottom: 2rem;
  }

  @media (max-width: 1340px) {
    width: 80vw;
    height: auto;
    margin-bottom: 1rem;
  }
`

export const ContactStyled = styled.div`
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
      width: 60%;
      height: 60%;
    }
  } 


`

export const MapsStyled = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 7rem auto 2rem;
  padding-bottom: 1rem;
  background-color: rgba(0,0,0, .8);
  border-radius: 1rem;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    color: var(--white);
    margin: 1rem 0;
  }

  .gmap_canvas {
  overflow:hidden;
  border-radius: 2rem;
  }
  
  @media (max-width: 1340px) {
    width: 80vw;
    height: 50vh;
    margin: 1rem auto 2rem;

    .gmap_canvas {
      overflow:hidden;
      border-radius: 2rem;
      width: 90%;
      max-width: 500px;
    }
  }

`

