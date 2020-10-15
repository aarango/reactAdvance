import React from 'react'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { Home } from './pages/Home'
import { Logo } from './components/Logo/index'
import { Detail } from './pages/Detail'
import { Router } from '@reach/router'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>

    </div>
  )
}
