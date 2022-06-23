import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Content } from "./components/Content/Content"
import { Home } from "./components/Home/Home"
import { Permissions } from "./components/Permissions/Permissions"
import { Ready } from "./components/ReadyToScan/Ready"

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/permissions' element={<Permissions />} />
      <Route path='/ready' element={<Ready />} />
      <Route path='/scan' element={<Content />} />
    </Routes>
  )
}

export default App
