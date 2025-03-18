import React from 'react'
import Navigation from './Navigation/Navigation'
import Products from "./Products/Products"
import Reccommendation from './Reccommendation/Reccommendation'
import Sidebar from './Sidebar/Sidebar'


const App = () => {
  return (
    <>
    <Sidebar/>
    <Navigation />
    <Reccommendation />
    <Products/>
    
    </>
  )
}

export default App
