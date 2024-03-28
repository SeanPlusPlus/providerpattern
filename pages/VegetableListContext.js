import { createContext, useState, useContext } from 'react'
import initialState from '../data/vegetables'

const VegetableListContext = createContext()

export const useVegetables = () => useContext(VegetableListContext)

export const VegetableListProvider = ({ children }) => {
  const [vegetables, setVegetables] = useState(initialState)

  return (
    <VegetableListContext.Provider value={{ vegetables, setVegetables }}>
      {children}
    </VegetableListContext.Provider>
  )
}
