import React from 'react'
import video from '../../../assets/video2.mp4'
function Background() {
    return (
        <video
        autoPlay
        loop
        muted
        style={{position:"absolute"
        ,width:'100%',
        left:'0',
        top:'0',
        objectFit:"cover",
       
        zIndex:"-1"
        }}>
            <source src={video} type='video/mp4'/>
        </video>
    )
}

export default Background
