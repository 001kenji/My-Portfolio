import React from "react";
import '../CSS/universal.css'


import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




export default function Skills() {

    return (
        <>
            <div className=" bg-slate-950 bg-opacity-90" id="owning-skills-div">{/* owning skills div */}
                <div className=" text-slate-100" id='heading-skills-div'>{/* heading skills div */}
                    <big>SKILLS</big>
                    <span></span>
                </div>

                <div id="skills-container-div">
                    <div id="html">{/* html skills div */}
                        
                        <span><FaHtml5 className=" text-center mx-auto text-lg md:text-4xl  "  /><p>HTML</p></span>
                    </div>
                    <div id="css">{/* css skills div */}
                    <span ><FaCss3Alt  className=" text-center mx-auto text-lg md:text-4xl  "    /><p>CSS</p></span>
                    <span ><SiTailwindcss  className=" text-center mx-auto text-lg md:text-4xl  md:text-4xl "    /> <p className=" md:text-lg text-sm">TAILWINDCSS</p></span>
                    
                    </div>
                    <div id="js">{/* js skills div */}
                    <span ><IoLogoJavascript  className=" text-center mx-auto text-lg md:text-4xl  "    /> <p className=" md:text-lg text-sm">JAVASCRIPT</p></span>
                    <span > <FaReact  className=" text-center mx-auto text-lg md:text-4xl  "    /> <p>REACT</p> </span>
                    
                    </div>
                    <div>{/* github skills div */}
                    <span ><FaGithub  className=" text-center mx-auto "   size={20} /> <p>GITHUB</p></span>
                      
                    </div>
                </div>






            </div>
        
        </>
    )
}