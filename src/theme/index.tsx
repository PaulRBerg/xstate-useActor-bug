import { ReactElement } from "react";
import { DefaultTheme, ThemeProvider as StyledThemeProvider, createGlobalStyle, css } from "styled-components";

import colors from "./colors";
import mediaWidthMaxTemplates from "./mediaWidth";

// Fonts
const fallbackFont =
  '-apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, Arial, sans-serif';
const robotoFont = `Roboto Mono, ${fallbackFont}`;
const robotoMonoFont = `Roboto Mono, ${fallbackFont}`;
const catamaranFont = `Catamaran, ${fallbackFont}`;

const theme: DefaultTheme = {
  colors,
  fonts: {
    catamaran: catamaranFont,
    fallback: fallbackFont,
    roboto: robotoFont,
    robotoMono: robotoMonoFont,
  },
  gradients: {
    primaryGradient: css`
      background: ${colors.primary};
      background: linear-gradient(45deg, ${colors.primary}, ${colors.stilDeGrainYellow});
    `,
    secondaryGradient: css`
      background: ${colors.secondary};
      background: linear-gradient(45deg, ${colors.secondary}, ${colors.azureBlue});
    `,
  },
  mediaWidth: {
    ...mediaWidthMaxTemplates,
  },
  snippets: {
    borderAliceBlue: css`
      border: 1px solid ${props => props.theme.colors.aliceBlue};
    `,
    flexColumnNoWrap: css`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    `,
  },
};

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    margin: 0rem;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0rem;
    width: 100%;
  }

  html {
    color: ${props => props.theme.colors.darkGunmetalBlack};
    cursor: auto;
    font-family: ${catamaranFont};
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    -webkit-overflow-scrolling: touch;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    appearance: none;
    border: none;
    font-family: inherit;
    outline: none;
  }

  input::placeholder {
    color: ${props => props.theme.colors.aliceBlue};
    font-weight: 500;
    opacity: 1;
  }

  input[type="number"]:-webkit-inner-spin-button,
  input[type="number"]:-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
  }

  // See https://stackoverflow.com/questions/2781549/removing-input-background-colour-for-chrome-autocomplete.
  @keyframes autofill {
    0%,100% {
      background-color: ${props => props.theme.colors.white};
    }
  }

  input:-webkit-autofill {
    animation-delay: 1s;
    animation-fill-mode: both;
    animation-name: autofill;
  }
`;

interface ThemeProviderProps {
  children: ReactElement[];
}

export default function ThemeProvider({ children }: ThemeProviderProps): ReactElement {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}
