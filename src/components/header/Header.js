import React from 'react'
import ResponsiveAppBar from './header/ResponsiveAppBar'
import Background from './header/Background'

import FullWidthGrid from './header/HeaderMain';
export default function Header() {
  const ulStyle = {}
  return (
    <header style={ulStyle}>
       <ResponsiveAppBar/>
        <Background/>
        <FullWidthGrid/>
    </header>
  )
}
