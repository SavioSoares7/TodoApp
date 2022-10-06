import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./page/Home";

import GlobalStyle from "./styles/global";

import { ThemeProvider } from "styled-components";
import Colors from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Colors}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
