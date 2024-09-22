import React from "react";
import '../CSS/universal.css'


import { FaFacebookSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";



export default function Footer() {

    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer className=" bg-slate-900 text-slate-300" id="footer-owning-div">
            
            <div className=" md:flex md:flex-col md:gap-4 lg:flex-row lg:pt-2">
               <div  id="footer-social-div">{/* social div */}
                <span className=" text-2xl md:text-4xl text-sky-700"><a href=""><FaFacebookSquare /></a></span>
                <span className=" text-2xl md:text-4xl text-amber-500"><a title="briannjuguna694@gmail.com" href=""><SiGmail  /></a></span>
                <span className=" text-2xl md:text-4xl text-purple-800"><a href=""><FaGithub  /></a></span>
            </div>

            <div className=" text-slate-400" id="footer-brief-div">{/* brief div */}
                <blockquote>
                I love turning ideas into reality and building interactive interfaces that are both user-friendly, functional and visually appealing.
                </blockquote>
            </div> 
            </div>
            

            <div className=" text-slate-300" id="copyright">{/* copyright div */}
            <span className=" text-base text-center  flex">All Rights Reserved &#169; {year} . Designed by : Brian Njuguna</span>

            </div>
            
        </footer>
    )
}