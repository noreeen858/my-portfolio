import React from 'react'
import { FiAlignJustify } from "react-icons/fi";

const Navebar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'> Noreen khan</div>
            <ul className="gap-10 lg:gap-16 hidden md:flex"> 
              <li className='manuLink'><a href='#hero'> Home</a></li>
              <li className='manuLink'><a href='#about'> about</a></li>
              <li className='manuLink'><a href='#skills'> skills</a></li>
              <li className='manulink'><a href='#contact-us'> contact</a></li>





              </ul>
              <FiAlignJustify  className='md:hidden' size={30}/>

              
            

            
              
        </div>
      
    </div>
  )
}

export default Navebar
