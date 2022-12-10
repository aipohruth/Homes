import React, {useState} from 'react';
import {BsFillBookFill} from 'react-icons/bs';
import {AiTwotoneStar} from 'react-icons/ai';
import {FaQuoteLeft} from 'react-icons/fa';

import { testimonials } from '../Data/Data2';

const Testimonials = () => {
    const[people] = useState(testimonials);
    
   



  return (
    <div id='testimonials' className='max-w-[1200px]  m-auto p-4 my-9'>
        <div className='flex items-center justify-center my-8'>
            <BsFillBookFill className='mr-2 text-gray-800' size={25} />
      <h1 className='text-center text-gray-700 font-medium border-b-2 border-b-[var(--primary-light)]  text-3xl'>Testimonials</h1>
      </div>
           
      <div  className=' max-w-[600px] h-full w-full mx-auto cursor-pointer bg-white grid grid-rows-1 p-4 md:grid    md:grid-cols-3 gap-4   '>
                {people.map((person, personIndex) =>{
                    const {image, name, text} = person;
                    return (<div key={personIndex}  className='rounded-md first:col-span-1  first:row-span-1 border shadow-xl flex flex-col items-center '>
                        <img src={image} alt={name} className='w-[50px] h-[50px] m-4 rounded-full object-cover' />
                        <FaQuoteLeft size={10} />
                        <p className='text-gray-700 px-4 text-[14px] '>{text}</p>
                        
                        <span className=' text-sm mt-3 font-bold mb-1 text-gray-700'>{name}</span>
                        <div className='flex mb-4 text-[var(--primary-light)]'>
                            <AiTwotoneStar  />
                            <AiTwotoneStar  />
                            <AiTwotoneStar  />
                            <AiTwotoneStar  />
                            <AiTwotoneStar  />
                        </div>
                            </div>
                        
             
              
           
                    )
                    
                })}
                
                </div>


    </div>
  )
}

export default Testimonials

