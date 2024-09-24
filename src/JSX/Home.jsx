import React, { useState } from "react";
import Aos from "aos";
import AOS from 'aos'
import '../CSS/universal.css'
import Navbar from "./nav";
import MyImage from '../assets/images/m3.jpg'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiVitest } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { BsCaretLeftFill } from "react-icons/bs";
import { BsCaretRightFill } from "react-icons/bs";
import { LuGithub } from "react-icons/lu";
import { GoLinkExternal } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import HomeImg from '../assets/images/home logo.jpg'
import bgImage from '../assets/images/bgimage.jpg'
// project image importation
import ChatAppImg from '../assets/Projects/chat.png'
import JobAppImg from '../assets/Projects/job.png'
import jumiaImg from '../assets/Projects/jumia.png'
import medicatorsImg from '../assets/Projects/medicators.png'
import NoteAppImg from '../assets/Projects/note.png'
export default Home 

function Home()  {
    const date = new Date()
    const year = date.getFullYear()
    const [CurrentScroll,SetCurrentScroll] = useState(0)
    const [DispImages,SetDispImages]= useState(true)
    var homeimg = bgImage
    const MyProjects = [
        {
            'image' : ChatAppImg,
            'ProjectType' : 'Featured Project',
            'ProjectTitle' : 'Chat Application',
            'Description' : 'B-Intel Chat-App: A Feature-Rich Communication Platform B-Intel Chat-App is a comprehensive chat application designed to streamline communication and foster meaningful connections. ',
            'GithubLink' : 'https://github.com/001kenji/Chat-Application.git',
            'ExternalUrl' : 'https://github.com/001kenji/Chat-Application.git'
        },
        {
            'image' : JobAppImg,
            'ProjectType' : 'Featured Project',
            'ProjectTitle' : 'Job Application',
            'Description' : 'A full-stack web application with authentication for login, sign up, reset password and account activation.Designed to facilitate job posting and application processes. Employers can create and manage job listings, while job seekers can apply, withdraw applications, and track their status.',
            'GithubLink' : 'https://github.com/001kenji/Job-Application.git',
            'ExternalUrl' : 'https://github.com/001kenji/Job-Application.git'
        },
        {
            'image' : NoteAppImg,
            'ProjectType' : 'Featured Project',
            'ProjectTitle' : 'Notepad Application',
            'Description' : 'A standalone notepad application that prioritizes user privacy and data security. It provides a platform for users to create and store notes with end-to-end encryption, ensuring that only the user can access their data. The application maintains a record of past notes for easy reference and management.',
            'GithubLink' : 'https://github.com/001kenji/Notepad-Application.git',
            'ExternalUrl' : 'https://github.com/001kenji/Notepad-Application.git'
        },
        {
            'image' : jumiaImg,
            'ProjectType' : 'Featured Project',
            'ProjectTitle' : 'Jumia Replication',
            'Description' : 'A full-stack web application with authentication for login and sign-up. Designed to facilitate job posting and application processes.Intergrated a dynamic front-end for users to browse with a robust back-end managing product listings, user accounts, orders, and payments.',
            'GithubLink' : 'https://github.com/001kenji/Frontend-Clone-Jumia.git',
            'ExternalUrl' : 'https://b-intel-clone.netlify.app/'
        },
        {
            'image' : medicatorsImg,
            'ProjectType' : 'Featured Project',
            'ProjectTitle' : 'Medical Website',
            'Description' : 'Leveraging React\'s composability and Tailwind\'s rapid styling, I crafted a dynamic medical information portal. Crisp HTML and JavaScript power interactive data visualizations, while CSS ensures pixel-perfect responsiveness across all devices.',
            'GithubLink' : 'https://github.com/001kenji/Medicators.git',
            'ExternalUrl' : 'https://medicators.netlify.app/'
        },
    ]
    const MapProjects = MyProjects.map((items,i) => {

        return (
            <div key={i} className={`flex avatar flex-col md:flex-row h-fit  gap-0 mx-auto min-w-full w-full`} >
                <div className=" w-full  sm:max-w-[350px] lg:max-w-[400px] rounded" >
                    <img  className=" opacity-80 z-20 hover:opacity-100 object-top md:object-left-top border-[1px] h-fit  border-purple-500 border-opacity-80   " src={items.image} alt="" />
                </div>
                <blockquote className=" md:z-30 opacity-100 md:my-auto   flex flex-col bg-gray-600 md:bg-transparent bg-opacity-50 -translate-y-10 md:translate-x-0 mx-auto pt-2 w-[90%] rounded text-right gap-1">
                    <span className=" text-rose-500 bg-slate-800 w-fit ml-auto mr-4 lg:text-xl  px-4 py-1 bg-opacity-70 " >{items.ProjectType}</span>
                    <span className=" text-slate-200  px-4 w-full font-[BigTitle] text-lg lg:text-2xl  " >{items.ProjectTitle}</span>
                    <span className=" bg-slate-900 p-2 break-words text-[small] md:rounded-lg xs:text-base lg:text-lg bg-opacity-90 md:-translate-x-12 font-mono whitespace-pre-wrap" >{items.Description}</span>
                    <div className=" w-fit ml-auto mr-2 py-2 gap-4 flex min-h-[40px] flex-row ">
                        <a href={items.GithubLink} target="_blank" ><LuGithub className=" text-lg lg:text-2xl hover:text-xl text-purple-500 opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer " /></a>
                        <a href={items.ExternalUrl} target="_blank" ><GoLinkExternal className=" text-lg lg:text-2xl hover:text-xl text-amber-500 opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer " /></a>
                    </div>
                </blockquote>
            </div>
        )
    })
  
    Aos.init()

    let PrevObj = (props) => {
        if(CurrentScroll === 0){
           SetCurrentScroll(MyProjects.length - 1)
        }
        else {
           SetCurrentScroll(CurrentScroll - 1)
        }
     }
     let NextObj = (props) => {
        if(CurrentScroll ===MyProjects.length - 1){
           SetCurrentScroll( 0)
        }
        else {
           SetCurrentScroll(CurrentScroll + 1)
        }
     }
  

    return (
        <>
            <div className='relative opacity-100 z-50' id='navSect'>
                <Navbar />
                
            </div>
            
            {/* background image Container */}

            {/* universal container */}
            <div id="universalContainer" className={` relative overflow-hidden w-full  bg-cover bg-no-repeat bg-fixed    z-50 h-full min-h-full  flex flex-col justify-center text-slate-100   `} >
                {/* home Container */}
                <div className=" flex flex-col h-fit md:flex-row-reverse min-h-[1000px] z-40 justify-start md:justify-center bg-slate-800 bg-opacity-80" >
                    <div data-aos="zoom-in"  data-aos-easing="ease-in-sine" data-aos-duration="700" className="mask  mask-squircle sm:w-[500px] mt-20  md:w-[600px] mx-auto md:my-auto  ">
                        <img className=" opacity-80 " src={HomeImg} />
                    </div>
                    <blockquote  className=" mt-20  mx-4 md:pl-2 text-sm md:text-base lg:text-lg md:my-auto md:mx-0 md:ml-20  z-30 xl:text-xl flex flex-col flex-nowrap gap-2 text-slate-200 font-[NavText] ">
                        <p data-aos="fade-up"  data-aos-easing="ease-in-sine" data-aos-duration="700"  className=" " >Greetings, my name is</p>
                        <big data-aos="fade-up"  data-aos-easing="ease-in-sine" data-aos-duration="1000" className="inline-flex text-slate-50 text-4xl lg:text-6xl xl:text-7xl  font-[BigTitle] w-fit">Brian Njuguna <span className=" inline w-fit mx-2 text-base lg:text-2xl mt-auto max-w-fit animate-bounce text-sky-500" >.</span> </big> 
                        <p data-aos="fade-up"  data-aos-easing="ease-in-sine" data-aos-duration="1300" className=" inline-flex max-w-[800px] mt-3  " >A Full Stack Web Developer specializing in building exceptional web applications that transform ideas into reality. I am dedicated to creating comprehensive, fully functional applications with a focus on quality and innovation.</p>

                    </blockquote>
                </div>
                {/* about container */}
                <div  id="AboutMe-Container" className=" flex flex-col lg:flex-row lg:align-middle h-fit min-h-[1000px] w-full justify-center gap-0 bg-slate-800 bg-opacity-80" >
                    <blockquote className=" font-[NavText]  mx-4 md:pl-2 max-w-[600px] lg:max-w-[50%] sm:text-base text-sm md:text-base  my-auto  md:mx-0 md:ml-20 z-30  flex flex-col flex-nowrap gap-2 text-slate-200 ">
                        <big data-aos="flip-left"  data-aos-easing="ease-in-sine" data-aos-duration="1500" className="inline-flex text-slate-50 text-3xl lg:text-5xl  font-[BigTitle] w-fit"><span className=" inline w-fit mx-2 text-lg lg:text-xl mt-auto max-w-fit animate-pulse text-sky-500" >I.</span>About Me</big> 
                        <p data-aos="fade-up"  data-aos-easing="ease-in-sine" data-aos-duration="700" className=" inline-flex   mt-3  " >
                            My passion for programming began in 2018 with my first encounter with C++. Under the guidance of experienced mentors, I leveraged this powerful language to create applications that addressed real-world challenges.
                        </p>
                        <p data-aos="fade-up"  data-aos-easing="ease-in-sine" data-aos-duration="1000" className=" inline-flex  mt-3  " >
                            Fast forward to 2022, my focus shifted to the front-end. Through website cloning, portfolio development, and tackling mentor challenges, I honed my skills in HTML, CSS, JavaSript, and modern front-end frameworks. This journey naturally led me to explore backend development, integrating databases and backend languages to create full-stack solutions.
                        </p>
                        <p data-aos="fade-up"  data-aos-easing="ease-in-sine" data-aos-duration="1300" className=" inline-flex  mt-3  " >
                            As a developer, I am committed to creating tailored applications that bring clients' visions to life. My approach to coding goes beyond just functionality—each line of code is crafted with precision, creativity, and a touch of ingenuity. I specialize in building user-centric interfaces that not only captivate visually but also offer seamless, intuitive navigation. By blending innovation with practicality, I ensure that the final product not only meets your needs but exceeds your expectations.
                        </p>

                    </blockquote>
                    <div className="mask mask-squircle w-40  sm:w-72 mx-auto lg:mb-auto lg:my-auto   ">
                        <img className=" " src={MyImage} />
                    </div>
                </div>
                {/* skills container */}
                <div  id="skills-Container" className=" flex py-5 flex-col h-fit min-h-[1000px] w-full justify-center gap-0 bg-slate-800 bg-opacity-80" >
                    <blockquote className=" font-[NavText]  mx-4  w-full sm:text-base text-sm md:text-base  my-auto  md:mx-0  z-30  flex flex-col flex-nowrap gap-2 text-slate-200 ">
                        <big data-aos="flip-left"  data-aos-easing="ease-in-sine" data-aos-duration="1500" className="inline-flex md:pl-2 text-slate-50 text-3xl lg:text-5xl  font-[BigTitle] md:ml-20 w-fit"><span className=" inline w-fit mx-2 text-lg lg:text-xl mt-auto max-w-fit animate-pulse text-sky-500" >II.</span>Skills</big> 
                        
                        <div className=" w-full flex flex-col mt-10 gap-4 flex-wrap md:justify-around md:flex-row h-fit min-w-full" >
                            <div className=" w-[90%] xs:w-[300px] lg:w-[350px] h-fit p-4 bg-opacity-50 bg-slate-800 border hover:shadow-md hover:shadow-purple-500 transition-all duration-300 border-purple-500 rounded-lg shadow xs:mx-auto sm:p-6 ">
                                    <h5 className="mb-3 text-base font-semibold  md:text-xl text-white">
                                        Frontend Stack
                                    </h5>
                                    <p className="text-sm font-normal text-gray-400 ">This is my frontend stack</p>
                                    <ul className="my-4 space-y-3">
                                        <li>
                                            <a href="https://html5.org/" target="_blank" className="flex items-center group p-3 text-base font-bold  rounded-lg  group hover:shadow bg-gray-600 hover:bg-gray-500 text-white">
                                                <FaHtml5 className=' text-xl group-hover:text-red-400 transition-all duration-300  w-4' />
                                                <span className="flex-1 ms-3 whitespace-nowrap tracking-wider ">HTML5</span>
                                                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://css3.com/" target="_blank"  className="flex items-center group p-3 text-base font-bold  rounded-lg  group hover:shadow bg-gray-600 hover:bg-gray-500 text-white">
                                                <FaCss3Alt className=' text-xl w-4 group-hover:text-blue-400 transition-all duration-300 ' />
                                                <span className="flex-1 ms-3 whitespace-nowrap tracking-wider ">CSS3</span>
                                                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://tailwindcss.com/" target="_blank"  className="flex items-center group p-3 text-base font-bold  rounded-lg  group hover:shadow bg-gray-600 hover:bg-gray-500 text-white">
                                                <SiTailwindcss className=' text-xl w-4 group-hover:text-sky-500 transition-all duration-300 ' />
                                                <span className="flex-1 ms-3 whitespace-nowrap tracking-wider ">Tailwind CSS</span>
                                                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.javascript.com/" target="_blank"  className="flex items-center group p-3 text-base font-bold  rounded-lg  group hover:shadow bg-gray-600 hover:bg-gray-500 text-white">
                                                <SiJavascript className=' text-xl w-4 group-hover:text-yellow-400 transition-all duration-300 ' />
                                                <span className="flex-1 ms-3 whitespace-nowrap tracking-wider ">JavaScript ES6 </span>
                                                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://react.dev/" target="_blank"  className="flex items-center group p-3 text-base font-bold  rounded-lg  group hover:shadow bg-gray-600 hover:bg-gray-500 text-white">
                                                <FaReact className=' text-xl w-4 group-hover:text-blue-400 transition-all duration-300 ' />
                                                <span className="flex-1 ms-3 whitespace-nowrap tracking-wider ">React </span>
                                                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://vitejs.dev/" target="_blank"  className="flex items-center group p-3 text-base font-bold  rounded-lg  group hover:shadow bg-gray-600 hover:bg-gray-500 text-white">
                                                <SiVitest className=' text-xl w-4 group-hover:text-amber-500 transition-all duration-300 ' />
                                                <span className="flex-1 ms-3 whitespace-nowrap tracking-wider ">Vite </span>
                                                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                                            </a>
                                        </li>
                                    </ul>
                            </div>
                            <div className=" w-[90%] xs:w-[300px] lg:w-[350px] h-fit p-4 bg-opacity-50 bg-slate-800 border hover:shadow-md hover:shadow-purple-500 transition-all duration-300 border-purple-500 rounded-lg shadow xs:mx-auto sm:p-6 ">
                                    <h5 className="mb-3 text-base font-semibold  md:text-xl text-white">
                                        Backend Stack
                                    </h5>
                                    <p className="text-sm font-normal text-gray-400 ">This is my backend stack</p>
                                    <ul className="my-4 space-y-3">
                                        <li>
                                            <a href="https://www.python.org/" target="_blank"  className="flex group items-center p-3 text-base font-bold  rounded-lg  group hover:shadow bg-gray-600 hover:bg-gray-500 text-white">
                                                <FaPython  className=' group-hover:text-sky-400 transition-all duration-300  text-xl w-4' />
                                                <span className="flex-1  ms-3 whitespace-nowrap tracking-wider ">Python</span>
                                                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.djangoproject.com/" target="_blank"  className="flex items-center group p-3 text-base font-bold  rounded-lg  group hover:shadow bg-gray-600 hover:bg-gray-500 text-white">
                                                <SiDjango  className='group-hover:text-green-400 transition-all duration-300 text-xl w-4' />
                                                <span className="flex-1 ms-3 whitespace-nowrap tracking-wider ">Django</span>
                                                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://postgresql.org/" target="_blank"  className="flex items-center group p-3 text-base font-bold  rounded-lg  group hover:shadow bg-gray-600 hover:bg-gray-500 text-white">
                                                <BiLogoPostgresql  className='group-hover:text-sky-400 transition-all duration-300 text-xl w-4' />
                                                <span className="flex-1 ms-3 whitespace-nowrap tracking-wider ">PostgreSQL</span>
                                                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://redis.io/" target="_blank"  className="flex items-center group p-3 text-base font-bold  rounded-lg  group hover:shadow bg-gray-600 hover:bg-gray-500 text-white">
                                                <SiRedis  className='group-hover:text-red-400 transition-all duration-300 text-xl w-4' />
                                                <span className="flex-1 ms-3 whitespace-nowrap tracking-wider ">Redis</span>
                                                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                                            </a>
                                        </li>
                                       
                                    </ul>
                            </div>
                        </div>
                        


                    </blockquote>
                </div>
                {/* Projects Container */}
                <div  id="Projects-Container" className=" flex py-5 flex-col h-fit min-h-[1000px] w-full justify-center gap-0 bg-slate-800 bg-opacity-80" >
                    <div className=" font-[NavText]  mx-4  w-full sm:text-base text-sm md:text-base  my-auto  md:mx-0  z-30  flex flex-col flex-nowrap gap-2 text-slate-200 ">
                        <big data-aos="flip-left"  data-aos-easing="ease-in-sine" data-aos-duration="1500" className="inline-flex md:pl-2 text-slate-50 text-3xl lg:text-5xl  font-[BigTitle] md:ml-20 w-fit"><span className=" inline w-fit mx-2 text-lg lg:text-xl mt-auto max-w-fit animate-pulse text-sky-500" >III.</span>Projects</big> 
                        
                        <div className=" w-full flex flex-col justify-start   mt-20 gap-0 h-fit min-w-full" >
                            {/* carousel */}
                            <div className=" flex w-[80%] max-w-[1000px] bg-transparent h-fit overflow-hidden md:min-h-[500px] justify-center mx-auto flex-row align-middle  ">
                                <div style={{transform: `translateX(-${CurrentScroll * 100}%)`}}  className={`flex flex-row w-full transition-all ease-in-out m-auto duration-300 bg-transparent   mx-auto  overflow-visible  gap-0 h-fit`} >
                                    {MapProjects}
                                </div>
                            </div>
                            
                            {/* arrow div */}
                            <div className=" flex flex-row text-2xl w-full justify-center gap-10 py-3 mb-auto " >
                                <BsCaretLeftFill onClick={() => PrevObj()} className=" cursor-pointer text-gray-400 hover:text-white hover:shadow-lg bg-transparent hover:shadow-slate-300 transition-all duration-300" />
                                <BsCaretRightFill onClick={() => NextObj()} className=" cursor-pointer text-gray-400 hover:text-white hover:shadow-lg bg-transparent hover:shadow-slate-300  transition-all duration-300" />
                                
                            </div>
                        </div>
                        


                    </div>
                   
                </div>
                {/* Contact container */}
                <div  id="Contact-Container" className=" flex py-5 flex-col h-fit min-h-[1000px] w-full justify-center gap-0 bg-slate-800 bg-opacity-80" >
                    <blockquote className=" font-[NavText]  mx-4  w-full sm:text-base text-sm md:text-base  my-auto  md:mx-0  z-30  flex flex-col flex-nowrap gap-2 text-slate-200 ">
                        <big data-aos="flip-left"  data-aos-easing="ease-in-sine" data-aos-duration="1500" className="inline-flex md:pl-2 text-slate-50 text-3xl lg:text-5xl  font-[BigTitle] md:ml-20 w-fit"><span className=" inline w-fit mx-2 text-lg lg:text-xl mt-auto max-w-fit animate-pulse text-sky-500" >IV.</span>Contact Me</big> 
                        
                        <div  className=" w-[90%] md:w-[50%] mx-auto flex flex-col mt-10 gap-4 flex-wrap md:justify-around md:flex-row h-fit " >
                            <p data-aos="fade-up"  data-aos-easing="ease-in-sine" data-aos-duration="700" className="  max-w-[800px] w-fit mt-3 pl-4 md:mx-auto md:text-lg  " >Looking to bring your digital vision to life?Contact me for expert web and app development services.</p>
                            <button data-aos="fade-up"  data-aos-easing="ease-in-sine" data-aos-duration="1000" className=" flex w-[150px] h-[63px] focus:h-[61px] focus:w-[140px] md:focus:w-[190px] md:w-[200px] mx-auto p-[3px] group transition-all duration-500 hover:from-rose-600 hover:to-amber-600 rounded-sm outline-none  text-base bg-gradient-to-r from-purple-600 to-sky-600  " >
                                <a 
                                    href="mailto:briannjuguna694@gmail.com?subject=Hello&body=Hi%2C%20I%20would%20like%20to%20get%20in%20touch!"
                                    className=" w-full h-fit my-auto py-4 px-8  bg-slate-800 border-0 ring-0 outline-none  " >
                                     Say Hi
                                </a>                                   
                            </button>
                        </div>
                        


                    </blockquote>
                </div>
                {/* footer container */}
                <div className="flex py-5 flex-col h-fit min-h-[100px] w-full justify-center gap-0 bg-slate-800 bg-opacity-80 "  >
                    <div className=" flex flex-row w-full md:text-xl max-w-[600px] mx-auto justify-around flex-wrap">
                         <a href="https://www.facebook.com/profile.php?id=61554162522919" target="_blank" className=" text-blue-500 hover:text-amber-500 transition-all duration-300" ><FaFacebookF /></a>
                         <a 
                            href="mailto:briannjuguna694@gmail.com?subject=Hello&body=Hi%2C%20I%20would%20like%20to%20get%20in%20touch!"
                            target="_blank" 
                            className=" text-amber-500 hover:text-lime-500 transition-all duration-300" ><SiGmail />
                        </a>
                        <a href="https://github.com/001kenji" target="_blank" className=" text-purple-500 hover:text-rose-500 transition-all duration-300" ><FiGithub /></a>
                        
                    </div>
                    <blockquote className="flex flex-col mt-4 lg:text-base md:flex-row md:gap-2 md:justify-center text-[small] flex-nowrap font-[NavText] gap-1 text-gray-300  ">
                        <p className="inline-flex  mx-auto md:mx-0   w-fit">All rights reserved &#169; {year} </p> 
                            <p className="inline-flex mx-auto md:mx-0   w-fit" >Built & Designed by
                                    <a href="https://github.com/001kenji" target="_blank" className=" inline  w-fit mx-2 hover:text-amber-400 transition-all duration-300  text-sky-500" >Brian Njuguna</a> 
                        
                            </p>
                            
                    </blockquote>
                </div>
                {/* side sticky email div */}
                <div aria-readonly aria-disabled className=" animate-bounce-slow  h-full min-h-screen fixed top-0 z-40 opacity-50 flex-col flex w-[20px] text-center text-slate-400 lg:ml-1 mt-60 font-mono" >
                    <p className=" rotate-90 mt-20 text-sm lg:text-base transition-all tracking-widest duration-300  mb-auto" >briannjuguna694@gmail.com</p>
                    
                </div>
                {/* fixed background image */}
                <div  className=" hidden fixed mt-20 h-full w-full  bg-cover lg:bg-center lg:opacity-[0.08] opacity-[0.11] z-0 " ></div>
            </div>
            


            
            
            
        </>
    )
}