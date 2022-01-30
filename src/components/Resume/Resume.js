import React from 'react';
import Experience from './Experience/Experience';
import hr from '../../assets/line zigzag.png'
import Education from './Education&Skills/Education'
function Resume() {
  return (<> <div className='container'>
    <Experience /> </div>
    <img src={hr} alt='hr line zigzag png' className='img-hr-line-zigzag' />
      <div className='container'>
        <Education/>
    </div>
    
    
    </>
  )
}

export default Resume;
