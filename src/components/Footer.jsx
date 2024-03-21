import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className=' h-[6vh] flex items-center justify-around relative'>
        <div id="copyright">
            <h2>
            &copy; 2024 - All rights reserved
            </h2>
        </div>
        <div className='flex gap-2'>
            <FontAwesomeIcon className='text-white text-xl' icon={faInstagram} />
            <FontAwesomeIcon className='text-white text-xl' icon={faFacebook} />
            <FontAwesomeIcon className='text-white text-xl' icon={faTwitter} />
        </div>
    </footer>
  )
}

export default Footer