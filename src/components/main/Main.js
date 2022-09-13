import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Header from '../header/Header'
import Portfolio from '../Portfolio/Portfolio'
import Resume from '../Resume/Resume'
function Main() {
    return (
        <div id="Top">
             <Header/>
             <About/>
             <Resume/>
             <Portfolio/>
             <Contact/>
             <Footer/>
             
        </div>
    )
}

export default Main
