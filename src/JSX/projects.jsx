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

function Projects()  {
        const projectData = [
            {
                name : 'Medicators',
                description : 'Leveraging React\'s composability and Tailwind\'s rapid styling, I crafted a dynamic medical information portal. Crisp HTML and JavaScript power interactive data visualizations, while CSS ensures pixel-perfect responsiveness across all devices',
                url : 'https://medicators.netlify.app/',
                status : 'Acconmlished',
                images : [medicatorsImg]

            },
            {
                name : 'Ushindi Sec. template',
                description : 'Dive into the heart of Ushindi Secondary template where our vibrant community flourishes. Explore our curriculum, meet our dedicated staff, and discover the enriching services we offer, all within a few clicks. Prepare to be inspired.',
                url : 'https://ushinditemp.netlify.app/',
                status : 'On Development',
                images : [UshindiSecImg]

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
            {
                name : 'City Real Estate',
                description : 'Immerse yourself in the seamless experience of our cutting-edge real estate website, meticulously crafted with HTML5, CSS, Tailwind CSS, and JavaScript. Explore our user-friendly interface that effortlessly combines aesthetic appeal with intuitive navigation, ensuring a smooth and visually pleasing journey as you search for your dream property. From responsive design to dynamic features, our website sets the standard for modern and engaging online real estate exploration.',
                url : 'https://cityrealestate.netlify.app/',
                status : 'Acconmlished',
                images : [CityRealEstateImg]

            },
            {
                name : 'Delicacies Hotel',
                description : 'Indulge your senses at our exquisite Delicacies Hotel, where culinary artistry meets elegant design. Immerse yourself in a seamless web experience crafted with cutting-edge technologies, including HTML5, CSS, Tailwind CSS, and JavaScript, ensuring a visually stunning and user-friendly journey through the culinary delights our hotel has to offer. Explore our menus, book your reservations, and savor the taste of sophistication on a website that seamlessly blends aesthetics with functionality.',
                url : 'https://delicacieshotel.netlify.app/',
                status : 'Acconmlished',
                images : [delicaciesHotelImg]

            },
            {
                name : 'Nicholas Website',
                description : 'Explore our client`s stunning online portfolio, meticulously crafted with the latest web technologies. This dynamic showcase seamlessly blends HTML5 and CSS for a visually captivating experience, while the sleek design is elevated with Tailwind CSS. The addition of JavaScript brings interactivity to the forefront, ensuring a user-friendly .',
                url : 'https://kariukinicholas.netlify.app/',
                status : 'Acconmlished',
                images : [Nicholas1]

            }
                
            
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