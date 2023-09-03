import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError()

  return (
    <div className="w-screen h-screen grid grid-cols-2 grid-rows-1 text-5xl place-items-center">
      <div className="justify-self-end border-r-2 border-black p-2 text-9xl">
        {error.status}
      </div>
      <div className="justify-self-start border-black p-2">
        🤔 {error.statusText}
      </div>
    </div>
  )
}
