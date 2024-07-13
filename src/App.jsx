
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage/LoginPage'
import HomePage from './components/HomePage/HomePage'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<LoginPage />} />
          <Route path='/home' exact element={<HomePage />} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
