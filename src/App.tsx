import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "./pges";
import Landing from "./pges/Landing";
import SharedLayout from "./pges/SharedLayout";




const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '',
    element: <SharedLayout />,

    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      }
    ]
  }
])


function App() {

  return <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
}

export default App
