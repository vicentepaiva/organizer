import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts/Auth/AuthProvider";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { Router } from "./lib/Router";


import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";



export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsProvider>
      <Router />
      </TransactionsProvider>
    </ThemeProvider>
  )
}

