import { useEffect, useState, useRef } from 'react'


// Esta función captura los elementos en el ViewPort para a medida que se haga scron haga fecht en los emenentos que debe mostrar
export function useNearScreen () {
  const [show, setShow] = useState(false)
  const element = useRef(null) // permite camtpurar un elemento del DOM

  useEffect(function () {
    const observer = new
    window.IntersectionObserver(function (entries) {
      // console.log(entries)
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        console.log('si')
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current) // me permite saber los elementos que estan en el ViewPort
  }, [element])

  return [show, element] // La primera posición nos indica si tenemos que mostrar los elementos del te ViewPort  la segunda es la referencia del elemento
    
}
