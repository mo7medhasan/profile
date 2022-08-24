import React from 'react'
import About1 from './About-content/About1'
import hr from 'https://amazon-apies.herokuapp.com/uploads/2022-08-24T10-55-12.887Z-line zigzag.png'
import About2 from './About-content/About2'
import './About-content/style.css'
export default function About() {
    return (
        <div style={{backgroundColor:"#F7F7FF",position:"relative"}} id='About'>
            <About1/>
            <img src={'https://amazon-apies.herokuapp.com/uploads/2022-08-24T10-55-12.887Z-line zigzag.png'} alt='hr line zigzag png' className='img-hr-line-zigzag'loading="lazy" />
            <img src={'https://amazon-apies.herokuapp.com/uploads/2022-08-24T10-55-12.887Z-line zigzag.png'} alt='hr line zigzag png' className='img-hr-line-zigzag'loading="lazy" />
            <img src={'https://amazon-apies.herokuapp.com/uploads/2022-08-24T10-55-12.887Z-line zigzag.png'} alt='hr line zigzag png' className='img-hr-line-zigzag'loading="lazy" />
            <img src={'https://amazon-apies.herokuapp.com/uploads/2022-08-24T10-55-12.887Z-line zigzag.png'} alt='hr line zigzag png' className='img-hr-line-zigzag'loading="lazy" />

            <About2/>
        </div>
    )
}
