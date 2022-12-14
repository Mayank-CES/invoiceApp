import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'


const SharedLayout = () => {
    // console.log(currentView)
    return(
      <div className="App">
        <div className="header">
          <Header/>
        </div>
        <Menu/>
        <Outlet/>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    )
}

export default SharedLayout