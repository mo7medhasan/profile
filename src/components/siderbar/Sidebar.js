import React from 'react'
import "./style.css"
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';



function Sidebar() {


    return (
        <div className='siderbar-content'><a href='#Top'>
            <section className='logoStyle'>
                <div style={{ margin: "auto" }}> M</div>
            </section></a>
            <section className='sectionStyle2' >
                
                <div className='borderForIcon'><a href='#Top'>
                    <HomeIcon className='itemIcon' /></a>
                </div>
                <div className='borderForIcon' ><a href='#About'>
                    <PersonOutlineOutlinedIcon className='itemIcon' /></a>
                </div>
                <div className='borderForIcon' ><a href='#Experience'>
                    <TextSnippetIcon className='itemIcon' /></a>
                </div>
                <div className='borderForIcon' ><a href='#Portfolio'>
                    <WorkIcon className='itemIcon' /></a>
                </div>
                <div className='borderForIcon' >
            <a href="#contact">
                    <CallIcon className='itemIcon' />
                </a>
                </div>
            </section>
        </div>
    )
}

export default Sidebar
