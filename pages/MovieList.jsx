import { useMovies } from './MovieListContext'

const MovieList = () => {
  const { movies } = useMovies()

  return (
    <ul className="grid-container">
      {movies.map((m, index) => (
        <li key={index}>
          <img src={m.img} />
          <div>
            {m.title}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default MovieList
