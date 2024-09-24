import React, { useEffect, useState } from "react";
import { redirect,Navigate } from "react-router-dom";

export default function SplashScreen () {
    const [IsDone,SetIsDone] = useState(false)
    useEffect(() => {
        console.log('am the splash')
        
        setTimeout(() => {
            SetIsDone(true)
        }, 3000);
    },[])
    if(IsDone){
        return <Navigate to="/home" replace />;
    }

    return (
        <>
            <p>am the splash screen</p>
        
        </>
    )
}

