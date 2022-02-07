import React from 'react'
import './header/style.css'

import FullWidthGrid from './header/HeaderMain';

export default function Header() {

  return (
    <header>
      <nav className='navbar'>
        <div className='navbar-content'>
          +20 015 5000 3860
        </div>
        <div className='navbar-content'>
          mo7med.hasan5@gmail.com
        </div>
      </nav><nav className='nav-down'>
        <FullWidthGrid/></nav>
    </header>
  )
}
