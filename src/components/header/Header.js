import React from 'react'
import './header.css'
import CTA from './CTA'


function Header() {
  return (

    <header>
      <div className='container header__container'>
        <h3>Hello I'm</h3>
        <h2>Rizwan Ahmad Khan</h2>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA />
      </div>

    </header>



  )
}

export default Header