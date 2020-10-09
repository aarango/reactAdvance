import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardComponent = ({ data = [] }) => {
  return (
    <ul>
      {data.photos.map((photoCard, id) => (
        <PhotoCard key={id} {...photoCard} />
      ))}
    </ul>
  )
}
