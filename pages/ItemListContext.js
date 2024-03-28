import { createContext, useState, useContext } from 'react'
import movies from '../data/movies'

const ItemListContext = createContext()

export const useItems = () => useContext(ItemListContext)

export const ItemListProvider = ({ children, initialItems = movies }) => {
  const [items, setItems] = useState(initialItems)

  return (
    <ItemListContext.Provider value={{ items, setItems }}>
      {children}
    </ItemListContext.Provider>
  )
}
