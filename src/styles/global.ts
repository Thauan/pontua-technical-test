import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    border: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: 'Epilogue', sans-serif;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  img {
      max-width: 100%;
      display: block;
  }

  button {
    background: transparent;
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
