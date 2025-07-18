import { Link } from "react-router-dom"

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="rounded overflow-hidden shadow-lg hover:scale-105 transition">
        <img src={movie.poster} alt={movie.title} className="w-full h-60 object-cover"/>
        <div className="p-2">
          <h3 className="text-lg font-semibold">{movie.title}</h3>
          <p className="text-sm text-gray-500">{movie.language} • {movie.year}</p>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
