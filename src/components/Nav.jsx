import { Link } from "react-router-dom"

export const Nav = () => {
  return (
      <div className="bg-gray-300">
            <nav className="w-3/4 mx-auto ">
        <ul className="flex justify-between">
            <li className="text-lg text-gray-600 py-4">
                <Link to='/'>Products</Link>
            </li>
            <li className="text-lg text-gray-600 py-4">
                <Link to='/cart'>Cart</Link>
            </li>
        </ul>
    </nav>
        </div>
  )
}
