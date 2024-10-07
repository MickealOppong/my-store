import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AccountSetting, ChangeAddress, ChangeAddressInvoice, ChangePassword, Discounts, EditName, Favourites, PurchasedProducts, Reviews, SingleProduct, SmallUserMenuContainer } from "./components";
import { Cart, Checkout, Error, Help, Login, Orders, OrderSummary, ProductByCategory, User } from "./pages";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import SharedLayout from "./pages/SharedLayout";



function App() {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  const queryClient = new QueryClient();

  window.addEventListener('resize', function () {
    if (this.innerWidth > 768) {
      setIsLargeScreen(() => true)
    } else {
      setIsLargeScreen(() => false)
    }
  })


  const router = createBrowserRouter([
    {
      path: '/',
      element: <SharedLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />
        },

        {
          path: 'my-account',
          element: <User />,
          errorElement: <Error />,
          children: [
            {
              index: true,
              element: !isLargeScreen ? <SmallUserMenuContainer /> : <PurchasedProducts />,
              errorElement: <Error />,
            },
            {
              path: 'ulubione',
              element: <Favourites />,
              errorElement: <Error />,
            },
            {
              path: 'orders',
              element: <PurchasedProducts />,
              errorElement: <Error />,
            },
            {
              path: 'account-setting',
              element: <AccountSetting />,
              errorElement: <Error />
            },
            {
              path: 'discounts',
              element: <Discounts />,
              errorElement: <Error />,
            },
            {
              path: 'help-center',
              element: < Help />,
              errorElement: <Error />,
            },
            {
              path: 'reviews',
              element: <Reviews />,
              errorElement: <Error />,
            },
            {
              path: 'edit-name',
              element: <EditName />,
              errorElement: <Error />,
            },

            {
              path: 'change-password',
              element: <ChangePassword />,
              errorElement: <Error />,
            },
            {
              path: 'change-address',
              element: <ChangeAddress />,
              errorElement: <Error />,
            },
            {
              path: 'change-address-invoice',
              element: <ChangeAddressInvoice />,
              errorElement: <Error />,
            },
          ]
        },
        {
          path: '/:id',
          element: <ProductByCategory />,
          errorElement: <Error />,
        },

        {
          path: 'product',
          element: <SingleProduct />,
          errorElement: <Error />,
        },
        {
          path: '/cart',
          element: <Cart />,
          errorElement: <Error />,
          children: [
            {
              index: true,
              element: <Orders />,
              errorElement: <Error />,
            },
            {
              path: 'checkout',
              element: <Checkout />,
              errorElement: <Error />,
            },
            {
              path: 'summary',
              element: <OrderSummary />,
              errorElement: <Error />,
            }
          ]
        },
        {
          path: 'login',
          element: < Login />,
          errorElement: <Error />,
        },
        {
          path: 'register',
          element: <Register />,
          errorElement: <Error />,
        }
      ]
    },

  ])


  return <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
}

export default App
