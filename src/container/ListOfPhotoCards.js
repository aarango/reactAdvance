import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { withPhotos } from '../hoc/withPhotos'
import { ListOfPhotoCardComponent } from '../components/ListOfPhotoCard'

export const ListOfPhotoCard = ({ categoryId = {} }) => {
  console.log('cate', categoryId)
  const { loading, error, data } = useQuery(withPhotos,
    {
      variables: { categoryId: categoryId }
    }
  )
  console.log('dataContainer', data)
  if (loading) return 'Cargando ....'
  if (error) {
    return <div>Error! {error.message}</div>
  };

  return (
    <ListOfPhotoCardComponent data={data} />
  )
}
