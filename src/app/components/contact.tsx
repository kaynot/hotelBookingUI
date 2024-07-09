import React from 'react'
import { AiOutlineEnvironment, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'

export const ContactMe = () => {
  return (
    <div className="h-auto p-10 text-white bg-orange-400">
    <h1 className="text-center text-[44px] font-serif font-extrabold">
        Get in Touch
    </h1>
    
    <div className="flex flex-col lg:flex-row justify-center h-auto lg:h-[400px] p-10 text-black">
        <div className="w-full lg:w-[40%] p-2 rounded-l-2xl ">
            
            <ul className="mt-10 font-light flex flex-col space-y-4">
                <li className="flex items-center">
                    <AiOutlineMail size={25} color="white" className="lg:text-4xl mr-2" />
                    Email: hotel@gmail.com
                </li>
                <li className="flex items-center">
                    <AiOutlinePhone size={25} color="white" className="lg:text-4xl mr-2" />
                    Phone: +233 559 630 343
                </li>
                <li className="flex items-center">
                    <AiOutlineEnvironment size={25} color="white" className="lg:text-4xl mr-2" />
                    Location: Accra-Ghana
                </li>
            </ul>
        </div>
        <div className="w-full lg:w-[40%] rounded-r-2xl mt-10 lg:mt-0">
            <form className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Name"
                    className="p-2 rounded-lg text-black w-full lg:w-[80%]" 
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="p-2 rounded-lg text-black w-full lg:w-[80%]"
                />
                <textarea
                    placeholder="Message"
                    className="p-2 rounded-lg text-black w-full lg:w-[80%] h-[100px]"
                ></textarea>
                <button className="bg-pink-200 p-2 rounded-lg w-[50%] lg:w-[20%] text-black">
                    Send
                </button>
            </form>
        </div>
    </div>
  <div className='h-[100px] flex justify-center relative'>
    <div className='w-[60%] h-full bg-white rounded-3xl shadow-xl shadow-black p-4 text-black'>
<div className='flex '>
  <div className='text-[20px] font-serif font-extrabold'>
  Book a room today!
  </div>
  <div className='flex gap-6  w-[80%] justify-end'>
  <div className='bg-black w-[20%] text-white p-4 text-center rounded-full'>
    Get Started
  </div>
  <div className='bg-black w-[20%] text-white p-4 text-center  rounded-full'>
   Contact Us
  </div>
</div>

</div>
<div className='flex gap-6'>
  <div className=' w-[15%]  text-black text-sm'>
  Flexible bugdet
  </div>
  <div className='w-[20%] text-black text-sm'>
   Peaceful Environment
  </div>
  <div className=' w-[25%] text-black text-sm'>
  Well furnished & decorated
  </div>
</div>
    </div>
  </div>
</div>

  )
}
