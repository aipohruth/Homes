import React from 'react';
import hero from '../Assets/about.jpg';


const About = () => {
  return (
    <div className='w-full md:h-[90vh] h-[70vh]'>
      <img src={hero} alt="/" className='w-full bg-gradient-to-r from-slate-500 to-slate-700 h-full object-cover' />
      <div className='max-w-[1200px] m-auto'>
        <div className='absolute z-0 top-[30%] right-[5%] text-right p-2 w-full max-w-[400px] text-black/95 flex flex-col '>
        <h2 className='text-3xl font-bold'>About Us Home4All</h2>
        <p className=' my-4 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ut pariatur itaque aperiam tenetur dignissimos illo necessitatibus
             minus mollitia neque! Delectus temporibus excepturi ratione aut architecto quidem vel nesciunt maiores!</p>
             <div>
             <button ><a href='/about' className='hover:text-red-500'>Read More</a></button>
             </div>
        </div>
      </div>
    </div>
  )
}

export default About
