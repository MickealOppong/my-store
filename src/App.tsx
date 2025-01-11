import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AccountSetting, AddAddress, AddAddressInvoice, ChangeAddress, ChangeAddressInvoiceCompany, ChangeAddressInvoicePerson, ChangePassword, Discounts, EditName, Favourites, PurchasedProducts, Reviews, SingleProduct, SmallUserMenuContainer } from "./components/index";
import { Cart, Checkout, Error, Help, Landing, Login, Orders, OrderSummary, ProductByCategory, Register, SharedLayout, User } from "./pages/index";
import { store } from './store';


//loaders
//import { loader as singleProductLoader } from './components/products/SingleProduct';
import { useDispatch } from "react-redux";
import { loader as accountLoader } from './components/User/AccountSetting';

import { loader as changePwdLoader } from './components/User/ChangePassword';
import { loader as editNameLoader } from './components/User/EditName';
import { loader as favouriteLoader } from './components/User/Favourites';
import { loader as ordersLoader } from './components/User/PurchasedProducts';
import { loader as reviewLoader } from './components/User/Reviews';

import { useLazyGetCartQuantityQuery } from "./features/api/cartApi";
import { setCartQuantity } from "./features/cartSlice";
import { useAppSelector } from "./hooks/hooks";
import { loader as checkoutLoader } from './pages/Checkout';
import { loader as landingLoader } from './pages/Landing';
import { loader as orderSummaryLoader } from './pages/OrderSummary';
import { loader as userLoader } from './pages/User';


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

  // handle user cart quantity update in event deleted from local storage
  const cart = localStorage.getItem('_cart') as string
  const userId = useAppSelector((state) => state.userSlice.id)
  const sessionId = sessionStorage.getItem('_apx.sessionid') as string
  const [getCartQuantity] = useLazyGetCartQuantityQuery()

  const dispatch = useDispatch()

  async function updateCartQuantityIfDoesNotExist() {

    const response = await getCartQuantity({ userId, sessionId })
    dispatch(setCartQuantity(response.data))
  }


  useEffect(() => {
    updateCartQuantityIfDoesNotExist()
  }, [])



  const router = createBrowserRouter([
    {
      path: '/',
      element: <SharedLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: landingLoader(store)
        },

        {
          path: 'my-account',
          element: <User />,
          errorElement: <Error />,
          loader: userLoader(store),
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
              loader: favouriteLoader(store)
            },
            {
              path: 'orders',
              element: <PurchasedProducts />,
              errorElement: <Error />,
              loader: ordersLoader(store),
            },
            {
              path: 'account-setting',
              element: <AccountSetting />,
              errorElement: <Error />,
              loader: accountLoader(store)
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
              loader: reviewLoader(store)
            },
            {
              path: 'edit-name',
              element: <EditName />,
              errorElement: <Error />,
              loader: editNameLoader(store)
            },

            {
              path: 'change-password',
              element: <ChangePassword />,
              errorElement: <Error />,
              loader: changePwdLoader(store)
            },
            {
              path: 'change-address/:id',
              element: <ChangeAddress />,
              errorElement: <Error />,
            },
            {
              path: 'add-address',
              element: <AddAddress />,
              errorElement: <Error />,
            },
            {
              path: 'change-address-person/:id',
              element: <ChangeAddressInvoicePerson />,
              errorElement: <Error />,
            },
            {
              path: 'change-address-company/:id',
              element: <ChangeAddressInvoiceCompany />,
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
              loader: checkoutLoader(store)
            },
            {
              path: 'summary',
              element: <OrderSummary />,
              errorElement: <Error />,
              loader: orderSummaryLoader(store, queryClient)
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
