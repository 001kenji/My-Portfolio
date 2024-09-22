import React, { useState } from "react";

import '../CSS/universal.css'

export default Home 

function Home()  {
    

    const Info = [

        {
            description : 'My passion lies in bridging the gap between ideas and user experiences, crafting interactive and visually stunning web interfaces that captivate and engage. Armed with expertise in HTML, CSS, JavaScript, and a diverse range of frontend frameworks, I am adept at translating concepts into functional solutions that are both user-friendly and technically robust.'
        },
        {
            description : 'Driven by a hunger for continuous learning and a thirst for the latest trends, I am constantly striving to push boundaries and evolve within the ever-changing landscape of frontend development. My dedication to collaboration and a strong work ethic make me a valuable asset to any team.'

        }
        
    ]

    const [index,setIndex] = useState(0)

    const infoMapper = Info.map((details) => 
    <div id="mapping-div">
        <blockquote>{details.description}</blockquote>
    </div>
    )

    const circleMapper = Info.map((detial,i) => 
    <div>
        <p key={i} className=" w-5 h-5 rounded-full bg-slate-500"></p>
    </div>
    )

    let [current,setcurrent] = useState(0)
    let Prev = () => {
       if(current ===0){
          setcurrent(reviewData.length - 1)
       }
       else {
          setcurrent(current - 1)
       }
    }
    let Next = () => {
       if(current ===reviewData.length - 1){
          setcurrent( 0)
       }
       else {
          setcurrent(current + 1)
       }
    }

const circles = Info.map((s,i) => 

<div>
 <div id='cirlces'
 onClick={() => setcurrent(i)}
key={"circle" + i}
className={` ${i == current ? "bg-slate-950" : "bg-sky-700"}   rounded-full w-3 h-3 sm:w-5 sm:h-5 hover:bg-slate-800 focus:bg-slate-800` }>
 
</div>
</div>

)   

    return (
        <>
        
        <div className={`  bg-slate-50`} id="home-owning-div">{/* owning div */}
            
            <div id="home-container-div" className=" lg:bg-slate-200">
                 <div id="image-div">{/* image div */}
                <img className=" rounded-full md:rounded-md" src="" alt="" />
            </div>

            <div style={{transform: `translateX(-${current * 100}%)`}}  className= "   transition ease-in-out duration-500 relative pt-4 w-[100%]  m-auto" id="mapper-div">{/* content div */}
                {infoMapper}
                
            </div>
            </div>
           

           

        </div>
            <div id="circle-div" className="  flex flex-row gap-6 justify-stretch mx-auto w-full">
                {circles}
            </div>
        </>
    )
}