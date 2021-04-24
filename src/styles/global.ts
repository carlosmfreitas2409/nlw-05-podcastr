import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1366px) {
      font-size: 80%; // 12px
    }

    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: ${({ theme }) => theme.colors.background.lighter};
  }

  body, input, textarea, select, button {
    font: 500 1rem ${({ theme }) => theme.font.text};
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.background.dark};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: ${({ theme }) => theme.font.title};
    color: ${({ theme }) => theme.colors.background.darker};
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }
`;