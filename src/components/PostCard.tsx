import { Link } from "react-router-dom"

export default function PostCard({
  date = "02-09-2023",
  title = "Implementasi Binary Search Pada Bahasa Pemrograman PHP",
  thumbnail = "/public/images/thumbnail.png",
  tags = ["WEB", "HTML", "CSS"]
}: {
  date?: string,
  title?: string,
  thumbnail?: string,
  tags?: Array<string>
}) {
  return (
    <div className="w-64 border border-black">
      {/* header */}
      <div className="min-h-[32px] border border-black flex justify-between items-center px-1.5">
        <div>
          {date}
        </div>

        <div className="flex gap-1">
          <div className="w-3.5 h-3.5 border rounded-full border-black"></div>
          <div className="w-3.5 h-3.5 border rounded-full border-black"></div>
          <div className="w-3.5 h-3.5 border rounded-full border-black bg-black"></div>
        </div>
      </div>

      {/* body */}
      <Link
        to={`/post/${title.split(" ").join("-").toLowerCase()}`}
        className="group"
      >
        <div className="relative border border-black min-h-[219px]">
          <img src={thumbnail} alt={thumbnail} className="w-full absolute object-scale-down h-full mx-auto" />
          <div className="absolute w-full h-full bg-black/[.5]"></div>
          <div className="absolute max-w-[18ch] px-1.5 py-4">
            <h1 className="text-xl text-white group-hover:underline group-hover:decoration-dashed">
              {title}
            </h1>
          </div>
        </div>
      </Link>

      {/* footer */}
      <div className="min-h-[44px] border border-black flex gap-1 items-center px-1.5 py-3">
        {/* tags title */}
        <div>
          +Tags
        </div>
        {/* tags item */}
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <a href="#" key={index} className="px-2.5 py-1 bg-black text-white">{tag}</a>
          ))}
        </div>
      </div>
    </div>
  )
}
