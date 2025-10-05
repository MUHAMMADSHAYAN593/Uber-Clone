import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import UseProctectorWrapper from './pages/UseProctectorWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import UseCaptainProctectorWrapper from './pages/CaptainProctectorWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignup/>}/>
        <Route path='/home' element={<UseProctectorWrapper>
          <Home/>
          </UseProctectorWrapper>}/>
        <Route path='/user/logout' element={<UserLogout/>}/> 
        <Route path='/captain/logout' element={<CaptainLogout/>}/> 
         <Route path='/captain-home' element={<UseCaptainProctectorWrapper><CaptainHome/></UseCaptainProctectorWrapper>}/> 
         <Route path='/riding' element={<Riding/>}/>
         <Route path='/captain-riding' element={<CaptainRiding/>}/>
      </Routes>
     
    </div>
  )
}

export default App
