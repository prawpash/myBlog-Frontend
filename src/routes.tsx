import Root from "@/pages/Root"
import ErrorPage from "@/pages/errors/error"
import App from "./App"

const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/home',
        element: <App />
      }
    ]
  }
]

export default routes
