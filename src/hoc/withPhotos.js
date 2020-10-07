// high order component
import { gql } from 'apollo-boost'

export const withPhotos = gql`
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
