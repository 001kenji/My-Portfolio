import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './CSS/navbar.css'
import './App.css'

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";



import Home from './JSX/Home'
import Bio from './JSX/bio';
import Projects from './JSX/projects';
import Contact from './JSX/contact';
import Skills from './JSX/skills';
import Footer from './JSX/footer';
function App() {

  const NavDis = useRef()

  const [navSelect, setNav] = useState(false)
  const [current, setcurrent] = useState(1)

//  window.addEventListener('click', function () {
//   Show('hide')
//  })

  // useEffect(() => {
  //   NavDis.current.style.visibility = navSelect ? 'visible' : 'hidden'
  // },[navSelect])

  function Show(props) {
    if(props == 'show'){
      setNav(true)
      setcurrent(0)

    }
    else if(props == 'hide'){
      setNav(false)
      setcurrent(1)

    }else if(props == 'comp'){
      setNav(false)
      setcurrent(0)
    }
  }

  window.addEventListener('resize', function() {
    if(this.screen.width >= 780) {
      setcurrent(0)
    }else {
      setcurrent(1)
    }
  })

  window.addEventListener('loadeddata', function () {
    if(screen.width >= 780) {
      setcurrent(0)
    }else {
      setcurrent(1)
    }
  })
  useEffect(  () => {
    if(screen.width >= 780) {
      setcurrent(0)
    }else {
      setcurrent(1)
    }
  },[])




  let mybutton = document.getElementById("arrowNav");

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
 
  <div id='home'> {/* navbar */}
      <div id='navbar-container-div'>{/* navbar container */}
            <div id='navbar-name-div'>
              <span id='name'>Brian Njuguna</span>
            </div>

            

            <div id='navbar-ham-div'> 
                {
                !navSelect ? <GiHamburgerMenu onClick={() => Show('show')} size={20} /> 
                :
                <MdOutlineCancel onClick={() => Show('hide')} size={22}/>

                }
            </div>
            
      </div>
      <div ref={NavDis} style={{transform: `translateX(-${current * 100}%)`}} className=' transition ease-in-out duration-500 bg-slate-950 bg-opacity-90 text-slate-100 p-2' id='navbar-content-div'>
              <ul>
                <li ><a href="#home">Home</a></li>
                <li><a href="#bio">Bio</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

  </div>

  <div >{/* home div */}
        <Home />
  </div>

  <div id='bio'>{/* bio div */}
        <Bio />
  </div>

  <div id='projects'>{/* projects div */}
      <Projects />
  </div>

  <div id='skills'>{/* skills div */}
      <Skills />
  </div>

  <div id='contact'>{/* contact div */}
      <Contact />
  </div>

  <div id='footer'>{/* footer div */}
      <Footer />
  </div>
    
    
      
    {/* <div id='arrowNav'>
        <a  href='#home' className='-mt-[6%]  bg-sky-800 rounded-md p-1 float-right w-7 h-7 text-center justify-center align-middle flex text-base'><FaArrowUp size={20} /></a>
    
      </div>    */}
  
      
      
  </>
  )
}

export default App
