import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/index'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { ListOfPhotoCard } from './container/ListOfPhotoCards'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Logo } from './components/Logo/index'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId
        ? <PhotoCardWithQuery id={detailId} />
        : <>
          <ListOfCategories />
          <ListOfPhotoCard categoryId={2} />
          </>}

    </div>
  )
}
