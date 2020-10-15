import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { ImgWrapper, Img, Article } from './styles'
import { FavButton } from '../FavButton/index'
import { Link } from '@reach/router'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
const DEFAULT_IMG = 'https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

// const getRandomImg = () => `https://picsum.photos/id/${Math.round(Math.random() * 1084)}/500/300 `

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const handerFavClick = (id) => {
    console.log('hanler2', id)
    setLiked(!liked)
    ToggleLikeMutation({ id })
  }

  return (
    <Article ref={element}>
      {
        show && <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton
            liked={liked}
            onClick={() => handerFavClick(id)}
            likes={likes}
          />

        </>
      }
    </Article>
  )
}
