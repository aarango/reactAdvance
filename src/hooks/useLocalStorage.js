import { useState } from 'react'

// Custom Hooks
// recibe dos parametros key  y el valor inicial
// Este hooks permite guardar en el LocalStorage los elementos con Liked = true
export function useLocalStorage (key, initialValue) {
  
  // Metodo de Recuperación 
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      // El local storage guarda un string, por eso utilizamos JSON.parse(item) para recuperar el valor
      return item != null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  // Metodo de escritura
  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (e) {
      console.log(e)
    }
  }

  return [storedValue, setLocalStorage]
  // devolvemos dos valores, 1 el valor que teniamos guardado, 2 la forma de actualizar el LocalStorage
}
