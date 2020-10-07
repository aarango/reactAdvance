import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PhotoCard } from '../PhotoCard'
import { skeletonStyle } from '../styles/Skeletron'
import { withPhotos } from '../../hoc/withPhotos'


export const ListOfPhotoCard = ({ categoryId = {} }) => {
  console.log('cate', categoryId)
  const { loading, error, data } = useQuery(withPhotos,
    {
      variables: { categoryId: categoryId }
    }
  )

  if (loading) return <skeletonStyle />

  if (error) {
    return <div>Error! {error.message}</div>
  };

  return (
    <ul>
      {data.photos.map((photoCard, id) => (
        <PhotoCard key={id} {...photoCard} />
      ))}
    </ul>
  )
}
