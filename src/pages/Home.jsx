import { useEffect, useState } from "react"
import moviesData from "../assets/movies.json"
import MovieCard from "../components/MovieCard"

const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    setMovies(moviesData)
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Latest Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Home
