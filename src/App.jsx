import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css' 
import Home from './pages/home'
import Profile from './pages/profile'
import Setting from './pages/setting'
import { AuthProvider } from './contexts/AuthContexts'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/setting" element={<Setting/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
