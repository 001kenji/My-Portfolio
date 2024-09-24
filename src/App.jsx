import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './CSS/navbar.css'
import './App.css'
import {HashRouter,Route,Routes,Router,BrowserRouter} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";

import Home from './JSX/Home'

import SplashScreen from './JSX/splashscreen';
import ErrorBoundary from './JSX/error';
function App() {


  // window.onscroll = function() {scrollFunction()};
  
  // function scrollFunction() {
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //     mybutton.style.display = "block";
  //   } else {
  //     mybutton.style.display = "block";
  //   }
  // }

  return (
      <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ErrorBoundary> <SplashScreen/> </ErrorBoundary> } />
              <Route path="/home" element={ <ErrorBoundary> <Home /> </ErrorBoundary> } />
                         
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
