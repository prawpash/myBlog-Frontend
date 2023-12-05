import { useLoaderData } from "react-router-dom";

import PostCard from "./components/PostCard";

export default function App() {
  const posts: any = useLoaderData()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 place-items-center">
      {posts.map(
        (post: any, index: any) => (
          <PostCard
            key={index}
            date={post.date}
            title={post.title}
          />
        ))
      }
    </div>
  )
}
