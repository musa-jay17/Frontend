import React from 'react'
import './Programs.css'
import Program_1 from '../../assets/Program.jpeg'
import Program_2 from '../../assets/donation-2.jpg'
import Program_3 from '../../assets/Program-3.png'
import Program_Eid_icom from '../../assets/Eid-icon.jpg'

const Programs = () => {
  return (
      <div className='Programs'>
            <div className='Program'>
              <img src={Program_1} alt="" />
              <div className= "caption">
                <img src= {Program_Eid_icom} alt="" />
                <p> Eid Celebration</p>
              </div> 
          </div>
          <div className='Program'>
              <img src={Program_2} alt=""/>
          </div>
          <div className='Program'>
              <img src={Program_3} alt=""/>
          </div>
    </div>
  )
}

export default Programs
