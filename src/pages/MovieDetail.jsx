import { useParams } from "react-router-dom"
import moviesData from "../assets/movies.json"

const MovieDetail = () => {
  const { id } = useParams()
  const movie = moviesData.find(m => m.id === parseInt(id))

  if (!movie) return <div>Movie not found</div>

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
      <iframe
        className="w-full h-64 sm:h-96 mb-4"
        src={movie.videoLink}
        title={movie.title}
        allowFullScreen
      />
      <img src={movie.poster} className="w-40 mb-2" alt={movie.title} />
      <p className="text-gray-600">{movie.description}</p>
    </div>
  )
}

export default MovieDetail
