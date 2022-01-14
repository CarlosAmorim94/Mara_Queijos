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

`