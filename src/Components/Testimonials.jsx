import React, {useState} from 'react';
import {BsFillBookFill} from 'react-icons/bs';
import {AiTwotoneStar} from 'react-icons/ai';
import {FaQuoteLeft} from 'react-icons/fa';
//import {FiChevronRight,FiChevronLeft} from 'react-icons/fi';
import { testimonials } from '../Data/Data2';

const Testimonials = () => {
    const[people, setPeople] = useState(testimonials);
    /*const[index, setIndex] = useState (0);

    useEffect(() =>{
        const lastIndex = people.length -1;
        if(index < 0){
          setIndex(lastIndex)
        }
        if(index > lastIndex){
          setIndex(0)
        }
         },[index, people])
        
        useEffect(() =>{
         const slide = setInterval(() =>{
            setIndex(index + 1)
          }, 3000)
          return () => clearInterval(slide)
        },[index])
           <button  className='rounded-full p-1 absolute top-[50%] left-4'><FiChevronLeft/></button>
                <button   className='rounded-full p-1 absolute top-[50%] right-4'><FiChevronRight/></button>*/



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


/* const { id, image, name, title, quote} = person;
            //more stuff coming here 
            let position = 'nextSlide'
            if(personIndex === index){
              position = 'activeSlide'
            }
            if(personIndex === index -1 || (index === 0 && personIndex === people.length -1)){
              position = 'lastSlide'
            }*/




            /*
              <div className=' flex flex-col justify-center items-center'>
                    <img src={pp3} alt='name' className='w-[80px] h-[80px] rounded-full object-cover my-4' />
                   
                    <FaQuoteLeft size={10} />
                        <p className='text-gray-700 px-10 pt-2 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae eligendi, earum 
                            tempore in sit impedit mane, unde veniam maxime mollitia assumenda
                              dolores! Vel, quod aperiam.</p>
                    <span className=' text-sm mt-3 font-bold mb-1 text-gray-700'>Melissa Joe</span>
                        <div className='flex mb-4 text-[var(--primary-light)]'>
                <AiTwotoneStar  />
                <AiTwotoneStar  />
                <AiTwotoneStar  />
                <AiTwotoneStar  />
                <AiTwotoneStar  />
            </div>
                </div>
                <button className='rounded-full p-1 absolute top-[50%] left-4'><FiChevronLeft/></button>
                <button className='rounded-full p-1 absolute top-[50%] right-4'><FiChevronRight/></button>
            
            
            */