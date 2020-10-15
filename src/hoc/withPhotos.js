// high order component
import { gql } from 'apollo-boost'

export const GET_PHOTOS = gql`
  query GetPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
