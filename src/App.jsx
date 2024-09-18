import './App.css'
import Home from './Pages/Home'
import ListRdv from './Pages/ListRdv'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rdv" element={<ListRdv />} />
      </Routes>
  
    </BrowserRouter>
  )
}

export default App
