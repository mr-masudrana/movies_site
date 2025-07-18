import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">LP Movie</Link>
        <div>
          <Link to="/" className="hover:underline">Home</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
