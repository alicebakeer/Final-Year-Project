import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { PageLayout } from './components/layout/PageLayout'
import { ThemeProvider } from './context/ThemeContext'
import { DashboardLayout } from './dashboard/layout/DashboardLayout'
import Overview from './dashboard/pages/Overview'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Settings from './pages/Settings'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Main App Routes with PageLayout */}
          <Route path='/*' element={
            <PageLayout>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/about' element={<About />} />
              </Routes>
            </PageLayout>
          } />

          {/* Dashboard Routes with DashboardLayout */}
          <Route path='/dashboard/*' element={
            <DashboardLayout>
              <Routes>
                <Route index element={<Overview />} />
                {/* Additional dashboard routes can be added here */}
              </Routes>
            </DashboardLayout>
          } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
