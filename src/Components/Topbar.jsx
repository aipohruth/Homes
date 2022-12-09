import React, {useState} from 'react';
import {BiHomeHeart} from 'react-icons/bi';
import {AiOutlinePhone, AiOutlineClockCircle} from 'react-icons/ai';
import Modal from './Modal';


const Topbar = () => {
  const [showModal, setShowModal] = useState(false)


  return (
    <div className='max-w-full'>
     
        <div className='flex justify-between items-center px-4 py-2'>
          <div className='flex items-center'>
          <BiHomeHeart className='text-[#0f5963] ' size={30} />
          <p className='text-gray-700 text-xl sm:text-3xl font-bold'>Home4All</p>
          </div>
          <div className='flex'>
            <div className='hidden md:flex items-center px-6 cursor-pointer'>
              <AiOutlinePhone size={25} className='mr-2 text-[#0f5963] ' />
              <p className='text-gray-700 text-sm'>+1-542-5436-555</p>
            </div>
            <div className='hidden md:flex items-center  px-6'>
              <AiOutlineClockCircle  size={25} className='mr-2 text-[#0f5963]' />
              <p className='text-gray-700 text-sm'>8AM - 4PM</p>
            </div>
            <button  onClick={() => setShowModal(!showModal)} className='text-sm'>Inspection Booking</button>
          </div>
        </div>
       {/*<div className=' hidden sm:flex'>
        <marquee className='text-sm text-white px-0'>Inspection starts from 10AM - 3PM</marquee>
        <marquee className='text-sm text-gray-800 px-0'>Inspection starts from 10AM - 3PM</marquee>
        <marquee className='text-sm text-white px-0'>Inspection starts from  10AM - 3PM</marquee>
        
        </div>*/}
        
        {showModal && <Modal setShowModal={setShowModal} /> } 
       
        </div>
        
      
  )
}

export default Topbar
