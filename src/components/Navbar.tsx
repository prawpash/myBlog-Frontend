import { ReactElement } from "react"
import { Link } from "react-router-dom"

export default function Navbar(
  {
    prefix,
    navigations,
    suffix
  }: {
    prefix?: ReactElement,
    navigations?: Array<{ name: string, destination: string }>,
    suffix?: ReactElement
  }
) {
  return (
    <header className="text-lg">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-0 sm:border sm:border-black mt-14 h-8 px-0.5">
        <div className="border-2 sm:border border-black">{prefix}</div>
        <nav className="sm:col-start-2 flex justify-around border-2 sm:border border-black">
          {navigations?.map((navigation) => (
            <Link
              key={navigation.name}
              to={navigation.destination}
              className="flex-1 text-center hover:bg-black hover:text-white"
            >{navigation.name}</Link>
          ))}
        </nav>
        <div className="search flex items-center gap-2 px-2 border-2 sm:border border-black">
          {suffix}
        </div>
      </div>
    </header>
  )
}
