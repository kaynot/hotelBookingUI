import React from 'react'
import { DatePanel } from './datePanel'

export const Intro = () => {
  return (
    <div className='h-[600px]  w-full p-4  bg-bg-img bg-cover text-white'>
<div className='flex flex-col justify-center  w-full h-full' >
    <h1 className=' text-center text-[44px] font-serif font-extrabold '>Enjoy your Dream Vacation</h1>
    <div className='w-full justify-center flex'>
    <div className='w-[50%]  '>
    <p className=''>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. 
        Duis vulputate commodo lectus, ac blandit elit tincidunt id. 
        Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, 
        et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna.     
    </p>
    </div>
    </div>

</div>
<div className=' relative bottom-10'><DatePanel /></div>

    </div>
  )
}
