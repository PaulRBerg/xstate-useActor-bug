import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ThemeProvider, { GlobalStyle } from "./theme";

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root"),
);
