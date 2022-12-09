import React from 'react'

const Modal = ({setShow}) => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    e.target.reset();
  }
  

  return (
    <div className='fixed inset-0 backdrop-blur-sm z-40 flex justify-center items-center'>
      <div className=' bg-white w-[300px] shadow-lg relative mx-auto p-6'>
      <form onSubmit={handleSubmit}  >
            <div className='mt-4 w-full grid grid-cols-1'>
                <input className='border p-1  m-2 outline-none text-sm'required type="text" placeholder= 'Name' />
                <input className='border p-1 m-2 outline-none text-sm' required type="number"  placeholder='Tel'/>
                <label className='text-md ml-2 text-bold'>Pick a Date:</label>
                <input className='border p-1 m-2 outline-none text-sm' required type="date" />
                <label className='text-md m-2 text-bold'>Pick Location:</label>
                <select required className=' rounded-sm outline-none border-2 border-[#0f5963]'>
                    <option className='text-sm '>Abuja</option>
                    <option className='text-sm '>Lagos</option>
                    <option className='text-sm '>Calabar</option>
                    <option className='text-sm '>Port-Harcourt</option>
                </select>
                <button className='w-full my-4 rounded-md'>Submit</button>
            </div>
        </form>
        <div className='absolute top-2 right-4 '>
        <button className='px-2 py-1 rounded-lg' onClick={() => setShow(false)}>X</button>
        </div>
      </div>
    </div>
  )
}

export default Modal










































    
