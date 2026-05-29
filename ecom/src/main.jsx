import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/Home.jsx'
import { Shop } from './components/Shop.jsx'
import { Cart } from './components/Cart.jsx'
import { Auth } from './components/Auth.jsx'
import { Details } from './components/Details.jsx'
import { Wishlist } from './components/Wishlist.jsx'
import { Compare } from './components/Compare.jsx'
import { Checkout } from './components/Checkout.jsx'
import { Accounts } from './components/Accounts.jsx'

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/auth",
        element: <Auth />
      },
      {
        path: "/details",
        element: <Details />
      },
      {
        path: "/wishlist",
        element: <Wishlist />
      },
      {
        path: "/compare",
        element: <Compare />
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/accounts",
        element: <Accounts />
      }
    ]

  }
])


createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}></RouterProvider>
)
