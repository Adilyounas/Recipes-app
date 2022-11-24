import React from 'react'
import Home from './Home' 
import Searched from './Searched'
import Cusisine from './Cusisine'
import Recipe from './Recipe'
import {Route,Routes,useLocation} from "react-router-dom"
import {AnimatePresence} from "framer-motion"
const Page = () => {

  const location = useLocation()
  return (
   <AnimatePresence exitBeforeEnter>

    <Routes location={location} key={location.pathname} >
      <Route path='/' element={<Home />} />
      <Route path='/cuisine/:type' element={<Cusisine />} />
      <Route path='/searched/:search' element={<Searched />} />
      <Route path='/recipe/:name' element={<Recipe />} />



    </Routes>
   </AnimatePresence>
  

  
  
  )
}

export default Page