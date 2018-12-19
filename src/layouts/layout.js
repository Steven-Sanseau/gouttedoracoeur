import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import theme from './theme'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
)

export default Layout
