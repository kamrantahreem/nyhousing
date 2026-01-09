import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'
import Buy from './Buy'
import Rent from './Rent'
import Properties from './Properties'
import Contact from './Contact'
import ListProperty from './ListProperty'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<BrowserRouter>
   <Navbar />
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/buy' element={<Buy/>}></Route>
  <Route path='/rent' element={<Rent/>}></Route>
  <Route path='/properties' element={<Properties/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path="/list-property" element={<ListProperty />} />
</Routes>
</BrowserRouter>

</>
  )
}

export default App
