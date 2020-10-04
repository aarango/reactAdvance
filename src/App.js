import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/index'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { PhotoCard } from './components/PhotoCard/index'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { Logo } from './components/Logo/index'

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCard />
    <PhotoCard />
  </div>
)
