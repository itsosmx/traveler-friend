import styled, { createGlobalStyle } from 'styled-components'


export const BaseLineStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
  :root { 
    --blue: rgb(3, 119, 250);
    --main: rgb(20, 28 ,47);
    --second: rgb(31 ,42 ,72);
    --white: rgb(255, 255 ,255);
    --gray: rgba(255, 255, 255, 0.5)
  }
  
  * {
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  
  body {
    color: var(--white);
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: var(--main);
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
`


export const Root = styled.main`
  
`