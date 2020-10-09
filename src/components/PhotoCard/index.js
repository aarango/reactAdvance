import React from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
const DEFAULT_IMG = 'https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

// const getRandomImg = () => `https://picsum.photos/id/${Math.round(Math.random() * 1084)}/500/300 `

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const Icon = liked ? MdFavorite : MdFavoriteBorder

 //console.log(src)

  return (
    <Article ref={element}>
      {
        show && <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size='32px' />
            {likes} likes!
          </Button>
        </>
      }
    </Article>
  )
}
