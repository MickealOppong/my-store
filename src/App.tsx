import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Favourites, PurchasedProducts } from "./components";
import { Cart, Error, Login, User } from "./pges";
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
      },
      {
        path: '',
        element: <User />,
        children: [
          {
            path: '/ulubione',
            element: <Favourites />,
            errorElement: <Error />,
          },
          {
            path: '/orders',
            element: <PurchasedProducts />,
            errorElement: <Error />,
          }
        ]
      },
      {
        path: '/cart',
        element: <Cart />,
        errorElement: <Error />,
      },
    ]
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <Error />,
  }
])


function App() {

  return <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
}

export default App
