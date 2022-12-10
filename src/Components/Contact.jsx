import React from 'react';
import MapContainer from './Map';

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1200px] m-auto p-4 my-9'>
        <div className='grid grid-rows-1 sm:grid-cols-2 gap-4 mt-4'>
            <div className='hidden sm:grid'>
                <MapContainer/>
            </div>
            <div>
            <h2 className='text-center text-xl text-gray-700 font-bold my-4'>Contact Us</h2>
            <form>
                    
                <div className='grid grid-cols-1 px-6'>
                    <input className='border border-gray-600 px-6 my-2 py-2 ' type="text" placeholder='Name' />
                    <input  className='border border-gray-600 px-6 my-2 py-2 '  type="email" placeholder='Email' />
                    <input  className='border border-gray-600 px-6 my-2 py-2'  type="number" placeholder='Contact No' />
                    <textarea  className='border border-gray-600 px-2 my-2 py-2 ' cols="5" rows="5" placeholder='Message ..'></textarea>
                    <button className='mt-2' >Send Message</button>
                </div>
            </form>
            </div>
        </div>
    
    </div>
  )
}

export default Contact
