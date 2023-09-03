import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1080px] mt-52 mx-auto grid grid-cols-4 gap-y-4 place-items-center">
        <Outlet />
      </main>
    </>
  )
}
