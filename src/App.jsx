import { useState } from 'react'
import './App.css'
import Create from './components/Create'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from './components/Read'
import Update from './components/Update'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
          <Route exact path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
