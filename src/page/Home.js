import React from 'react'
import Main from '../components/main/Main'

import Sidebar from '../components/siderbar/Sidebar'
import './style.css'
export default function Home() {
 

    return (
        <>
            <aside  className='sidebarStyle'>
                <Sidebar />
            </aside>
             <main  className='mainStyle'>
                <Main />
                </main>
        </>
    )
}
