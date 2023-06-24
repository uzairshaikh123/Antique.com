import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import UserInfo from '../Pages/UserInfo'
import { AuthenticationForm } from '../Pages/Auth'
import Dashboard from '../Pages/Dashboard'
const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/auth' element={<AuthenticationForm/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/userinfo' element={<UserInfo/>}/>
   </Routes>
  )
}

export default AllRoutes