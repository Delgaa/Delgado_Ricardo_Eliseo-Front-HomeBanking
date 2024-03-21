import React, { useState } from 'react'
import Anchor from './Anchor'
import { LINKS_NAV } from '../utils/links'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faList, faDoorOpen} from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from 'react-redux'
import  authActions  from '../redux/actions/auth.actions'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Header() {
    const [menu, setMenu] = useState(false)
    const dispatch = useDispatch()
    const {logout} = authActions
    const navigate = useNavigate();

    
    const toggleMenu = () => {
        setMenu( !menu )
    }

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure you want to go out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(logout());
                navigate('/login');
            }});
    }

    return (
        <>
        <button id='moostNav' onClick={toggleMenu} >
        <FontAwesomeIcon className= 'text-white text-3xl' icon={faList} />
        </button>
        <h2 className='absolute z-30 md:z-40 w-[175px] pt-6 pl-4 md:w-[200px] text-center md:pt-2 md:fixed text-[#93b3e2]'>Mind<span className='italic'>Bank</span></h2>
        <header className={` ${menu ? "isActive" : "" } `}>
            <div id='contendHeader'>

            <nav id='nav'>
                {
                    LINKS_NAV.map((link) => (<Anchor key ={link.name} href={link.href} icon = {link.icon} content={link.name }></Anchor>))
                }
            </nav>
        </div >
            <p id='logout' onClick={handleLogout} className='flex flex-col items-center hover:text-red-600 self-start' title='Logout'>
            <FontAwesomeIcon className='text-2xl' icon={faDoorOpen} />
            Logout
            </p>
        </header>
        </>
    )
}

export default Header