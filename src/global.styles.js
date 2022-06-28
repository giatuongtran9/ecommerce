import { createGlobalStyle } from "styled-components"; 

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 20px 40px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

    @media screen and (max-width: 800px) {
        padding: 10px;
    }
}

a {
  text-decoration: none;
  color: black;
}

*{
  box-sizing: border-box;
}
`