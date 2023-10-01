import { useState } from 'react'
import './App.css'
import { Route, RouterProvider, Routes } from "react-router-dom"
import router from './Routes'


function App() {
 

  return (
    <>
    <RouterProvider  router={router}/>
    </>
  )
}

export default App
