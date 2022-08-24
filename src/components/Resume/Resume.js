import React from 'react';
import Experience from './Experience/Experience';
import hr from 'https://amazon-apies.herokuapp.com/uploads/2022-08-24T10-55-12.887Z-line zigzag.png'

import Education from './Education&Skills/Education'
function Resume() {
  return (<> <div className='container' id='Experience'>
    <Experience /> </div>
    <img src={'https://amazon-apies.herokuapp.com/uploads/2022-08-24T10-55-12.887Z-line zigzag.png'} alt='hr line zigzag png' className='img-hr-line-zigzag' loading="lazy"/>
    <img src={'https://amazon-apies.herokuapp.com/uploads/2022-08-24T10-55-12.887Z-line zigzag.png'} alt='hr line zigzag png' className='img-hr-line-zigzag' loading="lazy"/>
    <img src={'https://amazon-apies.herokuapp.com/uploads/2022-08-24T10-55-12.887Z-line zigzag.png'} alt='hr line zigzag png' className='img-hr-line-zigzag' loading="lazy"/>
    <img src={'https://amazon-apies.herokuapp.com/uploads/2022-08-24T10-55-12.887Z-line zigzag.png'} alt='hr line zigzag png' className='img-hr-line-zigzag' loading="lazy"/>
      <div className='container'>
        <Education/>
    </div>
    
    
    </>
  )
}

export default Resume;
