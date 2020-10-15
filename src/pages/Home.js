import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/index'
import { ListOfPhotoCard } from '../container/ListOfPhotoCards'

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={id} />
    </>
  )
}
