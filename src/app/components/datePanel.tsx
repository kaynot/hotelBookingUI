import React from 'react'

export const DatePanel = () => {
  return (
    <div className='h-[100px]  w-full p-4 flex justify-center  text-black'>
        <div className='w-1/2 bg-white h-full rounded-xl shadow-2xl border border-orange-400 '>
<div className='flex justify-between p-4'>
<div className=' h-[40px] bg-white shadow-xl border border-orange-400 p-2 rounded-xl'>
            Adult(s):
            <select name="adults"  className="ml-2">
              <option  value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className=' h-[40px] bg-white shadow-xl border border-orange-400  p-2 rounded-xl' >
            Children:
            <select name="children" className="ml-2">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className=' h-[40px] bg-white shadow-xl border border-orange-400  p-2 rounded-xl'>
        Check In:
        <input type="date" name="checkIn"  className="ml-2" />  
      </div>
      <div className=' h-[40px] bg-white shadow-xl border border-orange-400  p-2 rounded-xl'>
        Check Out:
        <input type="date" name="checkOut" className="ml-2" />  
      </div>
</div>
        </div>
    
        </div>
  )
}
