import Root from "@/pages/Root"
import ErrorPage from "@/pages/errors/error"
import App from "./App"
import { RouteObject } from "react-router-dom"
import Post from "./pages/Post"
import { loader as PostLoader } from "@/pages/Post"
import PostCreate from "./pages/PostCreate"

export async function rootLoader() {
  const data = [
    {
      date: "08-08-2023", title: "Judul 1"
    },
    {
      date: "08-08-2023", title: "Judul 2"
    },
    {
      date: "08-08-2023", title: "Judul 3"
    },
    {
      date: "08-08-2023", title: "Judul 4"
    },
    {
      date: "08-08-2023", title: "Judul 5"
    },
    {
      date: "08-08-2023", title: "Judul 6"
    },
  ]

  return data
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        loader: rootLoader,
        element: <App />
      },
      {
        path: '/home',
        loader: rootLoader,
        element: <App />
      },
      {
        path: '/post/:slug',
        loader: PostLoader,
        element: <Post />
      },
      {
        path: '/admin/post/create',
        element: <PostCreate />
      }
    ]
  }
]

export default routes
