import React from 'react'
import './experience.css'

import { BsFillPatchCheckFill } from 'react-icons/bs'



function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I have </h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__forntend'>
          <h3>Forntend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                
              <h4>Material UI</h4>
              <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Redux</h4>
              <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
                </div>
            </article>
          </div>
        </div>

        <div className='experience__other'>
        <h3>Other Skills</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                
              <h4>Core Java</h4>
              <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                
              <h4>MYSQL</h4>
              <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                
              <h4>Github</h4>
              <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                
              <h4>Jira</h4>
              <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                
              <h4>Postman</h4>
              <small className='text-light'>Intermediate</small>
                </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience