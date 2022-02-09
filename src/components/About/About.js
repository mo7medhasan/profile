import React from 'react'
import About1 from './About-content/About1'
import hr from '../../assets/line zigzag.png'
import About2 from './About-content/About2'
import './About-content/style.css'
export default function About() {
    return (
        <div style={{backgroundColor:"#F7F7FF",position:"relative"}} id='About'>
            <About1/>
            <img src={hr} alt='hr line zigzag png' className='img-hr-line-zigzag' />
            <img src={hr} alt='hr line zigzag png' className='img-hr-line-zigzag' />
            <img src={hr} alt='hr line zigzag png' className='img-hr-line-zigzag' />
            <img src={hr} alt='hr line zigzag png' className='img-hr-line-zigzag' />

            <About2/>
        </div>
    )
}
