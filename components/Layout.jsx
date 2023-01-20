import React, { } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Layout({ children }) {

    return (
        <div className='bg-[#F1F1F1]'>
            <Navbar/>
            <div className="flex">
                <div>
                    <Sidebar/>
                </div>
                <div className="flex-1 ">
                    <main>{children}</main>
                </div>
            </div>

          
        </div>
    )
}
