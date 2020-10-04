import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './style'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    window.fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  // función fixed

  useEffect(function () {
    const onScroll = event => {
      const newShowFixed = window.scrollY >
      200
      showFixed !== newShowFixed &&
      setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll) // con el retunr limpoo el efecto para que no se eejecute perpetup
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )

  return (
    <>

      {renderList()}
      {showFixed && renderList(true)}

    </>
  )
}
