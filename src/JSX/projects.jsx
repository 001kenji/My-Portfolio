import React, { useState } from "react";
import '../CSS/universal.css'
export default Projects 
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



import Nicholas1 from '../FILES/Images/Nicholas/1.png'
import delicaciesHotelImg from '../FILES/Images/delicaciesHotel.png'
import CityRealEstateImg from '../FILES/Images/CityRealEstate.png'
import GlobTransporterImg from '../FILES/Images/GlobTranspoter.png'
import rockPaperImg from '../FILES/Images/rockGame.png'
import WebCoutryImg from '../FILES/Images/ApiCoutry.png'

import UshindiSecImg from '../FILES/Images/ushindiSec.png'
import medicatorsImg from '../FILES/Images/medicators.png'
import B_IntelImg from '../FILES/Images/b-intel.png'
import JumiaCloneImg from '../FILES/Images/Jumia.png'
import carvillImg from '../FILES/Images/carvilla.png'
import uniearthImg from '../FILES/Images/uniearth.png'
import inanceImg from '../FILES/Images/inance.png'

function Projects()  {
        const projectData = [
            {
                name : 'Uni-Earth',
                description : 'This website project boasts a modern, responsive UI built with React, showcasing my expertise in front-end development. Leveraging the power of Tailwind CSS and my meticulous CSS craftsmanship, I\'ve created a pixel-perfect, accessible experience that seamlessly blends intuitive navigation with engaging visuals. This project isn\'t just a portfolio piece; it\'s a testament to my ability to elevate healthcare web design through clean code and thoughtful user-centricity.',
                url : 'https://uniearth.netlify.app/',
                status : 'Acconmlished',
                images : [uniearthImg]

            },{
                name : 'Jumia-Clone',
                description : 'I have crafted this project with both front-end and back-end expertise, leveraging modern languages for each layer.  The front-end, built with HTML, CSS, JavaScripts with its framework\'s, delivers a seamless user experience. Secure RESTful API endpoints, powered by Python with it\'s modules, provide robust data access and manipulation. JSON Web Tokens ensure secure authentication, while comprehensive security measures safeguard your data throughout. This project is a testament to my commitment to both user experience and robust architecture.',
                url : 'https://b-intel-clone.netlify.app/',
                status : 'Acconmlished',
                images : [JumiaCloneImg]

            },
            {
                name : 'B-Intel',
                description : 'This project leverages a robust technology stack to deliver a seamless user experience. Users can effortlessly create an account and securely log in to access a personalized dashboard. The front-end is meticulously crafted with HTML, CSS, JavaScript, and Tailwind CSS, ensuring an intuitive and visually appealing interface. React empowers dynamic content rendering, while Django and the PostgreSQL database provide a robust and scalable backend foundation. Python ties everything together, enabling efficient data management and server-side logic.',
                url : 'https://b-intel.netlify.app/',
                status : 'Acconmlished',
                images : [B_IntelImg]

            },
            {
                name : 'World Coutry Web',
                description : 'Crafted with React`s agility and styled with Tailwind`s elegant breeze, this interactive globe showcases every nation under the sun. HTML paints the canvas, CSS sculpts the details, and JavaScript breathes life into a dynamic exploration of countries and cultures. Prepare to embark on a journey across borders, powered by the cutting edge of the front-end.',           
                url : 'https://worldcoutries.netlify.app/',
                status : 'Acconmlished',
                images : [WebCoutryImg]

            },
            {
                name : 'Rock-Paper-scissors-Game',
                description : 'My passion for building captivating interfaces shines in my Rock-Paper-Scissors-Spock-Lizard game, a testament to my expertise in front-end development. Crafted with HTML, CSS, Tailwind CSS, and React, it`s a playful playground showcasing clean lines, intuitive interactions, and a sprinkle of geek charm, all meticulously coded to deliver a delightful user experience. Dive in and see my front-end skills at play!',
                url : 'https://rockpaperslizard.netlify.app/',
                status : 'Acconmlished',
                images : [rockPaperImg]

            },
            {
                name : 'Glob Transporter',
                description : 'Experience seamless transportation with our client`s cutting-edge Gob Transporter website, crafted using the latest technologies including HTML5, CSS, Tailwind CSS, and Javascript. Immerse yourself in a visually stunning and user-friendly interface, ensuring a smooth and efficient journey through the vast world of gob transportation. Embrace innovation and reliability with this state-of-the-art web platform.',
                url : 'https://globtransporter.netlify.app/',
                status : 'Acconmlished',
                images : [GlobTransporterImg]

            },            
            ]
    // const [imgScroll,setImgScroll] = useState(0)
    const [objScroll,setObjScroll] = useState(0)
    // let PrevImg = (props) => {
    //     if(imgScroll ===0){
    //        setImgScroll(projectData[props].images.length - 1)
    //     }
    //     else {
    //        setImgScroll(imgScroll - 1)
    //     }
    //  }
    //  let NextImg = (props) => {
    //     if(imgScroll ===projectData[props].images.length - 1){
    //        setImgScroll( 0)
    //     }
    //     else {
    //        setImgScroll(imgScroll + 1)
    //     }
    //  }

     let PrevObj = (props) => {
        if(objScroll ===0){
           setObjScroll(projectData.length - 1)
        }
        else {
           setObjScroll(objScroll - 1)
        }
     }
     let NextObj = (props) => {
        if(objScroll ===projectData.length - 1){
           setObjScroll( 0)
        }
        else {
           setObjScroll(objScroll + 1)
        }
     }

   

    const projectDataMapper = projectData.map((detials,i) => 
        <div key={i} className="  rounded-sm p-2 bg-slate-100"  id="mapping-project-div">
            <div id="mapping-project-container" className=" ">
                           
                            <div className= "   transition ease-in-out duration-500 relative  pt-4 w-[100%] m-auto" id="mapping-image-div">
                            {detials.images.map((url)=> <img className=" sm:rounded-e-md " src={url}></img>)}
                            </div>
                           
                            
            </div>
         
            <div className=" " id="mapping-content-div">
                <big className=" underline underline-offset-2  ">{detials.name}</big>
                <blockquote className=" text-center text-sm">{detials.description}</blockquote>
                <small className="ml-auto pr-4 mb-3  text-base italic justify-center align-middle content-center flex-row flex gap-2"><p className=" italic text-sm">Status :</p>{detials.status}</small>
                <button title="Visit Site" className="md:text-xl mb-2 bg-amber-500 w-fit mx-auto p-1 rounded-sm focus:bg-transparent focus:border-amber-500"><a href={detials.url}>Visit Site</a></button>
            </div>
        </div>
    )


    return (
        <>
        
        <div className=" bg-slate-50" id="owning-project-div">{/* owning project div */}
            <div id="heading-project-div">{/* heding project div */}
                <big>Projects</big>
                <blockquote> Here are a  my projects that I'm  proud of</blockquote>
            </div>

            <div className="w-[100%]" id="project-carousel-div">{/* carousels project div */}
                <div id="carousels-project-div" style={{transform: `translateX(-${objScroll * 100}%)`}}  className= "   transition ease-in-out duration-500 relative  pt-4 w-[100%] m-auto"  >{projectDataMapper}</div>
            </div>
            <div className="flex flex-row justify-center gap-8 mx-auto ">
                <FaArrowLeft onClick={() => PrevObj()} id="arrowL" className=" text-black" size={20} />  {/* image div */}
                    
                <FaArrowRight onClick={() => NextObj()} id="arrowR" className=" text-black" size={20}  />
                         
            </div>

            <div className="md:mx-2.5 " id="project-footer-div">{/* project footer div */}
                <span className=" text-base sm:text-lg md:text-xl lg:2xl" > " The code is poetry, but the pixels are the paint. "</span>
                <small className=" text-base sm:text-lg md:text-xl lg:2xl flex flex-row gap-4">quote by <p className=" underline underline-offset-4 decoration-cyan-700   animate-bounce ">Pablo Picasso</p></small>
            </div>


        </div>
        
        </>
    )
}
