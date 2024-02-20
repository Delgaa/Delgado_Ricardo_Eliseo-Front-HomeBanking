import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from 'react-router-dom'


function Anchor(props) {
  return (
    <NavLink to={props.href} className={({isActive, isPending}) => {isActive ? "text-[#ff0000]": ""}}><FontAwesomeIcon className='w-[20px]' icon = {props.icon}/> {props.content}</NavLink>
  )
}

export default Anchor