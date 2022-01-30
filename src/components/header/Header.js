import React from 'react'
import './header/style.css'

import FullWidthGrid from './header/HeaderMain';
import { styled } from '@mui/material/styles';
export default function Header() {
  const ulStyle = { display : "block" ,maxHeight:"100vh",width:"100%"}
  return (
    <header style={ulStyle}>
      <nav className='navbar'>
        <div className='navbar-content'>
          +20 015 5000 3860
        </div>
        <div className='navbar-content'>
          mo7med.hasan5@gmail.com
        </div>
      </nav>
        <FullWidthGrid/>
    </header>
  )
}
