import searchIcon from "@/assets/search.svg"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="text-lg">
      <div className="grid grid-cols-3 border border-black mt-14 h-8">
        <div className="border border-black"></div>
        <nav className="col-start-2 flex justify-around border border-black">
          <Link to={"/home"} className="flex-1 text-center hover:bg-black hover:text-white">Home</Link>
          <Link to={"/tags"} className="flex-1 text-center hover:bg-black hover:text-white">Tags</Link>
          <Link to={"/about"} className="flex-1 text-center hover:bg-black hover:text-white">About</Link>
        </nav>
        <div className="search flex items-center gap-2 px-2 border border-black">
          <label htmlFor="searchInput">
            <img src={searchIcon} alt="search icon" className="w-5 h-5" />
          </label>
          <input id="searchInput" type="text" placeholder="Search" className="w-full outline-none" />
        </div>
      </div>
    </header>
  )
}
