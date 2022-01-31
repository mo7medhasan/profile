import React from 'react'
import About from '../About/About'
import Header from '../header/Header'
import Portfolio from '../Portfolio/Portfolio'
import Resume from '../Resume/Resume'
function Main() {
    return (
        <div>
             <Header/>
             <About/>
             <Resume/>
             <Portfolio/>
        </div>
    )
}

export default Main
