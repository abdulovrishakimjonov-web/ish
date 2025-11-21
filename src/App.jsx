import React from 'react'
import HomePages from './pages/HomePages'
import { Route, Routes } from 'react-router-dom'
import AboutPages from './pages/AboutPages'
import ContactPages from './pages/ContactPages'
import BlogPages from './pages/BlogPages'
import Layout from './components/Layout'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
       <Route path='/' element={<HomePages/>}/>
       <Route path='/about' element={<AboutPages/>}/>
       <Route path='/contact' element={<ContactPages/>}/>
       <Route path='/blog' element={<BlogPages/>}/>
       </Route>
    </Routes>
  )
}

export default App