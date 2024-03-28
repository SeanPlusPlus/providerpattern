import { createContext, useState, useContext } from 'react'
import initialState from '../data/movies'

const MovieListContext = createContext()

export const useMovies = () => useContext(MovieListContext)

export const MovieListProvider = ({ children }) => {
  const [movies, setMovies] = useState(initialState)

  return (
    <MovieListContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieListContext.Provider>
  )
}
