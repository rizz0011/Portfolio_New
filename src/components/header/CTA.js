import React from 'react'
import React_dev_3y_Rizwan from '../../assets/Rizwan_Resume_ReactJs_3.5Y.pdf.pdf'

function CTA() {
    return (
        <div className='cta'>
            <a href={React_dev_3y_Rizwan} download className='btn'>Download CV</a>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA