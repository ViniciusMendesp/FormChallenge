import { Routes, Route } from 'react-router-dom'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { Initial } from "./pages/Initial"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/initial" element={<Initial />} />
    </Routes>
  )
}