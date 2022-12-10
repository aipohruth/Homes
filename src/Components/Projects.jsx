import React from 'react';
import {SiCodeproject} from 'react-icons/si';
import {AiTwotoneStar} from 'react-icons/ai';
import {FaMapMarkerAlt} from 'react-icons/fa';
import  {Project1}  from '../Data/Data1';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1200px] m-auto p-4 my-9'>
        <div className='flex justify-center items-center'>
            < SiCodeproject size={25}  className='text-gray-700'  />
      <h1 className='text-center text-gray-700 font-medium border-b-2 border-b-[var(--primary-light)]  text-3xl'>Our Projects</h1>
      </div>
        <div className='grid grid-cols-1  w-full mt-10 p-6 sm:grid-cols-3 gap-4'>
           {Project1.map((project, id) =>{
            const{name,image,text} = project;
            return(<div key={id} className='border rounded-md p-2'>
                <img src={image} className='rounded-md' alt={name} />
                <div className='flex justify-between my-2'>
                    <p className='text-sm font-bold mx-2'>{name}</p>
                    <p className='text-xs flex items-center'>< FaMapMarkerAlt className='mr-1'/>{text}</p>
                </div>
                <div className='flex mx-1 text-[var(--primary-light)]'>
            <AiTwotoneStar className='mr-1' />
            <AiTwotoneStar className='mr-1' />
            <AiTwotoneStar className='mr-1' />
            <AiTwotoneStar className='mr-1' />
            <AiTwotoneStar className='mr-1' />
        </div>
            </div>
            )
           })}
        </div>
        <div className='flex justify-center mt-2'>
        <button className=' rounded-lg'>See More</button>
        </div>
        

    </div>
  )
}

export default Projects
