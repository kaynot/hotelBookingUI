import React from 'react'
import { FaHotel } from 'react-icons/fa6'

export const Nav = () => {
  return (
    <div className='h-[80px] p-4 '>
        <nav className="">
            <div className="flex justify-between items-center">
            <div className=" font-bold text-[34px] text-orange-400 flex"><FaHotel/><h1 className=''>oTeL</h1></div>
            <div className='w-1/2 text-center'>
                <a href="#" className=" p-2">Home</a>
                <a href="#" className="p-2">About</a>
                <a href="#" className=" p-2">Contact</a>
            </div>
            <div className='flex gap-4 '> 
                <a href="#" className="p-2">Login</a>
                <div className='p-2  shadow-2xl border border-white rounded-2xl bg-orange-400 text-white'>
                <a href="#" className="p-2">Book Now</a>
                </div>
            </div>
            </div>
        </nav>
    </div>
  )
}
