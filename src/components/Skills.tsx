import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-2 items-center'>
            <div>
                <h2 className='text-4xl md:text-5xl'> Technologies i work with it</h2>
                <p className='text-black-500 pt-2'>i possess a comprehensive range of AI skills, encompassing machine learning, deep learning,and natrual language processing proficient in programming language such as python, java ,c++, i experttly leverage framework like tensorflow and pytroch to develop intelligent solution. with expertise in computer vision, predictive analytics , and  data science , i drive innovation AI applications across various industries.</p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-31xl sm:text-41'>
                    <div className='space-y-2'>
                        <h2>Typescript</h2>
                        <h2>React.js</h2>
                        <h2>Node.js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2>Tailwend</h2>
                        <h2>Css</h2>
                        <h2>Html</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
