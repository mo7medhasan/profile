import React from 'react'
import "./style.css"
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';
function Sidebar() {


    return (
        <>
            <section className='logoStyle'>
                <div style={{ margin: "auto" }}> M</div>
            </section>
            <section className='sectionStyle2' >
                <div className='borderForIcon'>
                    <HomeIcon className='itemIcon' />
                </div>
                <div className='borderForIcon' >
                    <PersonOutlineOutlinedIcon className='itemIcon' />
                </div>
                <div className='borderForIcon' >
                    <TextSnippetIcon className='itemIcon' />
                </div>
                <div className='borderForIcon' >
                    <WorkIcon className='itemIcon' />
                </div>
                <div className='borderForIcon' >
                    <CallIcon className='itemIcon' />
                </div>
            </section>
        </>
    )
}

export default Sidebar
