import React from 'react'
import Image from 'next/image'
import room1 from './images/pexels-mikhail-nilov-7820379.jpg'
import pic2 from './images/pexels-mikhail-nilov-7820382.jpg'
export const About = () => {
  return (
    <div className='h-[700px] w-full mb-10'>
        <h1 className='text-center text-[44px] font-serif font-extrabold'>
            About Us</h1>
        <div className=' h-full w-full flex p-8'>
            <div className=' w-1/2 h-full flex'>
<div className=' w-[100%] h-full p-8'>
<Image src={room1} alt={'about pic'} className='w-full h-full rounded-2xl' />
</div>
<div className='w-[30%] absolute left-[500px]  mt-[300px] h-[350px]'>
<Image src={pic2} alt={'about pic'} className='w-full h-full rounded-2xl' />
</div>
</div>
            <div className=' w-1/2 h-full flex justify-center p-8'>
            <div className='w-1/2 mt-10'> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
              vulputate commodo lectus, ac blandit elit tincidunt id. Sed
              rhoncus, tortor sed eleifend tristique, tortor mauris molestie
              elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet
              elit iaculis pretium sit amet quis magna.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
              vulputate commodo lectus, ac blandit elit tincidunt id. Sed
              rhoncus, tortor sed eleifend tristique, tortor mauris molestie
              elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet
              elit iaculis pretium sit amet quis magna.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
              vulputate commodo lectus, ac blandit elit tincidunt id. Sed
              rhoncus, tortor sed eleifend tristique, tortor mauris molestie
              elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet
              elit iaculis pretium sit amet quis magna.
              </div>
              
            </div>
            
        </div>
        
    </div>
  )
}
