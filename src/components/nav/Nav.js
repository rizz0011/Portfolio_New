import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {BiUserPin} from 'react-icons/bi'
import {BsFillBookmarkCheckFill} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {MdContactPhone} from 'react-icons/md'

function Nav() {

const [active, setActive] = React.useState('a')

  return (
   <nav>
    <a href='#' onClick={()=> setActive('a')} className={active === 'a' ? 'active' :''}><AiFillHome/></a>
    <a href='#about' onClick={()=> setActive('#about')}  className={active === '#about' ? 'active' :''}><BiUserPin/></a>
    <a href='#experience'  onClick={()=> setActive('#experience')}  className={active === '#experience' ? 'active' :''}><BsFillBookmarkCheckFill/></a>
    <a href='#services' onClick={()=> setActive('#services')}  className={active === '#services' ? 'active' :''}><RiServiceLine/></a>
    <a href='#contact' onClick={()=> setActive('#contact')}  className={active === '#contact' ? 'active' :''}><MdContactPhone/></a>
   </nav>
  )
}
 
export default Nav