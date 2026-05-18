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
import Add from './dashboard/Admin/Add'
import Recieve from './dashboard/Transaction/Recieve'
import Transfer from './dashboard/Transaction/Transfer'
import WalletPage from './dashboard/Transaction/WalletPage'
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={
            <PageLayout>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/about' element={<About />} />
                <Route path='/add' element={<Add />} />
                 <Route path='/transfer' element={<Transfer />} />
                <Route path='/recieve' element={<Recieve />} />
                <Route path='/walletpage' element={<WalletPage />} />
              
              </Routes>
            </PageLayout>
          } />

          {/* Dashboard Routes with DashboardLayout */}
          <Route path='/dashboard/*' element={
            <DashboardLayout>
              <Routes>
                <Route index element={<Overview />} />
              </Routes>
            </DashboardLayout>
          } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
