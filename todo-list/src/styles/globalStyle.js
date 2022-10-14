import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Roboto', sans-serif;
    background: #e8e8e8;

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
