import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AccountSetting, AddAddress, AddAddressInvoice, ChangeAddress, ChangeAddressInvoice, ChangePassword, Discounts, EditName, Favourites, PurchasedProducts, Reviews, SingleProduct, SmallUserMenuContainer } from "./components/index";
import { Cart, Checkout, Error, Help, Landing, Login, Orders, OrderSummary, ProductByCategory, Register, SharedLayout, User } from "./pages/index";
import { store } from './store';


import { action as addAddressAction } from './components/User/AddAddress';
//loaders
import { loader as cartLoader } from './pages/Cart';
import { loader as landingLoader } from './pages/Landing';



function App() {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  const queryClient = new QueryClient();

  // const { getDataById, data } = useFetchDataById()


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
          element: <Landing />,
          loader: landingLoader
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
              errorElement: <Error />,
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
              path: 'add-address',
              element: <AddAddress />,
              errorElement: <Error />,
              action: addAddressAction(store)
            },
            {
              path: 'change-address-invoice',
              element: <ChangeAddressInvoice />,
              errorElement: <Error />,
            },
            {
              path: 'add-address-invoice',
              element: <AddAddressInvoice />,
              errorElement: <Error />,
            },
          ]
        },
        {
          path: '/:id',
          element: <ProductByCategory />,
          errorElement: <Error />,
          loader: landingLoader
        },

        {
          path: '/product/:id',
          element: <SingleProduct />,
          errorElement: <Error />,
        },
        {
          path: '/cart',
          element: <Cart />,
          errorElement: <Error />,
          loader: cartLoader(store, queryClient),
          children: [
            {
              index: true,
              element: <Orders />,
              errorElement: <Error />,
              loader: cartLoader(store, queryClient)
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

  ])


  return <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
}

export default App
