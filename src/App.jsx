
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Settings from './pages/Settings'
import About from './pages/About'
function App() {
  return (
   <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/about' element={<About />} />
    </Routes>

   
    </BrowserRouter>
  )
}

export default App
