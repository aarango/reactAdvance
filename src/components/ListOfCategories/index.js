import React, { useEffect, useState } from 'react'
import { CategorySkeleton, Category } from '../Category'
import { List, Item } from './style'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

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
      {loading ? <CategorySkeleton />
        : categories.map((category) => (
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
