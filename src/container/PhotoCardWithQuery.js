import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

// Render props

const query = gql`
query getSinglePhoto($id:ID!) {
    photo(id:$id) {
        id
        categoryId
        src
        likes
        userId
        liked
    }
}
`

export const PhotoCardWithQuery = ({ id = {} }) => {
  const { loading, error, data } = useQuery(query,
    {
      variables: { id: id }
    }
  )
  console.log('datQuery', data)
  if (loading) return <h1>....Cargando</h1>
  if (error) {
    return <div>Error! {error.message}</div>
  };

  console.log(data.photo.src)

  return (
    <>
      <PhotoCard src={data.photo.src} />
    </>
  )
}
