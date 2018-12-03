import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import theme from './theme'

createGlobalStyle`
 `

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>{children}</>
  </ThemeProvider>
)

export default Layout
