import React, { Component, useEffect, useState } from "react";
import '../App.css'
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md"; 
import MyIcon from '../../public/bn.png'
import { GiHamburgerMenu } from "react-icons/gi"; 
import { CiMenuFries } from "react-icons/ci";
import { IoAddSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { BsReverseBackspaceReverse } from "react-icons/bs";
export default function Navbar() {
    
    const [showNav, setShowNav] = useState(false)

    function ToogleNav(props) {
        setShowNav((e) => !e)
          
          
      }
    
      window.addEventListener('resize', function() {
        if(this.screen.width >= 780) {
          setShowNav(true)
        }else {
          setShowNav(false)
        }
      })
    
      window.addEventListener('loadeddata', function () {
        if(screen.width >= 780) {
          setShowNav(true)
          
        }else {
          setShowNav(false)
        }
      })
      useEffect(  () => {
        if(screen.width >= 780) {
          setShowNav(true)
        }else {
          setShowNav(false)
        }
      },[])


      window.onscroll = function () {
        var navbar = document.getElementById('botton-nav-div')
        var sticky = navbar.offsetTop;
        function myFunction() {
          if (window.pageYOffset >= sticky) {
            navbar.style.position = 'sticky'
          } else {
            navbar.style.position = 'relative'
          }
        }


        myFunction()
      }
      
      const navStyler = {
        // display : current == 0 ? 'flex' : 'none',
        height : window.innerWidth >= 768 ? 'fit-content' : showNav == true ? '200px' : '0px',
        
      }

    return (
        <>

        <div className=" bg-slate-800 border-b-[1px] border-b-slate-500  text-slate-200" id='universal-navbar-div'>           
            <div className=" overflow-hidden  transition-all duration-500" id="botton-nav-div">
                <div id="botton-container-div">
                    <div className=" ml-2 md:w-[40%] flex flex-row justify-start align-middle py-[1rem]" id="botton-img-div">
                        <span className=" flex font-[BigTitle] flex-row gap-1 align-middle text-3xl  h-fit text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-sky-500 font-bold " ><p className="">B</p>N</span>
                    </div>
                
                <div id="botton-nav-content-div" style={navStyler} className={`   md:min-w-[50%] transition-all duration-500  `}>
                    <ul className={` font-mono font-semibold flex flex-col gap-2 overflow-hidden  w-full ml-2 md:ml-0 md:flex-row my-auto md:justify-around `} id="nav-botton-list">
                        <li className=" my-auto  hover:bg-gradient-to-r from-purple-500 to-sky-500 group  cursor-pointer py-2  pr-2  hover:pl-2 text-left  transition-all duration-300" >
                            <a className=" group-hover:text-slate-100  " href="#AboutMe-Container">About</a>
                        </li>
                        <li className=" my-auto hover:bg-gradient-to-r from-purple-500 to-sky-500 group cursor-pointer py-2  pr-2  hover:pl-2 transition-all duration-300" > <a className=" group-hover:text-slate-100" href="#skills-Container">Skills</a></li>
                        <li className=" my-auto hover:bg-gradient-to-r from-purple-500 to-sky-500 group cursor-pointer py-2  pr-2  hover:pl-2 transition-all duration-300" ><a className=" group-hover:text-slate-100" href="#Projects-Container">Projects</a></li>
                        <li className=" my-auto  hover:bg-gradient-to-r from-purple-500 to-sky-500 group cursor-pointer py-2  pr-2  hover:pl-2 transition-all duration-300" ><a className=" group-hover:text-slate-100" href="#Contact-Container">Contact Me</a></li>
                    </ul>
                </div>
                
                </div>
                
                <label className=" mt-[17px] mb-auto btn btn-circle h-full hover:border-none border-none hover:bg-transparent swap bg-transparent mr-2 shadow-none swap-rotate md:hidden">
                   <input type="checkbox" />

                    <CiMenuFries  onClick={ToogleNav} className="swap-off fill-current  mx-auto text-amber-600 cursor-pointer hover:text-sky-500 my-auto transition-all duration-300  font-semibold text-3xl" />
                
                    <BsReverseBackspaceReverse    onClick={ToogleNav} className="swap-on fill-current   mx-auto text-amber-600  cursor-pointer hover:text-sky-500 my-auto transition-all duration-300  font-semibold text-3xl" />
                </label>
            </div>

        </div>
        
        </>
    )
}