export async function loader({ params }: { params: any }) {
  return {
    slug: params.slug,
    title: "Hahahaha",
    date: "hahaha"
  }
}

export default function Post() {
  return (
    <>
      {/* Thumbnail Card */}
      <div className="w-full border-2 border-black">
        {/* header */}
        <div className="min-h-[32px] border-b-2 border-black flex justify-between items-center px-1.5">
          <div>
            Thumbnail
          </div>

          <div className="flex gap-1">
            <div className="w-3.5 h-3.5 border rounded-full border-black"></div>
            <div className="w-3.5 h-3.5 border rounded-full border-black"></div>
            <div className="w-3.5 h-3.5 border rounded-full border-black bg-black"></div>
          </div>
        </div>

        {/* body */}
        <div className="relative min-h-[219px] my-3.5">
          <img src="/public/images/thumbnail.png" alt="thumbnail" className="w-full absolute object-scale-down h-full mx-auto" />
        </div>
      </div>

      <div className="mt-14">
        <h1 className="text-2xl">
          Implementasi Binary Search Pada Bahasa Pemrograman PHP
        </h1>
        <div className="mt-4 border-t-2 border-black flex py-2">
          <div className="pr-2 border-r border-black">
            08-08-2023
          </div>
          <div className="pl-2 border-l border-black">
            <span className="pr-2">+Tags</span>
            <a href="#" className="px-2.5 py-1 bg-black text-white">WEB</a>
          </div>
        </div>
      </div>

      <div className="mt-14 font-sans">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta modi eum accusantium animi voluptatem minima placeat beatae, voluptas quia ipsum unde? Accusantium a minus natus rem odio aspernatur harum tenetur.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta modi eum accusantium animi voluptatem minima placeat beatae, voluptas quia ipsum unde? Accusantium a minus natus rem odio aspernatur harum tenetur.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta modi eum accusantium animi voluptatem minima placeat beatae, voluptas quia ipsum unde? Accusantium a minus natus rem odio aspernatur harum tenetur.</p>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta modi eum accusantium animi voluptatem minima placeat beatae, voluptas quia ipsum unde? Accusantium a minus natus rem odio aspernatur harum tenetur.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta modi eum accusantium animi voluptatem minima placeat beatae, voluptas quia ipsum unde? Accusantium a minus natus rem odio aspernatur harum tenetur.</p>
      </div>
    </>
  )
}
