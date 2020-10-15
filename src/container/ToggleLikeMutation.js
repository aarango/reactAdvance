import React from 'react'
import { gql, useMutation } from '@apollo/client'

const LIKE_PHOTO = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto( input: $input ) {
        id,
        liked,
        likes
    }
}
`
export const ToggleLikeMutation = ({ id = {} }) => {
  console.log('tuggleder', id)
  const [toggleLikePhoto] = useMutation(LIKE_PHOTO,
    {
      variables:
       { input: { id } }
    }
  )
  return { toggleLikePhoto }
}
