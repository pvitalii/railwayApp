import React, {useContext, useEffect} from 'react'
import {BrowserRouter} from "react-router-dom"
import "./styles/App.scss"
import Navbar from "./components/Navbar"
import Auth from "./pages/Auth"
import AppRouter from "./components/AppRouter";
import {Context} from "./index";

function App() {
    const {user} = useContext(Context)
    useEffect(() => {
        localStorage.getItem("token") ? user.setIsAuth(true) : user.setIsAuth(false)
    })

  return (
    <BrowserRouter>
      <Navbar/>
        <AppRouter/>
    </BrowserRouter>
  )
}

export default App
