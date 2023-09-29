import searchIcon from "@/assets/search.svg"
import Navbar from "@/components/Navbar";
import PlusSquareIcon from "@/components/icons/PlusSquareIcon";
import { Link, Outlet } from "react-router-dom";

const navigations = [
  {
    name: "Home",
    destination: "/home"
  },
  {
    name: "Tags",
    destination: "/tags"
  },
  {
    name: "About",
    destination: "/about"
  },

]

function CreateButton() {
  return (
    <Link to={'/admin/post/create'} className="group flex justify-center items-center gap-3 hover:bg-black hover:text-white cursor-pointer">
      <div>
        CREATE POST
      </div>

      <PlusSquareIcon className="group-hover:stroke-white" />
    </Link>
  )
}

function SearchInput() {
  return (
    <>
      <label htmlFor="searchInput">
        <img src={searchIcon} alt="search icon" className="w-5 h-5" />
      </label>
      <input id="searchInput" type="text" placeholder="Search" className="w-full outline-none" />
    </>
  )
}

export default function Root() {
  return (
    <>
      <Navbar
        prefix={<CreateButton />}
        navigations={navigations}
        suffix={<SearchInput />}
      />
      <main className="max-w-[1080px] mt-52 mx-auto px-1.5">
        <Outlet />
      </main>
    </>
  )
}
