import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  button{
    cursor: pointer;
  }
  ul{
    list-style: none;
  }
`;
