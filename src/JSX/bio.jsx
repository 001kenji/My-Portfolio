import React from "react";

import '../CSS/universal.css'

export default Bio 

function Bio()  {

    return (
        <>
        
        <div className=" bg-slate-950 bg-opacity-80 text-slate-100" id="owning-bio-div">{/* bio container */}
            <div id="bio-heading-div">{/* bio heading */}
                <span>Bio</span>
            </div>

            <div id="bio-content-div" className="flex flex-col gap-3 text-slate-200">{/* bio contnet */}
                        <div id="fist-content">
                        <span className="italic">Hey there,</span>
                         
                        </div>
                        <div id="second-content">
                            <blockquote>I'm a passionate Frontend Developer who thrives on creating beautiful and engaging user experiences. With a toolbox full of HTML5, CSS, JavaScript, Tailwind CSS, and React, I'm ready to bring your web projects to life.</blockquote>
                            <blockquote>My code is not just clean and functional, but also infused with a touch of creativity and a sprinkle of fun.  I believe in building user-centric interfaces that are not only visually appealing but also intuitive and easy to navigate.</blockquote>
                                        
                        </div>
                    
            </div>
        </div>
        </>
    )
}