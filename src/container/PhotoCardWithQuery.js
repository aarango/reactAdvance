import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

// Render props

const GET_SINGLE_PHOTO = gql`
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
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO,
    {
      variables: { id: id }
    }
  )

  if (loading) return <h1>....Cargando</h1>
  if (error) {
    return <div>Error! {error.message}</div>
  };

  return (
    <>
      <PhotoCard
        {...data}
        likes={data.photo.likes}
        src={data.photo.src}
      />
    </>
  )
}
