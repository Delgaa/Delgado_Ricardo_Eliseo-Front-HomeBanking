import React, { useState } from 'react'
import Anchor from './Anchor'
import { LINKS_NAV } from '../utils/links'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars, faDoorOpen} from "@fortawesome/free-solid-svg-icons"

function Header() {
    const [menu, setMenu] = useState(false)
    
    const toggleMenu = () => {
        setMenu( !menu )
    }
    return (
        <>
        <button id='moostNav' onClick={toggleMenu} >
        <FontAwesomeIcon className= 'text-white text-3xl' icon={faBars} />
        </button>
        <h2 className='absolute z-30 md:z-40 w-[175px] pt-6 pl-4 md:w-[200px] text-center md:pt-2 italic text-[#93b3e2]'>Mind<span className='italic'>Bank</span></h2>
        <header className={` ${menu ? "isActive" : "" } `}>
            
            <nav>
                {
                LINKS_NAV.map((link) => (<Anchor key ={link.name} href={link.href} icon = {link.icon} content={link.name }></Anchor>))
                }
            </nav>
            <button className='flex flex-col items-center hover:text-red-600' title='logout'>
            <FontAwesomeIcon className='text-2xl' icon={faDoorOpen} />
            Logout
            </button>
        </header>
        </>
    )
}

export default Header