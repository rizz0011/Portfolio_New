import React from 'react'
import FrontEnd_dev_RizwanAhmadKhan from '../../assets/FrontEnd_dev_RizwanAhmadKhan.pdf'

function CTA() {
    return (
        <div className='cta'>
            <a href={FrontEnd_dev_RizwanAhmadKhan} download className='btn'>Download CV</a>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA