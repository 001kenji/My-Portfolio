import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '../CSS/universal.css'

import fail from '../assets/fail.jpg'
import tick from '../assets/tick.jpg'
import loadImg from '../assets/loader.png' 

export default Contact 
function Contact() {

    const {register,handleSubmit,formState} = useForm()
    const {errors,isSubmitting} = formState

    function Handlechange(event) {
        const {value, name} = event.target
    
        setdata((e) => {
            return {
                ...e,
                [name] : value
            }
        })
        console.log(emailData)
    }

   

    const [progError,seterror] = useState(false)
    const [progSuccess,setSuccess] = useState(false)
    const [progLoad, setload] = useState(false)
    const progressSuccess = {
        display : progSuccess ? 'flex' : 'none'
    }
    const progressError = {
        display : progError ? 'flex' : 'none'
    }
    const progressLoad = {
        display : progLoad ? 'flex' : 'none'
    }
  
    const errorDiv = document.getElementsByName('errorDiv')
    const successDiv = document.getElementsByName('successDiv')
    const loadDiv = document.getElementsByName('loadDiv')
   
   
    function Showerror(props){
        if(props == 'show'){
           seterror(true)
        }else if(props == 'hide'){
            seterror(false)
        }
    }
    function ShowSuccess(props){
        if(props == 'show'){
            setSuccess(true)
        }else if(props == 'hide'){
            setSuccess(false)
        }
    }
    function ShowLoad(props){
        const loadDiv = document.getElementsByName('loadDiv')
        if(props == 'show'){
            setload(true)
        }else if(props == 'hide'){
            setload(false)
        }
    }
    const [emailData, setdata] = useState(
        {
            to_name : "BRIAN",
            from_name : "",
            message : "",
            email_id  : "briannjuguna694@gmail.com"
        }
    )

    function SubmitForm(event) {
        var btn = document.getElementById('button')
        event.preventDefault();
     
        btn.innerHTML = 'Sending...';
         ShowLoad('show')
        const serviceID = 'service_sg63kre';
        const templateID = 'template_k3z79sn';
        console.log(emailData)
     
         emailjs.send(serviceID, templateID, emailData)
         .then(() => {
           btn.innerHTML = 'Send';
           ShowLoad('hide')
           ShowSuccess('show')
           setTimeout(() => {
             ShowSuccess('hide')
           }, 2000);
 
           
         }, (err) => {
           btn.innerHTML = 'Send';
           ShowLoad('hide')
           Showerror('show')
           setTimeout(() => {
             Showerror('hide')
           }, 3000);
         });
 
 
     }; 

    return (
        <>
       
        <div className=" " id='owning-contact-div'> {/* owning contact div */}

        <div style={progressError} className="top-0 sticky" name='errorDiv' id="notifier">
                <img className="w-6 animate-ping p-1.5 sm:w-8 "  src={fail} alt="" />
              <p className="text-sm font-semibold text-slate-100  sm:text-base" id="error">Error</p>   
            </div>
            <div style={progressSuccess} className="top-0 sticky" name='successDiv' id="notifier" > 
                <img className="w-6 sm:w-8 "  src={tick} alt="" />
                <p className="bg-black  text-sm sm:text-base rounded-sm top-1 text-green-500 font-bold p-2 mx-auto w-fit">Successfull</p>
           </div>
            <div style={progressLoad} className="top-0 sticky" name='loadDiv' id="notifier">
                <img className="w-6 bg-blue-500 p-1 animate-spin sm:w-8 "  src={loadImg} alt="" />
                <p className="bg-black animate-pulse text-sm sm:text-base rounded-sm top-1 text-blue-500 font-bold p-2 mx-auto w-fit" >Loading...</p>
            </div>


        <div id="heading-contact-div"> {/* heading contact div */}
        <span className="  flex flex-row gap-4">Contact <p className=" text-cyan-800">Me</p></span>
        <p>
            
        </p>

        </div>
        <div>


             <form className=" " onSubmit={SubmitForm} id="form">
                <div  id="field">
                    {/* <label for="to_name">to_name</label> */}
                    <input required  value='NICHOLAS'  type="text" name="to_name" id="to_name" />
                </div>
                <div className="field2">
                    {/* <label for="from_name">from_name</label> */}
                    <input onChange={Handlechange} placeholder="FULL NAME" type="text" name="from_name" id="from_name"  />
                </div>
                <div style={{display : 'none'}} className="field4">
                    {/* <label for="email_id">email_id</label> */}
                    <input disabled value='briannjuguna694@gmail.com' onChange={Handlechange} placeholder="EMAIL" type="text" name="email_id" id="email_id"  />
                </div>
                <div className="field3">
                    {/* <label for="message">message</label> */}
                    <textarea required onChange={Handlechange} placeholder="MESSAGE" type="text" name="message" id="message" ></textarea>
                </div>
                

                <button title="send email" className=" text-black bg-amber-500 mx-auto p-1 rounded-sm focus:bg-cyan-800 focus:border-amber-500" type="submit" id="button">SEND</button>
                </form>


        </div>

        </div>
        </>
    )
}