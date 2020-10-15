import React from 'react'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { Home } from './pages/Home'
import { Context } from './Context'
import { Logo } from './components/Logo/index'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUsers } from './pages/NotRegisterUsers'
import { Router } from '@reach/router'
import { NavBar } from './components/NavBar'
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  //const detailId = urlParams.get('detail')
  //console.log(detailId)


  const UserLogged = ({ children }) => {
    return children({ isAuth: false })
  }

  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>

      <UserLogged>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/users' />
                </Router>
              : <Router>
                <NotRegisterUsers path='/favs' />
                <NotRegisterUsers path='/users' />
              </Router>

        }

      </UserLogged>
      <NavBar />
    </div>
  )
}
