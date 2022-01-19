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
  margin: 15rem 0 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 2rem;
  padding: 2rem 0;

  h2{
    width: inherit;
    text-align: center;
    color: white;
  }        

  img {

    margin: 2rem;
    width: 95%;
    height: 95%;
    border-radius: 2rem;

  }

  .link {
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    color: white;
  }
    
  
  
`