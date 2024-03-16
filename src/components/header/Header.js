import React from 'react'
import './header.css'
import CTA from './CTA'
import IMG from '../../assets/headerImg.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (

    <header>
      <div className='container header__container'>
        <h3>Hello I'm</h3>
        <h2>Rizwan Ahmad Khan</h2>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className='imggg'>
          <img src={IMG} alt='' />
        </div>
        <a href='' className='scroll__down'>Scroll Down</a>
      </div>

    </header>



  )
}

export default Header