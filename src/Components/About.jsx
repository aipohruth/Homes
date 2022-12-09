import React from 'react';
//import hero from '../Assets/about.jpg';

/*mix-blend-overlay 
  <div className='bg-gradient-tl from bg-black/50 to-blue-700'>
  */
const About = () => {
  return (
    <div className='w-full md:h-[90vh] h-[70vh]'>
      
    
      <img src='https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="/" className=' w-full h-full object-cover ' />
      
      <div className='max-w-[1200px] m-auto'>
        <div className='absolute z-0 top-[30%] right-[5%]  text-right p-2 w-full max-w-[400px] text-black flex flex-col '>
        <h2 className='text-3xl font-bold'>About Us Home4All</h2>
        <p className=' my-4 font-2xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ut pariatur itaque aperiam tenetur dignissimos illo necessitatibus
             minus mollitia neque! Delectus temporibus excepturi ratione aut architecto quidem vel nesciunt maiores!</p>
             <div>
             <button ><a href='/about' className=' text-black font-bold hover:text-red-500'>Read More</a></button>
             </div>
        </div>
      </div>
     
    </div>
  )
}

export default About
