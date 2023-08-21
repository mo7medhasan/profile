import React from 'react'
import './header/style.css'

import FullWidthGrid from './header/HeaderMain';

export default function Header() {

  return (
    <header style={{position:"static",paddingTop:"2.5rem"}}>
      <nav className='navbar'>
        <div className='navbar-content'>
         <a href='tel:+201550003860'> +20 155 000 3860</a>
        </div>
        <div className='navbar-content'>
        <a href='mailto:mo7med.hasan5@gmail.com'> mo7med.hasan5@gmail.com</a>
        </div>
      </nav>
      <section className='nav-down'>
        <FullWidthGrid/></section>
    </header>
  )
}
