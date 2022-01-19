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
    text-align: center;
    color: white;

    .link {
      text-decoration: none;
      font-weight: bold;
      cursor: pointer;
      color: white;
    }
  }

`

export const GridStyled = styled.div`
  margin: 2rem ;
  width: inherit;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  
  img {
    width: 25vw ;
    height: 25vw;
    border-radius: 1rem;
    margin: 1vw;
    
  }
  
`