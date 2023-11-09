import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./main.css"

//Components
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Index from "./pages/index/Index"
import Login from "./pages/login/login"
import Profile from "./pages/profile/Profile"
import Edit from "./pages/profile/edit/Edit"
import StoreHandler from "./components/storeHandler/Storehandler"
import NoTokenRelocate from "./components/noTokenRelocate/NoTokenRelocate"




const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <StoreHandler />
        <Header />
        <Index />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <StoreHandler />
        <Header />
        <Login />
        <Footer />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <NoTokenRelocate />
        <StoreHandler />
        <Header />
        <Profile />
        <Footer />
      </>
    ),
  },
  {
    path: "/profile/edit",
    element: (
      <>
        <NoTokenRelocate />
        <StoreHandler />
        <Edit />
      </>
    ),
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
